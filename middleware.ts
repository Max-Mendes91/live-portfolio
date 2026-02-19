import { NextRequest, NextResponse } from 'next/server';
import { i18nConfig, isValidLocale } from '@/lib/i18n/config';

// Paths that should NOT be processed by middleware
const PUBLIC_FILE = /\.(.*)$/;
const IGNORED_PATHS = [
  '/_next',
  '/api',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/manifest.webmanifest',
];

// Legacy path mappings (old paths -> new locale-prefixed paths)
// Redirects for backwards compatibility and SEO
const LEGACY_REDIRECTS: Record<string, string> = {
  // English legacy paths (root level -> /en/)
  '/contact': '/en/contact',
  '/projects': '/en/projects',
  '/services': '/en/services',
  '/services/web-development': '/en/services/web-development',
  '/services/web-design': '/en/services/web-design',
  '/services/seo-optimization': '/en/services/seo',
  '/services/seo': '/en/services/seo',
  '/services/ecommerce': '/en/services/ecommerce',
  // Blog legacy redirects
  '/blog': '/en/blog',
  '/pl/blog': '/pl/artykuly',
  // Redirect English slugs under /pl/ to Polish canonical URLs
  '/pl/about': '/pl/o-mnie',
  '/pl/services': '/pl/uslugi',
  '/pl/projects': '/pl/projekty',
  '/pl/contact': '/pl/kontakt',
};

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return i18nConfig.defaultLocale;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, priority] = lang.trim().split(';q=');
      return {
        code: code.split('-')[0].toLowerCase(),
        priority: parseFloat(priority || '1'),
      };
    })
    .sort((a, b) => b.priority - a.priority);

  // Find first matching supported locale
  for (const { code } of languages) {
    if (isValidLocale(code)) return code;
  }

  return i18nConfig.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files and ignored paths
  if (
    PUBLIC_FILE.test(pathname) ||
    IGNORED_PATHS.some((p) => pathname.startsWith(p))
  ) {
    return NextResponse.next();
  }

  // Handle legacy redirects FIRST (301 for SEO)
  // This includes both root-level paths and locale-prefixed redirects
  if (LEGACY_REDIRECTS[pathname]) {
    const newUrl = new URL(LEGACY_REDIRECTS[pathname], request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Check if pathname starts with a valid locale
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Handle legacy service paths with dynamic slugs
  const serviceMatch = pathname.match(/^\/services\/(.+)$/);
  if (serviceMatch) {
    const newUrl = new URL(`/en/services/${serviceMatch[1]}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Redirect root to locale-prefixed path
  const locale = getPreferredLocale(request);
  // Avoid trailing slash when pathname is "/" (prevents redirect chain)
  const targetPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  const newUrl = new URL(targetPath, request.url);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
