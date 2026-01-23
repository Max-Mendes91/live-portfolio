// Locale-specific route slugs for SEO
// Polish routes use Polish keywords, English routes use English keywords

import { SupportedLocale } from '@/types/seo';

// Route slug mappings per locale
const ROUTE_SLUGS = {
  en: {
    home: '',
    about: 'about',
    services: 'services',
    projects: 'projects',
    contact: 'contact',
    faq: 'faq',
    // Service sub-pages
    'services/web-development': 'services/web-development',
    'services/saas': 'services/saas-web-apps',
    'services/ecommerce': 'services/ecommerce-development',
    'services/seo': 'services/seo-performance-optimization',
    'services/ai-integration': 'services/ai-integration',
  },
  pl: {
    home: '',
    about: 'o-mnie',
    services: 'uslugi',
    projects: 'projekty',
    contact: 'kontakt',
    faq: 'pytania',
    // Service sub-pages (Polish slugs for SEO)
    'services/web-development': 'uslugi/tworzenie-stron',
    'services/saas': 'uslugi/aplikacje-webowe',
    'services/ecommerce': 'uslugi/sklepy-internetowe',
    'services/seo': 'uslugi/pozycjonowanie',
    'services/ai-integration': 'uslugi/integracja-ai',
  },
} as const;

type RouteKey = keyof typeof ROUTE_SLUGS.en;

/**
 * Get the localized URL for a route
 * @param locale - 'en' or 'pl'
 * @param route - Route key (e.g., 'about', 'services', 'contact')
 * @returns Full path with locale prefix (e.g., '/pl/o-mnie', '/en/about')
 */
export function getLocalizedUrl(locale: SupportedLocale, route: RouteKey): string {
  const slug = ROUTE_SLUGS[locale][route];
  if (slug === '') {
    return `/${locale}`;
  }
  return `/${locale}/${slug}`;
}

/**
 * Get all localized URLs for a route (for hreflang)
 * @param route - Route key
 * @returns Object with locale URLs
 */
export function getAlternateUrls(route: RouteKey): Record<SupportedLocale | 'x-default', string> {
  return {
    en: getLocalizedUrl('en', route),
    pl: getLocalizedUrl('pl', route),
    'x-default': getLocalizedUrl('en', route),
  };
}

/**
 * Get the route key from a pathname
 * @param pathname - URL pathname
 * @returns Route key or null
 */
export function getRouteFromPathname(pathname: string): RouteKey | null {
  // Remove leading slash and locale prefix
  const parts = pathname.replace(/^\//, '').split('/');
  if (parts.length < 1) return null;

  const locale = parts[0] as SupportedLocale;
  if (locale !== 'en' && locale !== 'pl') return null;

  const slug = parts.slice(1).join('/');
  const slugs = ROUTE_SLUGS[locale];

  // Find matching route key
  for (const [key, value] of Object.entries(slugs)) {
    if (value === slug) {
      return key as RouteKey;
    }
  }

  return null;
}

export { ROUTE_SLUGS };
export type { RouteKey };
