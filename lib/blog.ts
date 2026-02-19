import fs from 'fs';
import path from 'path';
import { SupportedLocale } from '@/types/seo';
import { BlogPostMeta } from '@/types/i18n';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

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
