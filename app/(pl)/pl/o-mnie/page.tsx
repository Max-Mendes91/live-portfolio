import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl, SITE_CONFIG } from '@/lib/seo/config';
import AboutClient from './AboutClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const aboutPage = dictionary.aboutPage;

  if (!aboutPage) return {};

  // Generate canonical URL dynamically from dictionary
  const canonicalUrl = getFullUrl(aboutPage.href);

  // Generate alternate language URLs from hrefLang
  const languages: Record<string, string> = {};
  Object.entries(aboutPage.hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  languages['x-default'] = languages['en'];

  return {
    title: aboutPage.seo.title,
    description: aboutPage.seo.metaDescription,
    keywords: aboutPage.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: aboutPage.seo.ogTitle,
      description: aboutPage.seo.metaDescription,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'pl_PL',
      type: 'profile',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${aboutPage.seo.h1} - Max Mendes`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: aboutPage.seo.ogTitle,
      description: aboutPage.seo.metaDescription,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

function generatePersonSchema(href: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Max Mendes',
    jobTitle: 'Programista Full-Stack',
    description:
      'Programista full-stack z Częstochowy specjalizujący się w React, Next.js i TypeScript',
    url: getFullUrl(href),
    image: getFullUrl('/images/aboutme.webp'),
    email: SITE_CONFIG.owner.email,
    telephone: SITE_CONFIG.owner.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Częstochowa',
      addressRegion: 'Śląskie',
      addressCountry: 'PL',
    },
    sameAs: [
      SITE_CONFIG.owner.social.github,
      SITE_CONFIG.owner.social.linkedin,
      SITE_CONFIG.owner.social.x,
      SITE_CONFIG.owner.social.instagram,
    ].filter(Boolean) as string[],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Full-Stack Development',
      'Web Development',
      'E-Commerce Development',
      'SaaS Development',
      'SEO Optimization',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  };
}

function generateBreadcrumbSchema(href: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: getFullUrl('/pl'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'O mnie',
        item: getFullUrl(href),
      },
    ],
  };
}

export default async function AboutPagePL() {
  const dictionary = await getDictionary('pl');

  if (!dictionary.aboutPage) {
    return null;
  }

  const { href } = dictionary.aboutPage;

  return (
    <>
      <JsonLd data={generatePersonSchema(href)} />
      <JsonLd data={generateBreadcrumbSchema(href)} />
      <AboutClient locale="pl" dictionary={dictionary} />
    </>
  );
}
