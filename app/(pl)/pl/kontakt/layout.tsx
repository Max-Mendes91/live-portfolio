import { Metadata } from 'next';
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: `Programista Częstochowa Kontakt | Bezpłatna Wycena | ${SITE_CONFIG.name}`,
  description:
    'Programista Częstochowa - bezpłatna wycena projektu. Tworzenie stron internetowych dla klientów z Polski i Europy. React, Next.js, e-commerce, SEO.',
  keywords: [
    'programista częstochowa',
    'tworzenie stron kontakt',
    'bezpłatna wycena',
    'web developer polska',
    'kontakt programista',
  ].join(', '),
  alternates: {
    canonical: getFullUrl('/pl/kontakt'),
    languages: {
      en: getFullUrl('/en/contact'),
      pl: getFullUrl('/pl/kontakt'),
      'x-default': getFullUrl('/en/contact'),
    },
  },
  openGraph: {
    title: 'Kontakt - Max Mendes Programista',
    description: 'Otrzymaj bezpłatną wycenę swojego projektu.',
    url: getFullUrl('/pl/kontakt'),
    siteName: SITE_CONFIG.name,
    locale: 'pl_PL',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `Kontakt - ${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt - Max Mendes Programista',
    description: 'Otrzymaj bezpłatną wycenę swojego projektu.',
    site: SITE_CONFIG.owner.social.twitterHandle,
    creator: SITE_CONFIG.owner.social.twitterHandle,
    images: ['/og-image.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
