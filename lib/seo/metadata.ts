import { Metadata } from 'next';
import { SupportedLocale } from '@/types/seo';
import { SITE_CONFIG, HREFLANG_CONFIG, getFullUrl, getLocalizedUrl } from './config';
import { getPrimaryKeywords } from './keywords';

// Page-specific metadata content
// SEO RULE: Primary keyword FIRST in title and description (from friend's advice)
const PAGE_META = {
  home: {
    en: {
      title: 'Freelance Web Developer for Hire - Full-Stack, E-commerce, SaaS | Poland',
      description:
        'Freelance full-stack developer for hire ✓ Websites, e-commerce, web apps, SaaS ✓ React, Next.js, Node.js ✓ Poland-based, UK/US friendly ✓ Free consultation',
      ogTitle: 'Freelance Web Developer for Hire - Max Mendes',
      ogDescription:
        'Freelance full-stack developer. Websites, e-commerce, web apps, SaaS. Poland-based, UK/US clients welcome.',
    },
    pl: {
      title: 'Tworzenie Stron Internetowych - Programista Full-Stack Polska | Częstochowa',
      description:
        'Tworzenie stron internetowych i aplikacji webowych ✓ Programista full-stack Polska ✓ Strony, sklepy, SaaS ✓ Częstochowa, Śląsk ✓ Bezpłatna konsultacja ☎ 502 742 941',
      ogTitle: 'Tworzenie Stron Internetowych - Max Mendes',
      ogDescription:
        'Programista full-stack Polska. Tworzenie stron, sklepów internetowych, aplikacji webowych. Częstochowa, Śląsk.',
    },
  },
  services: {
    en: {
      title: 'Web Development Services Poland | Max Mendes - React, Next.js, SEO, E-commerce',
      description:
        'Web development services in Poland for UK & US clients. React, Next.js, responsive design, SEO optimization, e-commerce solutions. Free quote: +48 502 742 941',
      ogTitle: 'Web Development Services - Max Mendes',
      ogDescription: 'Full stack web development, design, SEO, and e-commerce services.',
    },
    pl: {
      title: 'Tworzenie Stron Internetowych Czestochowa | Max Mendes - React, Next.js, SEO',
      description:
        'Tworzenie stron internetowych Czestochowa, Krakow, Warszawa. Aplikacje React i Next.js, responsywny design, pozycjonowanie SEO, sklepy internetowe. Zadzwon: 502 742 941',
      ogTitle: 'Tworzenie Stron Czestochowa - Max Mendes',
      ogDescription: 'Tworzenie stron, projektowanie, SEO i sklepy internetowe.',
    },
  },
  portfolio: {
    en: {
      title: 'Portfolio | Web Development Projects | Max Mendes',
      description:
        'Explore my portfolio of web development projects. React applications, Next.js websites, e-commerce stores, and more. See examples of professional web development work.',
      ogTitle: 'Web Development Portfolio - Max Mendes',
      ogDescription: 'View my latest web development projects and case studies.',
    },
    pl: {
      title: 'Portfolio | Projekty Stron Internetowych | Max Mendes',
      description:
        'Zobacz moje portfolio projektow tworzenia stron internetowych. Aplikacje React, strony Next.js, sklepy internetowe i wiecej. Przyklady profesjonalnych realizacji.',
      ogTitle: 'Portfolio Stron Internetowych - Max Mendes',
      ogDescription: 'Zobacz moje najnowsze projekty i realizacje.',
    },
  },
  contact: {
    en: {
      title: 'Hire Web Developer Poland | Max Mendes - Free Quote',
      description:
        'Hire a web developer in Poland. Free quote for your project. Based in Czestochowa, serving UK, US, and Europe. Call: +48 502 742 941 or email today.',
      ogTitle: 'Contact Max Mendes - Web Developer',
      ogDescription: 'Get a free quote for your web development project.',
    },
    pl: {
      title: 'Programista Czestochowa Kontakt | Max Mendes - Bezplatna Wycena',
      description:
        'Programista Czestochowa - bezplatna wycena projektu. Tworzenie stron internetowych dla klientow z Polski i Europy. Zadzwon: 502 742 941',
      ogTitle: 'Kontakt - Max Mendes Programista',
      ogDescription: 'Otrzymaj bezplatna wycene swojego projektu.',
    },
  },
};

// Generate alternate language links
function generateAlternateLinks(currentPath: string = '') {
  const languages: Record<string, string> = {};

  HREFLANG_CONFIG.forEach(({ hreflang, href }) => {
    if (hreflang === 'x-default') return;
    const basePath = href === '/' ? '' : href;
    languages[hreflang] = getFullUrl(`${basePath}${currentPath}`);
  });

  return {
    canonical: getFullUrl(currentPath),
    languages,
  };
}

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
      icon: '/favicon.ico',
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

// Generate page-specific metadata
export function generatePageMetadata(
  page: keyof typeof PAGE_META,
  locale: SupportedLocale = 'en',
  path: string = ''
): Metadata {
  const pageMeta = PAGE_META[page][locale];
  const keywords = getPrimaryKeywords(locale);
  const alternates = generateAlternateLinks(path);

  return {
    ...generateBaseMetadata(locale),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: keywords.join(', '),
    alternates,
    openGraph: {
      title: pageMeta.ogTitle,
      description: pageMeta.ogDescription,
      url: getLocalizedUrl(path, locale),
      siteName: SITE_CONFIG.name,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      alternateLocale: locale === 'en' ? 'pl_PL' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - ${locale === 'en' ? 'Web Developer' : 'Programista'}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.ogTitle,
      description: pageMeta.ogDescription,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

// Generate home page metadata
export function generateHomeMetadata(locale: SupportedLocale = 'en'): Metadata {
  return generatePageMetadata('home', locale, '');
}

// Generate services page metadata
export function generateServicesMetadata(locale: SupportedLocale = 'en'): Metadata {
  const path = locale === 'en' ? '/services' : '/uslugi';
  return generatePageMetadata('services', locale, path);
}

// Generate portfolio page metadata
export function generatePortfolioMetadata(locale: SupportedLocale = 'en'): Metadata {
  return generatePageMetadata('portfolio', locale, '/portfolio');
}

// Generate contact page metadata
export function generateContactMetadata(locale: SupportedLocale = 'en'): Metadata {
  const path = locale === 'en' ? '/contact' : '/kontakt';
  return generatePageMetadata('contact', locale, path);
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
