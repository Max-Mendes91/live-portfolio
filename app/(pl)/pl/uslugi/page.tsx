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

function generateServicesListSchema(services: Array<{ title: string; href: string }>, listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        url: getFullUrl(service.href),
      },
    })),
  };
}

export default async function ServicesPagePL() {
  const dictionary = await getDictionary('pl');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;
  const services = dictionary.servicesPage?.services || [];

  return (
    <>
      {pageData && <ServicePageJsonLd serviceData={pageData} />}
      <JsonLd data={generateServicesListSchema(services, 'Usługi Web Development')} />
      <ServicesClient locale="pl" dictionary={dictionary} />
    </>
  );
}
