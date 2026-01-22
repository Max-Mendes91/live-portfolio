import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import { generateServicePageMetadata } from '@/lib/seo/metadata';
import ServicesClient from './ServicesClient';
import { JsonLd, ServicePageJsonLd } from '@/components/seo/JsonLd';
import { ServiceLink } from '@/types/i18n';

const PAGE_ID = 'services-overview';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;

  if (!pageData) {
    return {
      title: 'Usługi Web Development Częstochowa | Max Mendes',
    };
  }

  return generateServicePageMetadata(pageData, 'pl');
}

function generateServicesListSchema() {
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
          name: 'Aplikacje Webowe i SaaS',
          url: getFullUrl('/pl/uslugi/aplikacje-webowe'),
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Sklepy Internetowe',
          url: getFullUrl('/pl/uslugi/sklepy-internetowe'),
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Pozycjonowanie Techniczne SEO',
          url: getFullUrl('/pl/uslugi/pozycjonowanie'),
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'Integracja AI i Automatyzacja',
          url: getFullUrl('/pl/uslugi/integracja-ai'),
        },
      },
    ],
  };
}

export default async function ServicesPagePL() {
  const dictionary = await getDictionary('pl');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;

  return (
    <>
      {pageData && <ServicePageJsonLd serviceData={pageData} />}
      <JsonLd data={generateServicesListSchema()} />
      <ServicesClient locale="pl" dictionary={dictionary} />
    </>
  );
}
