import fs from 'fs';
import path from 'path';
import { SupportedLocale } from '@/types/seo';
import { BlogPostMeta } from '@/types/i18n';
import { slugify } from '@/lib/slug';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogHeading {
  id: string;
  text: string;
}

/**
 * Extract H2 headings from a post's raw MDX to build the on-page table of contents.
 * Slugs use the same slugify() helper as the MDX renderer, so the TOC links
 * always match the heading IDs on the page.
 */
export function getBlogPostHeadings(
  locale: SupportedLocale,
  slug: string
): BlogHeading[] {
  const file = path.join(CONTENT_DIR, locale, `${slug}.mdx`);

  if (!fs.existsSync(file)) return [];

  const raw = fs.readFileSync(file, 'utf8');
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
 * Get all blog post slugs for a locale
 */
export function getBlogPostSlugs(locale: SupportedLocale): string[] {
  const dir = path.join(CONTENT_DIR, locale);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get blog post metadata + content component for a single post
 */
export async function getBlogPost(
  locale: SupportedLocale,
  slug: string
): Promise<{ meta: BlogPostMeta; Content: React.ComponentType } | null> {
  try {
    const mod = await import(`@/content/blog/${locale}/${slug}.mdx`);
    return {
      meta: mod.metadata as BlogPostMeta,
      Content: mod.default,
    };
  } catch {
    return null;
  }
}

/**
 * Get all blog posts with metadata, sorted by date (newest first)
 */
export async function getBlogPosts(
  locale: SupportedLocale
): Promise<BlogPostMeta[]> {
  const slugs = getBlogPostSlugs(locale);
  const posts: BlogPostMeta[] = [];

  for (const slug of slugs) {
    try {
      const mod = await import(`@/content/blog/${locale}/${slug}.mdx`);
      posts.push(mod.metadata as BlogPostMeta);
    } catch {
      // Skip posts that fail to load
    }
  }

  // Sort by datePublished descending
  return posts.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}
