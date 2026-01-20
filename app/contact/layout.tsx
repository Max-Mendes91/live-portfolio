import { Metadata } from 'next';
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: `Hire Web Developer Poland | Free Quote | ${SITE_CONFIG.name}`,
  description:
    'Hire a professional web developer in Poland. Get a free quote for your project. Based in Czestochowa, serving UK, US, and Europe. React, Next.js, e-commerce, SEO.',
  keywords: [
    'hire web developer',
    'web developer poland',
    'free quote',
    'contact developer',
    'react developer hire',
  ].join(', '),
  alternates: {
    canonical: getFullUrl('/contact'),
    languages: {
      en: getFullUrl('/contact'),
      'en-US': getFullUrl('/contact'),
      'en-GB': getFullUrl('/contact'),
      pl: getFullUrl('/pl/kontakt'),
      'x-default': getFullUrl('/contact'),
    },
  },
  openGraph: {
    title: 'Contact Max Mendes - Web Developer',
    description: 'Get a free quote for your web development project.',
    url: getFullUrl('/contact'),
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    alternateLocale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `Contact - ${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Max Mendes - Web Developer',
    description: 'Get a free quote for your web development project.',
    site: SITE_CONFIG.owner.social.twitterHandle,
    creator: SITE_CONFIG.owner.social.twitterHandle,
    images: ['/og-image.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
