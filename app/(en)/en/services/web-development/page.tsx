import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateServicePageMetadata } from '@/lib/seo/metadata';
import { ServicePageJsonLd } from '@/components/seo/JsonLd';
import { ServiceLink } from '@/types/i18n';

const SERVICE_ID = 'web-development';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const serviceData = dictionary.servicePages?.[SERVICE_ID] as ServiceLink | undefined;

  if (!serviceData) {
    return {
      title: 'Full-Stack Web Development | Max Mendes',
    };
  }

  return generateServicePageMetadata(serviceData, 'en');
}

export default async function WebDevelopmentPage() {
  const dictionary = await getDictionary('en');
  const serviceData = dictionary.servicePages?.[SERVICE_ID] as ServiceLink | undefined;

  return (
    <>
      {serviceData && <ServicePageJsonLd serviceData={serviceData} />}
      <div className="min-h-screen bg-background text-text-primary">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-light tracking-tight mb-6">
            {serviceData?.seo.h1 || 'Full-Stack Web Development'}
          </h1>
          <p className="text-text-secondary">Content coming soon...</p>
        </div>
      </div>
    </>
  );
}
