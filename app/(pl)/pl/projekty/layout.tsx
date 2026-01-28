import { Metadata } from 'next';
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: `Portfolio Stron Internetowych | Projekty i Realizacje | ${SITE_CONFIG.name}`,
  description:
    'Zobacz moje portfolio projektów tworzenia stron internetowych. Aplikacje React, strony Next.js, sklepy internetowe i więcej. Przykłady profesjonalnych realizacji.',
  keywords: [
    'portfolio stron internetowych',
    'projekty react',
    'strony next.js',
    'realizacje programisty',
    'case studies',
  ].join(', '),
  alternates: {
    canonical: getFullUrl('/pl/projekty'),
    languages: {
      en: getFullUrl('/en/projects'),
      pl: getFullUrl('/pl/projekty'),
      'x-default': getFullUrl('/en/projects'),
    },
  },
  openGraph: {
    title: 'Portfolio Stron Internetowych - Max Mendes',
    description: 'Zobacz moje najnowsze projekty i realizacje.',
    url: getFullUrl('/pl/projekty'),
    siteName: SITE_CONFIG.name,
    locale: 'pl_PL',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `Portfolio - ${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Stron Internetowych - Max Mendes',
    description: 'Zobacz moje najnowsze projekty i realizacje.',
    site: SITE_CONFIG.owner.social.twitterHandle,
    creator: SITE_CONFIG.owner.social.twitterHandle,
    images: ['/og-image.png'],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
