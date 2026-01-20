import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SLUG_TO_SERVICE_KEY, SERVICE_SLUGS } from '@/lib/services/config';
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';

// Service metadata (PL)
const SERVICE_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  webDevelopment: {
    title: 'Tworzenie Stron Internetowych Częstochowa | Programista React & Next.js',
    description:
      'Profesjonalne tworzenie stron internetowych w Częstochowie i okolicach. Aplikacje React i Next.js, backendy Node.js, API REST. Bezpłatna wycena projektu.',
    keywords: [
      'tworzenie stron internetowych',
      'programista częstochowa',
      'react developer polska',
      'next.js developer',
      'aplikacje webowe',
    ],
  },
  webDesign: {
    title: 'Projektowanie Stron WWW & UI/UX | Nowoczesny Responsywny Design',
    description:
      'Profesjonalne projektowanie stron internetowych i UI/UX. Nowoczesne, responsywne projekty, które zamieniają odwiedzających w klientów. Prototypowanie Figma.',
    keywords: [
      'projektowanie stron www',
      'ui ux design',
      'responsywny design',
      'figma projektowanie',
      'web design polska',
    ],
  },
  seo: {
    title: 'Pozycjonowanie SEO | Audyt Techniczny & Optymalizacja On-Page',
    description:
      'Profesjonalne usługi pozycjonowania SEO. Audyty techniczne, optymalizacja on-page, Core Web Vitals, znaczniki schema, lokalne SEO. Popraw pozycje w Google.',
    keywords: [
      'pozycjonowanie seo',
      'seo częstochowa',
      'audyt seo',
      'lokalne seo',
      'optymalizacja google',
    ],
  },
  ecommerce: {
    title: 'Sklepy Internetowe | Tworzenie E-commerce na Zamówienie',
    description:
      'Profesjonalne tworzenie sklepów internetowych. Dedykowane rozwiązania e-commerce z integracją płatności, zarządzaniem magazynem. Uruchom swój sklep online.',
    keywords: [
      'sklepy internetowe',
      'tworzenie e-commerce',
      'sklep online',
      'integracja płatności',
      'e-commerce polska',
    ],
  },
};

// Generate static params for all service pages
export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const serviceKey = SLUG_TO_SERVICE_KEY[slug];

  if (!serviceKey) {
    notFound();
  }

  const meta = SERVICE_META[serviceKey];
  const canonicalPath = `/pl/uslugi/${slug}`;
  const enPath = `/services/${slug}`;

  return {
    title: `${meta.title} | ${SITE_CONFIG.name}`,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    alternates: {
      canonical: getFullUrl(canonicalPath),
      languages: {
        en: getFullUrl(enPath),
        'en-US': getFullUrl(enPath),
        'en-GB': getFullUrl(enPath),
        pl: getFullUrl(canonicalPath),
        'x-default': getFullUrl(enPath),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: getFullUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      locale: 'pl_PL',
      alternateLocale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${meta.title} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
