import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateServicePageMetadata } from '@/lib/seo/metadata';
import { ServicePageJsonLd } from '@/components/seo/JsonLd';
import ServicePageClient from '@/components/sections/ServicePageClient';
import { ServiceLink } from '@/types/i18n';

const SERVICE_ID = 'seo-performance-optimization';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const serviceData = dictionary.servicePages?.[SERVICE_ID] as ServiceLink | undefined;

  if (!serviceData) {
    return {
      title: 'SEO & Optymalizacja Wydajności | Max Mendes',
    };
  }

  return generateServicePageMetadata(serviceData, 'pl');
}

export default async function PozycjonowaniePage() {
  const dictionary = await getDictionary('pl');
  const serviceData = dictionary.servicePages?.[SERVICE_ID] as ServiceLink | undefined;

  if (!serviceData) {
    return null;
  }

  return (
    <>
      <ServicePageJsonLd serviceData={serviceData} />
      <ServicePageClient locale="pl" dictionary={dictionary} serviceData={serviceData} />
    </>
  );
}
