import { Metadata } from 'next';
import { SupportedLocale } from '@/types/seo';
import { ServiceLink, HomePageDict } from '@/types/i18n';
import { SITE_CONFIG, getFullUrl } from './config';

// Generate base metadata for all pages
export function generateBaseMetadata(locale: SupportedLocale = 'en'): Metadata {
  const { owner } = SITE_CONFIG;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    authors: [{ name: owner.name, url: SITE_CONFIG.url }],
    creator: owner.name,
    publisher: owner.name,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16 32x32 48x48 96x96 144x144' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}

// Generate home page metadata from dictionary
export function generateHomePageMetadata(
  homePageData: HomePageDict,
  locale: SupportedLocale = 'en'
): Metadata {
  const { seo, hrefLang, href } = homePageData;

  // Generate canonical URL dynamically from href (includes locale: /en or /pl)
  const canonicalUrl = getFullUrl(href);

  // Generate alternate language URLs from hrefLang
  const languages: Record<string, string> = {};
  Object.entries(hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  // x-default points to English as the fallback
  languages['x-default'] = languages['en'];

  return {
    ...generateBaseMetadata(locale),
    title: seo.title,
    description: seo.metaDescription,
    keywords: seo.keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.metaDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      alternateLocale: locale === 'en' ? 'pl_PL' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${seo.h1} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle,
      description: seo.metaDescription,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

// Generate metadata for individual service pages from dictionary
export function generateServicePageMetadata(
  serviceData: ServiceLink,
  locale: SupportedLocale = 'en'
): Metadata {
  const { seo, hrefLang, href } = serviceData;

  // Generate canonical URL dynamically from href
  const canonicalUrl = getFullUrl(href);

  // Generate alternate language URLs from hrefLang
  const languages: Record<string, string> = {};
  Object.entries(hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  languages['x-default'] = languages['en'];

  return {
    ...generateBaseMetadata(locale),
    title: seo.title,
    description: seo.metaDescription,
    keywords: seo.keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.metaDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      alternateLocale: locale === 'en' ? 'pl_PL' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${seo.h1} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle,
      description: seo.metaDescription,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
};
