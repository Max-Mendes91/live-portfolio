#!/usr/bin/env node
/**
 * One-shot migration: MDX blog articles -> Contentful entries.
 *
 * - Creates/updates the `blogPost` content type (mirrors BlogPostMeta in types/i18n.ts).
 * - Upserts one entry per MDX file (deterministic id `${locale}-${slug}`, so re-runs
 *   are idempotent) and publishes it.
 * - Body is stored as raw markdown/MDX text; images stay in /public (paths unchanged)
 *   so nothing about the rendered pages or their SEO changes.
 *
 * Usage: node scripts/contentful/migrate.mjs
 */

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

function loadEnv() {
  const env = {};
  for (const line of readFileSync(join(ROOT, '.secrets/contentful.env'), 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_]+)="?([^"]*)"?$/);
    if (m) env[m[1]] = m[2];
  }
  return env;
}

const env = loadEnv();
const SPACE = env.CONTENTFUL_SPACE_ID;
const CMA = env.CONTENTFUL_MANAGEMENT_TOKEN;
const BASE = `https://api.contentful.com/spaces/${SPACE}/environments/master`;
const H = {
  Authorization: `Bearer ${CMA}`,
  'Content-Type': 'application/vnd.contentful.management.v1+json',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function cf(url, opts = {}, retries = 3) {
  const res = await fetch(url, { ...opts, headers: { ...H, ...(opts.headers || {}) } });
  if (res.status === 429 && retries > 0) {
    await sleep(1500);
    return cf(url, opts, retries - 1);
  }
  const body = res.status === 204 ? null : await res.json();
  return { ok: res.ok, status: res.status, body };
}

/** Parse an MDX file: extract the `export const metadata = {...}` object and the body. */
function parseMdx(filePath) {
  const src = readFileSync(filePath, 'utf8');
  const start = src.indexOf('export const metadata =');
  if (start === -1) throw new Error(`No metadata export in ${filePath}`);
  const braceStart = src.indexOf('{', start);
  let depth = 0;
  let end = -1;
  let inString = null;
  for (let i = braceStart; i < src.length; i++) {
    const c = src[i];
    const prev = src[i - 1];
    if (inString) {
      if (c === inString && prev !== '\\') inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inString = c; continue; }
    if (c === '{') depth++;
    if (c === '}') {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  if (end === -1) throw new Error(`Unbalanced metadata braces in ${filePath}`);
  const objText = src.slice(braceStart, end + 1);
  // The metadata is a plain object literal (verified across all articles): no
  // imports or function calls, so evaluating it in isolation is safe here.
  const metadata = new Function(`return (${objText})`)();
  const body = src.slice(end + 1).replace(/^\s+/, '');
  return { metadata, body };
}

const CONTENT_TYPE = {
  name: 'Blog Post',
  description: 'Portfolio blog article (migrated from MDX). Body is markdown/MDX.',
  displayField: 'title',
  fields: [
    { id: 'title', name: 'Title', type: 'Symbol', required: true, localized: false },
    { id: 'slug', name: 'Slug', type: 'Symbol', required: true, localized: false },
    { id: 'locale', name: 'Locale', type: 'Symbol', required: true, localized: false,
      validations: [{ in: ['en', 'pl'] }] },
    { id: 'metaDescription', name: 'Meta Description', type: 'Symbol', localized: false },
    { id: 'keywords', name: 'Keywords', type: 'Array', localized: false,
      items: { type: 'Symbol' } },
    { id: 'ogTitle', name: 'OG Title', type: 'Symbol', localized: false },
    { id: 'h1', name: 'H1', type: 'Symbol', localized: false },
    { id: 'author', name: 'Author', type: 'Symbol', localized: false },
    { id: 'datePublished', name: 'Date Published', type: 'Date', localized: false },
    { id: 'dateModified', name: 'Date Modified', type: 'Date', localized: false },
    { id: 'tags', name: 'Tags', type: 'Array', localized: false, items: { type: 'Symbol' } },
    { id: 'image', name: 'Image Path', type: 'Symbol', localized: false },
    { id: 'listImage', name: 'Listing Cover Path', type: 'Symbol', localized: false },
    { id: 'excerpt', name: 'Excerpt', type: 'Text', localized: false },
    { id: 'readingTime', name: 'Reading Time', type: 'Symbol', localized: false },
    { id: 'hrefLangEn', name: 'Href (EN)', type: 'Symbol', localized: false },
    { id: 'hrefLangPl', name: 'Href (PL)', type: 'Symbol', localized: false },
    { id: 'cta', name: 'CTA', type: 'Object', localized: false },
    { id: 'faq', name: 'FAQ', type: 'Object', localized: false },
    { id: 'crossPosts', name: 'Cross Posts', type: 'Object', localized: false },
    { id: 'about', name: 'About Entity', type: 'Object', localized: false },
    { id: 'body', name: 'Body (Markdown)', type: 'Text', required: true, localized: false },
  ],
};

async function ensureContentType() {
  const existing = await cf(`${BASE}/content_types/blogPost`);
  const version = existing.ok ? existing.body.sys.version : undefined;
  const put = await cf(`${BASE}/content_types/blogPost`, {
    method: 'PUT',
    headers: version ? { 'X-Contentful-Version': String(version) } : {},
    body: JSON.stringify(CONTENT_TYPE),
  });
  if (!put.ok) throw new Error(`Content type failed: ${JSON.stringify(put.body).slice(0, 300)}`);
  const act = await cf(`${BASE}/content_types/blogPost/published`, {
    method: 'PUT',
    headers: { 'X-Contentful-Version': String(put.body.sys.version) },
  });
  if (!act.ok) throw new Error(`Activate failed: ${JSON.stringify(act.body).slice(0, 300)}`);
  console.log(`Content type blogPost ready (version ${act.body.sys.version}).`);
}

function wrap(v) {
  return v === undefined ? undefined : { en: v };
}

function entryFields(locale, metadata, body) {
  const f = {
    title: wrap(metadata.title),
    slug: wrap(metadata.slug),
    locale: wrap(locale),
    metaDescription: wrap(metadata.metaDescription),
    keywords: wrap(metadata.keywords),
    ogTitle: wrap(metadata.ogTitle),
    h1: wrap(metadata.h1),
    author: wrap(metadata.author),
    datePublished: wrap(metadata.datePublished),
    dateModified: wrap(metadata.dateModified),
    tags: wrap(metadata.tags),
    image: wrap(metadata.image),
    listImage: wrap(metadata.listImage),
    excerpt: wrap(metadata.excerpt),
    readingTime: wrap(metadata.readingTime),
    hrefLangEn: wrap(metadata.hrefLang?.en),
    hrefLangPl: wrap(metadata.hrefLang?.pl),
    cta: wrap(metadata.cta),
    faq: wrap(metadata.faq ? { items: metadata.faq } : undefined),
    crossPosts: wrap(metadata.crossPosts),
    about: wrap(metadata.about),
    body: wrap(body),
  };
  for (const k of Object.keys(f)) if (f[k] === undefined) delete f[k];
  return f;
}

async function upsertEntry(locale, metadata, body) {
  const id = `${locale}-${metadata.slug}`.slice(0, 64);
  const existing = await cf(`${BASE}/entries/${id}`);
  const version = existing.ok ? existing.body.sys.version : undefined;
  const put = await cf(`${BASE}/entries/${id}`, {
    method: 'PUT',
    headers: {
      'X-Contentful-Content-Type': 'blogPost',
      ...(version ? { 'X-Contentful-Version': String(version) } : {}),
    },
    body: JSON.stringify({ fields: entryFields(locale, metadata, body) }),
  });
  if (!put.ok) throw new Error(`Entry ${id} failed: ${JSON.stringify(put.body).slice(0, 300)}`);
  const pub = await cf(`${BASE}/entries/${id}/published`, {
    method: 'PUT',
    headers: { 'X-Contentful-Version': String(put.body.sys.version) },
  });
  if (!pub.ok) throw new Error(`Publish ${id} failed: ${JSON.stringify(pub.body).slice(0, 300)}`);
  return id;
}

async function main() {
  console.log(`Space: ${SPACE}`);
  await ensureContentType();
  let count = 0;
  for (const locale of ['en', 'pl']) {
    const dir = join(ROOT, 'content/blog', locale);
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.mdx')).sort()) {
      const { metadata, body } = parseMdx(join(dir, file));
      const id = await upsertEntry(locale, metadata, body);
      count++;
      console.log(`  ✓ ${id} (${body.length} chars body)`);
      await sleep(180);
    }
  }
  console.log(`\nDone: ${count} entries published.`);
}

main().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
