import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import ProjectsClient from './ProjectsClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getFullUrl('/en/projects');

  return {
    title: 'Portfolio - Web Development Projects | Max Mendes',
    description:
      'Browse my web development projects: websites, e-commerce stores, and web applications. Built with React, Next.js, TypeScript.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        pl: getFullUrl('/pl/projekty'),
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: 'Portfolio - Web Development Projects | Max Mendes',
      description:
        'Browse my web development projects: websites, e-commerce stores, and web applications.',
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'website',
    },
  };
}

function generatePortfolioSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfolio - Web Development Projects',
    description: 'A collection of web development projects by Max Mendes',
    url: getFullUrl('/en/projects'),
    author: {
      '@type': 'Person',
      name: 'Max Mendes',
      url: getFullUrl('/en/about'),
    },
  };
}

export default async function ProjectsPageEN() {
  const dictionary = await getDictionary('en');

  return (
    <>
      <JsonLd data={generatePortfolioSchema()} />
      <ProjectsClient locale="en" dictionary={dictionary} />
    </>
  );
}
