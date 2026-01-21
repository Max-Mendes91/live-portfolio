import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import AboutClient from './AboutClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const aboutPage = dictionary.aboutPage;

  if (!aboutPage) return {};

  const canonicalUrl = getFullUrl('/pl/o-mnie');

  return {
    title: aboutPage.meta.title,
    description: aboutPage.meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: getFullUrl('/en/about'),
        pl: canonicalUrl,
        'x-default': getFullUrl('/en/about'),
      },
    },
    openGraph: {
      title: aboutPage.meta.title,
      description: aboutPage.meta.description,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'pl_PL',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: aboutPage.meta.title,
      description: aboutPage.meta.description,
    },
  };
}

function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Max Mendes',
    jobTitle: 'Programista Full-Stack',
    description:
      'Programista full-stack z Częstochowy specjalizujący się w React, Next.js i TypeScript',
    url: getFullUrl('/pl/o-mnie'),
    image: getFullUrl('/images/max-mendes.jpg'),
    email: 'maxmendesnoah1991@gmail.com',
    telephone: '+48502742941',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Częstochowa',
      addressRegion: 'Śląskie',
      addressCountry: 'PL',
    },
    sameAs: [
      'https://github.com/Max-Mendes91',
      'https://linkedin.com/in/max-mendes',
    ],
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

function generateBreadcrumbSchema() {
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
        item: getFullUrl('/pl/o-mnie'),
      },
    ],
  };
}

export default async function AboutPagePL() {
  const dictionary = await getDictionary('pl');

  if (!dictionary.aboutPage) {
    return null;
  }

  return (
    <>
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateBreadcrumbSchema()} />
      <AboutClient locale="pl" dictionary={dictionary} />
    </>
  );
}
