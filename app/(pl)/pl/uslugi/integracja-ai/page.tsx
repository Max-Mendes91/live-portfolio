import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateServicePageMetadata } from '@/lib/seo/metadata';
import { ServicePageJsonLd } from '@/components/seo/JsonLd';
import { ServiceLink } from '@/types/i18n';

const SERVICE_ID = 'ai-integration';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const serviceData = dictionary.servicePages?.[SERVICE_ID] as ServiceLink | undefined;

  if (!serviceData) {
    return {
      title: 'Integracja AI i Automatyzacja | Max Mendes',
    };
  }

  return generateServicePageMetadata(serviceData, 'pl');
}

export default async function IntegracjaAIPage() {
  const dictionary = await getDictionary('pl');
  const serviceData = dictionary.servicePages?.[SERVICE_ID] as ServiceLink | undefined;

  return (
    <>
      {serviceData && <ServicePageJsonLd serviceData={serviceData} />}
      <div className="min-h-screen bg-background text-text-primary">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-light tracking-tight mb-6">
            {serviceData?.seo.h1 || 'Integracja AI i Automatyzacja'}
          </h1>
          <p className="text-text-secondary">Treść wkrótce...</p>
        </div>
      </div>
    </>
  );
}
