import { SupportedLocale } from '@/types/seo';

// URL slug to i18n key mapping
export const SLUG_TO_SERVICE_KEY: Record<string, string> = {
  'web-development': 'webDevelopment',
  'web-design': 'webDesign',
  'seo': 'seo',
  'ecommerce': 'ecommerce',
};

// All valid service slugs
export const SERVICE_SLUGS = Object.keys(SLUG_TO_SERVICE_KEY);

// Service key to URL slug mapping (reverse)
export const SERVICE_KEY_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_SERVICE_KEY).map(([slug, key]) => [key, slug])
);

// Get service key from URL slug
export function getServiceKeyFromSlug(slug: string): string | null {
  return SLUG_TO_SERVICE_KEY[slug] || null;
}

// Get URL slug from service key
export function getSlugFromServiceKey(key: string): string | null {
  return SERVICE_KEY_TO_SLUG[key] || null;
}

// Get localized service path
export function getServicePath(slug: string, locale: SupportedLocale): string {
  if (locale === 'pl') {
    return `/pl/uslugi/${slug}`;
  }
  return `/services/${slug}`;
}

// Get all service paths for a locale (for internal linking)
export function getAllServicePaths(locale: SupportedLocale): Array<{ slug: string; path: string }> {
  return SERVICE_SLUGS.map((slug) => ({
    slug,
    path: getServicePath(slug, locale),
  }));
}
