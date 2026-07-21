import React from 'react';
import { evaluate } from '@mdx-js/mdx';
import * as jsxRuntime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import { SupportedLocale } from '@/types/seo';
import { BlogPostMeta } from '@/types/i18n';
import { slugify } from '@/lib/slug';
// Aliased: despite the `use` prefix (Next MDX convention) this is a plain
// function, not a React hook.
import { useMDXComponents as getMDXComponents } from '@/mdx-components';

/**
 * Blog data layer. Contentful is the single source of truth (content type
 * `blogPost`, one entry per locale+slug, body stored as markdown/MDX text).
 *
 * There is deliberately NO fallback: the legacy filesystem MDX was removed
 * after the migration was verified byte-identical in production. If Contentful
 * is unreachable or misconfigured, the build MUST fail loudly here; a silent
 * fallback would ship an empty blog and quietly de-index every article.
 *
 * Rendering goes through the same mdx-components mapping and remark-gfm as the
 * old webpack MDX pipeline, so the emitted HTML stays identical.
 */

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

export interface BlogHeading {
  id: string;
  text: string;
}

interface BlogPostRecord {
  meta: BlogPostMeta;
  body: string;
}

interface ContentfulEntryFields {
  title: string;
  slug: string;
  locale: SupportedLocale;
  metaDescription?: string;
  keywords?: string[];
  ogTitle?: string;
  h1?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  tags?: string[];
  image?: string;
  listImage?: string;
  excerpt?: string;
  readingTime?: string;
  hrefLangEn?: string;
  hrefLangPl?: string;
  cta?: BlogPostMeta['cta'];
  faq?: { items: NonNullable<BlogPostMeta['faq']> };
  crossPosts?: BlogPostMeta['crossPosts'];
  about?: BlogPostMeta['about'];
  body: string;
}

function toMeta(fields: ContentfulEntryFields): BlogPostMeta {
  return {
    title: fields.title,
    slug: fields.slug,
    metaDescription: fields.metaDescription || '',
    keywords: fields.keywords || [],
    ogTitle: fields.ogTitle || fields.title,
    h1: fields.h1 || fields.title,
    author: fields.author || 'Max Mendes',
    datePublished: (fields.datePublished || '').slice(0, 10),
    dateModified: fields.dateModified ? fields.dateModified.slice(0, 10) : undefined,
    tags: fields.tags || [],
    image: fields.image,
    listImage: fields.listImage,
    excerpt: fields.excerpt || '',
    readingTime: fields.readingTime || '',
    hrefLang: {
      en: fields.hrefLangEn || '',
      pl: fields.hrefLangPl || '',
    },
    cta: fields.cta,
    faq: fields.faq?.items,
    crossPosts: fields.crossPosts,
    about: fields.about,
  };
}

// One fetch per locale per build, shared across all pages.
const contentfulCache = new Map<SupportedLocale, Promise<BlogPostRecord[]>>();

async function fetchContentfulPosts(locale: SupportedLocale): Promise<BlogPostRecord[]> {
  if (!SPACE || !TOKEN) {
    throw new Error(
      'Contentful is not configured (CONTENTFUL_SPACE_ID / CONTENTFUL_DELIVERY_TOKEN missing). ' +
        'The blog has no filesystem fallback; set the env vars to build.'
    );
  }

  const url =
    `https://cdn.contentful.com/spaces/${SPACE}/environments/${ENVIRONMENT}/entries` +
    `?content_type=blogPost&fields.locale=${locale}&limit=200`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    // Rebuilds pick up new content; ISR-style revalidation for dynamic renders.
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Contentful fetch failed for locale "${locale}": HTTP ${res.status}`);
  }
  const data = await res.json();
  const items = (data.items || []) as Array<{ fields: ContentfulEntryFields }>;
  if (items.length === 0) {
    throw new Error(
      `Contentful returned 0 blogPost entries for locale "${locale}". ` +
        'Refusing to build an empty blog; check the space/environment.'
    );
  }
  return items.map((item) => ({ meta: toMeta(item.fields), body: item.fields.body }));
}

function getContentfulPosts(locale: SupportedLocale): Promise<BlogPostRecord[]> {
  let cached = contentfulCache.get(locale);
  if (!cached) {
    cached = fetchContentfulPosts(locale);
    // Do not cache rejections: a transient failure should be retryable.
    cached.catch(() => contentfulCache.delete(locale));
    contentfulCache.set(locale, cached);
  }
  return cached;
}

/** Extract H2 headings from raw markdown for the on-page table of contents. */
function extractHeadings(raw: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  for (const line of raw.split('\n')) {
    // Only top-level section headings (##), skip the H1 (#) and deeper levels.
    const match = /^##\s+(.+?)\s*$/.exec(line);
    if (!match) continue;
    // Strip inline markdown links/emphasis so the TOC label reads clean.
    const text = match[1]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    headings.push({ id: slugify(text), text });
  }
  return headings;
}

/**
 * Compile a markdown/MDX body with the same pipeline as the old webpack loader
 * (remark-gfm + the project's own React runtime) and bind the shared
 * mdx-components mapping, so the emitted HTML is identical to the old files.
 */
async function renderBody(body: string): Promise<React.ComponentType> {
  const { default: MDXContent } = await evaluate(body, {
    ...jsxRuntime,
    remarkPlugins: [remarkGfm],
  });
  const components = getMDXComponents({});
  const BlogPostBody: React.ComponentType = () =>
    React.createElement(MDXContent, { components });
  return BlogPostBody;
}

export async function getBlogPostSlugs(locale: SupportedLocale): Promise<string[]> {
  const posts = await getContentfulPosts(locale);
  return posts.map((p) => p.meta.slug);
}

export async function getBlogPost(
  locale: SupportedLocale,
  slug: string
): Promise<{ meta: BlogPostMeta; Content: React.ComponentType } | null> {
  const posts = await getContentfulPosts(locale);
  const post = posts.find((p) => p.meta.slug === slug);
  if (!post) return null;
  return { meta: post.meta, Content: await renderBody(post.body) };
}

export async function getBlogPostHeadings(
  locale: SupportedLocale,
  slug: string
): Promise<BlogHeading[]> {
  const posts = await getContentfulPosts(locale);
  const post = posts.find((p) => p.meta.slug === slug);
  return post ? extractHeadings(post.body) : [];
}

export async function getBlogPosts(locale: SupportedLocale): Promise<BlogPostMeta[]> {
  const posts = await getContentfulPosts(locale);
  return posts
    .map((p) => p.meta)
    .sort(
      (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
}
