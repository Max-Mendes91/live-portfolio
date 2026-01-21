import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import ServicesClient from './ServicesClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getFullUrl('/pl/uslugi');

  return {
    title: 'Usługi Web Development Częstochowa | Tworzenie Stron Internetowych',
    description:
      'Profesjonalne usługi tworzenia stron internetowych, sklepów e-commerce i aplikacji webowych. React, Next.js, TypeScript. Częstochowa, Śląskie i cała Polska.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: getFullUrl('/en/services'),
        pl: canonicalUrl,
        'x-default': getFullUrl('/en/services'),
      },
    },
    openGraph: {
      title: 'Usługi Web Development Częstochowa | Max Mendes',
      description:
        'Profesjonalne usługi tworzenia stron internetowych, sklepów e-commerce i aplikacji webowych.',
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'pl_PL',
      type: 'website',
    },
  };
}

function generateServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Usługi Web Development',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Tworzenie Stron Internetowych',
          url: getFullUrl('/pl/uslugi/tworzenie-stron'),
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Projektowanie Stron WWW',
          url: getFullUrl('/pl/uslugi/projektowanie-stron'),
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Pozycjonowanie SEO',
          url: getFullUrl('/pl/uslugi/pozycjonowanie'),
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Sklepy Internetowe',
          url: getFullUrl('/pl/uslugi/sklepy-internetowe'),
        },
      },
    ],
  };
}

export default async function ServicesPagePL() {
  const dictionary = await getDictionary('pl');

  return (
    <>
      <JsonLd data={generateServicesSchema()} />
      <ServicesClient locale="pl" dictionary={dictionary} />
    </>
  );
}
