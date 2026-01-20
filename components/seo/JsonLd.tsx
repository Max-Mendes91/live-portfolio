import { SupportedLocale } from '@/types/seo';
import {
  generateHomePageSchemas,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/schemas';

// Generic JSON-LD component that accepts any schema data
export function JsonLd<T extends object>({ data }: { data: T | T[] }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// Home page JSON-LD (Person + LocalBusiness + Website)
export function HomePageJsonLd({ locale = 'en' }: { locale?: SupportedLocale }) {
  const schemas = generateHomePageSchemas(locale);
  return <JsonLd data={schemas} />;
}

// Service page JSON-LD
export function ServiceJsonLd({
  serviceId,
  locale = 'en',
}: {
  serviceId: string;
  locale?: SupportedLocale;
}) {
  const schema = generateServiceSchema(serviceId, locale);
  return <JsonLd data={schema} />;
}

// FAQ section JSON-LD
export function FAQJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = generateFAQSchema(faqs);
  return <JsonLd data={schema} />;
}

// Breadcrumb JSON-LD
export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url?: string }> }) {
  const schema = generateBreadcrumbSchema(items);
  return <JsonLd data={schema} />;
}

// All services JSON-LD (for services listing page)
export function AllServicesJsonLd({ locale = 'en' }: { locale?: SupportedLocale }) {
  const serviceIds = ['webDevelopment', 'webDesign', 'seo', 'ecommerce'];
  const schemas = serviceIds.map((id) => generateServiceSchema(id, locale));
  return <JsonLd data={schemas} />;
}
