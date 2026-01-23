import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl, SITE_CONFIG } from '@/lib/seo/config';
import { ProjectsPageDict } from '@/types/i18n';
import ProjectsClient from './ProjectsClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const projectsPage = dictionary.projectsPage;

  if (!projectsPage) {
    return {
      title: 'Projects | Max Mendes',
    };
  }

  // Generate canonical URL dynamically from dictionary
  const canonicalUrl = getFullUrl(projectsPage.href);

  // Generate alternate language URLs from hrefLang
  const languages: Record<string, string> = {};
  Object.entries(projectsPage.hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  languages['x-default'] = languages['en'];

  return {
    title: projectsPage.seo.title,
    description: projectsPage.seo.metaDescription,
    keywords: projectsPage.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: projectsPage.seo.ogTitle,
      description: projectsPage.seo.metaDescription,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${projectsPage.seo.h1} - Max Mendes`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: projectsPage.seo.ogTitle,
      description: projectsPage.seo.metaDescription,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

function generatePortfolioSchema(projectsPage: ProjectsPageDict) {
  return {
    '@context': 'https://schema.org',
    '@type': projectsPage.schema.type,
    name: projectsPage.seo.h1,
    description: projectsPage.schema.description,
    url: getFullUrl(projectsPage.href),
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.owner.name,
      url: getFullUrl('/en/about'),
    },
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
        name: 'Home',
        item: getFullUrl('/en'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: getFullUrl(href),
      },
    ],
  };
}

export default async function ProjectsPageEN() {
  const dictionary = await getDictionary('en');

  if (!dictionary.projectsPage) {
    return null;
  }

  const { href } = dictionary.projectsPage;

  return (
    <>
      <JsonLd data={generatePortfolioSchema(dictionary.projectsPage)} />
      <JsonLd data={generateBreadcrumbSchema(href)} />
      <ProjectsClient locale="en" dictionary={dictionary} />
    </>
  );
}
