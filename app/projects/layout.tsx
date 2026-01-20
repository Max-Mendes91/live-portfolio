import { Metadata } from 'next';
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: `Web Development Portfolio | Projects & Case Studies | ${SITE_CONFIG.name}`,
  description:
    'Explore my portfolio of web development projects. React applications, Next.js websites, e-commerce stores, and more. See examples of professional web development work.',
  keywords: [
    'web development portfolio',
    'react projects',
    'next.js websites',
    'web developer work',
    'case studies',
  ].join(', '),
  alternates: {
    canonical: getFullUrl('/projects'),
    languages: {
      en: getFullUrl('/projects'),
      'en-US': getFullUrl('/projects'),
      'en-GB': getFullUrl('/projects'),
      pl: getFullUrl('/pl/projekty'),
      'x-default': getFullUrl('/projects'),
    },
  },
  openGraph: {
    title: 'Web Development Portfolio - Max Mendes',
    description: 'View my latest web development projects and case studies.',
    url: getFullUrl('/projects'),
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    alternateLocale: 'pl_PL',
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
    title: 'Web Development Portfolio - Max Mendes',
    description: 'View my latest web development projects and case studies.',
    site: SITE_CONFIG.owner.social.twitterHandle,
    creator: SITE_CONFIG.owner.social.twitterHandle,
    images: ['/og-image.png'],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
