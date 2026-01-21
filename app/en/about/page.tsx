import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import AboutClient from './AboutClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const aboutPage = dictionary.aboutPage;

  if (!aboutPage) return {};

  const canonicalUrl = getFullUrl('/en/about');

  return {
    title: aboutPage.meta.title,
    description: aboutPage.meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        pl: getFullUrl('/pl/o-mnie'),
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: aboutPage.meta.title,
      description: aboutPage.meta.description,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'profile',
    },
  };
}

function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Max Mendes',
    jobTitle: 'Full-Stack Web Developer',
    description:
      'Full-stack web developer based in Poland specializing in React, Next.js, and TypeScript',
    url: getFullUrl('/en/about'),
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
        name: 'Home',
        item: getFullUrl('/en'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: getFullUrl('/en/about'),
      },
    ],
  };
}

export default async function AboutPageEN() {
  const dictionary = await getDictionary('en');

  if (!dictionary.aboutPage) {
    return null;
  }

  return (
    <>
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateBreadcrumbSchema()} />
      <AboutClient locale="en" dictionary={dictionary} />
    </>
  );
}
