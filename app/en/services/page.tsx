import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import { generateServicePageMetadata } from '@/lib/seo/metadata';
import ServicesClient from './ServicesClient';
import { JsonLd, ServicePageJsonLd } from '@/components/seo/JsonLd';
import { ServiceLink } from '@/types/i18n';

const PAGE_ID = 'services-overview';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;

  if (!pageData) {
    return {
      title: 'Web Development Services | Max Mendes',
    };
  }

  return generateServicePageMetadata(pageData, 'en');
}

function generateServicesListSchema() {
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
          name: 'SaaS & Web Applications',
          url: getFullUrl('/en/services/saas-web-apps'),
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'E-commerce Development',
          url: getFullUrl('/en/services/ecommerce-development'),
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'SEO & Performance Optimization',
          url: getFullUrl('/en/services/seo-performance-optimization'),
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'AI Integration & Automation',
          url: getFullUrl('/en/services/ai-integration'),
        },
      },
    ],
  };
}

export default async function ServicesPageEN() {
  const dictionary = await getDictionary('en');
  const pageData = dictionary.servicePages?.[PAGE_ID] as ServiceLink | undefined;

  return (
    <>
      {pageData && <ServicePageJsonLd serviceData={pageData} />}
      <JsonLd data={generateServicesListSchema()} />
      <ServicesClient locale="en" dictionary={dictionary} />
    </>
  );
}
