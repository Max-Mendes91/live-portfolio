import { SiteConfig, SupportedLocale } from '@/types/seo';

export const SITE_CONFIG: SiteConfig = {
  name: 'Max Mendes',
  url: 'https://maxmendes.dev',
  defaultLocale: 'en',
  locales: ['en', 'pl'],
  owner: {
    name: 'Max Mendes',
    legalName: 'Max Mendes',
    email: 'maxmendesnoah1991@gmail.com',
    phone: '+48 502 742 941',
    address: {
      street: 'Slaska 30/8',
      city: 'Czestochowa',
      postalCode: '42-200',
      country: 'Poland',
      region: 'Slaskie',
    },
    social: {
      twitter: 'https://twitter.com/maxmendes91',
      twitterHandle: '@maxmendes91',
      linkedin: 'https://linkedin.com/in/maxmendes',
      github: 'https://github.com/maxmendes',
      instagram: 'https://instagram.com/maxmendes',
    },
  },
};

// Geographic coordinates for Czestochowa
export const GEO_COORDINATES = {
  latitude: 50.8118,
  longitude: 19.1203,
};

// Target markets and areas served
export const TARGET_MARKETS = {
  primary: [
    { type: 'City' as const, name: 'Czestochowa' },
    { type: 'City' as const, name: 'Krakow' },
    { type: 'City' as const, name: 'Warsaw' },
    { type: 'City' as const, name: 'Katowice' },
    { type: 'City' as const, name: 'Wroclaw' },
    { type: 'Country' as const, name: 'Poland' },
  ],
  secondary: [
    { type: 'Country' as const, name: 'United Kingdom' },
    { type: 'Country' as const, name: 'United States' },
    { type: 'Country' as const, name: 'Germany' },
  ],
};

// hreflang configuration
export const HREFLANG_CONFIG = [
  { hreflang: 'en', href: '/' },
  { hreflang: 'en-US', href: '/' },
  { hreflang: 'en-GB', href: '/' },
  { hreflang: 'pl', href: '/pl' },
  { hreflang: 'x-default', href: '/' },
];

// Trust signals for hero/about sections (from SEO strategy - friend's advice)
export const TRUST_SIGNALS = {
  en: [
    { label: '5+ Years Experience', icon: 'trophy' },
    { label: '20+ Projects Delivered', icon: 'folder' },
    { label: 'UK/US Friendly Timezone', icon: 'globe' },
    { label: 'Fluent English', icon: 'languages' },
  ],
  pl: [
    { label: '5+ lat doświadczenia', icon: 'trophy' },
    { label: '20+ zrealizowanych projektów', icon: 'folder' },
    { label: 'Klienci z UK/US', icon: 'globe' },
    { label: 'Płynny angielski', icon: 'languages' },
  ],
};

// Unique Selling Points - what makes you different (from SEO strategy)
export const USP_BADGES = {
  en: [
    'Full-Stack Developer',
    'React & Next.js Specialist',
    'Based in Poland, EU',
    'Remote-First',
  ],
  pl: [
    'Programista Full-Stack',
    'Specjalista React & Next.js',
    'Polska, UE',
    'Praca zdalna',
  ],
};

// Skills and technologies known
export const SKILLS = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'Figma',
  'SEO',
  'Web Development',
  'E-commerce',
  'UI/UX Design',
  'REST APIs',
  'GraphQL',
];

// Helper function to get full URL
export function getFullUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

// Helper function to get localized URL
export function getLocalizedUrl(path: string, locale: SupportedLocale): string {
  if (locale === 'en') {
    return getFullUrl(path);
  }
  return getFullUrl(`/${locale}${path}`);
}
