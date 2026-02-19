import { SupportedLocale } from '@/types/seo';
import { ServiceLink, CaseStudyPageDict, BlogPageDict, BlogPostMeta } from '@/types/i18n';
import {
  generateHomePageSchemas,
  generateServiceSchema,
  generateServicePageSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateCaseStudySchema,
  generateCaseStudyHowToSchema,
  generateBlogListingSchema,
  generateBlogPostSchema,
  HomePageSchemaData,
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
export function HomePageJsonLd({ locale = 'en', homePageData }: { locale?: SupportedLocale; homePageData?: HomePageSchemaData }) {
  const schemas = generateHomePageSchemas(locale, homePageData);
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

// Service page JSON-LD using dictionary ServiceLink data
export function ServicePageJsonLd({ serviceData }: { serviceData: ServiceLink }) {
  const schema = generateServicePageSchema(serviceData);
  return <JsonLd data={schema} />;
}

// Case study page JSON-LD (TechArticle + optional HowTo)
export function CaseStudyPageJsonLd({ caseStudyData }: { caseStudyData: CaseStudyPageDict }) {
  const articleSchema = generateCaseStudySchema(caseStudyData);
  const howToSchema = generateCaseStudyHowToSchema(caseStudyData);

  // Combine schemas, filtering out null values
  const schemas = [articleSchema, howToSchema].filter(Boolean);

  return <JsonLd data={schemas} />;
}

// Blog listing page JSON-LD (CollectionPage + ItemList)
export function BlogListingJsonLd({
  blogData,
  posts,
  locale = 'en',
}: {
  blogData: BlogPageDict;
  posts: BlogPostMeta[];
  locale?: SupportedLocale;
}) {
  const schemas = generateBlogListingSchema(blogData, posts, locale);
  return <JsonLd data={schemas} />;
}

// Blog post page JSON-LD (BlogPosting)
export function BlogPostJsonLd({
  postMeta,
  locale = 'en',
}: {
  postMeta: BlogPostMeta;
  locale?: SupportedLocale;
}) {
  const schema = generateBlogPostSchema(postMeta, locale);
  return <JsonLd data={schema} />;
}
