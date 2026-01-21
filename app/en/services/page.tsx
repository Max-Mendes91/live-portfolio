import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import ServicesClient from './ServicesClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getFullUrl('/en/services');

  return {
    title: 'Web Development Services | Freelance Developer Poland',
    description:
      'Professional web development services including websites, e-commerce stores, and web applications. React, Next.js, TypeScript. Based in Poland, serving UK, US & Europe.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        pl: getFullUrl('/pl/uslugi'),
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: 'Web Development Services | Max Mendes',
      description:
        'Professional web development services including websites, e-commerce stores, and web applications.',
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'website',
    },
  };
}

function generateServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Full Stack Web Development',
          url: getFullUrl('/en/services/web-development'),
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Web Design & UI/UX',
          url: getFullUrl('/en/services/web-design'),
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'SEO Optimization',
          url: getFullUrl('/en/services/seo'),
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'E-commerce Development',
          url: getFullUrl('/en/services/ecommerce'),
        },
      },
    ],
  };
}

export default async function ServicesPageEN() {
  const dictionary = await getDictionary('en');

  return (
    <>
      <JsonLd data={generateServicesSchema()} />
      <ServicesClient locale="en" dictionary={dictionary} />
    </>
  );
}
