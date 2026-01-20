import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SLUG_TO_SERVICE_KEY, SERVICE_SLUGS } from '@/lib/services/config';
import { SITE_CONFIG, getFullUrl } from '@/lib/seo/config';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo/schemas';

// Service metadata (EN)
const SERVICE_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  webDevelopment: {
    title: 'Web Development Services Poland | React & Next.js Developer',
    description:
      'Professional web development services in Poland. Custom React and Next.js applications, Node.js backends, REST APIs. Serving UK, US & EU clients. Free quote available.',
    keywords: [
      'web development poland',
      'react developer',
      'next.js developer',
      'full stack developer',
      'web applications',
    ],
  },
  webDesign: {
    title: 'Web Design & UI/UX Services | Modern Responsive Design',
    description:
      'Professional web design and UI/UX services. Modern, responsive designs that convert visitors into customers. Figma prototyping, design systems, mobile-first approach.',
    keywords: [
      'web design services',
      'ui ux design',
      'responsive web design',
      'figma design',
      'conversion optimization',
    ],
  },
  seo: {
    title: 'SEO Optimization Services | Technical SEO & On-Page Optimization',
    description:
      'Expert SEO optimization services. Technical audits, on-page optimization, Core Web Vitals, schema markup, local SEO. Boost your Google rankings today.',
    keywords: [
      'seo services',
      'technical seo',
      'seo optimization',
      'local seo',
      'google rankings',
    ],
  },
  ecommerce: {
    title: 'E-commerce Development | Custom Online Store Solutions',
    description:
      'Professional e-commerce development services. Custom online stores with payment integration, inventory management, multi-currency support. Launch your store today.',
    keywords: [
      'ecommerce development',
      'online store',
      'shopify alternative',
      'custom ecommerce',
      'payment integration',
    ],
  },
};

// Generate static params for all service pages
export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const serviceKey = SLUG_TO_SERVICE_KEY[slug];

  if (!serviceKey) {
    notFound();
  }

  const meta = SERVICE_META[serviceKey];
  const canonicalPath = `/services/${slug}`;
  const plPath = `/pl/uslugi/${slug}`;

  return {
    title: `${meta.title} | ${SITE_CONFIG.name}`,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    alternates: {
      canonical: getFullUrl(canonicalPath),
      languages: {
        en: getFullUrl(canonicalPath),
        'en-US': getFullUrl(canonicalPath),
        'en-GB': getFullUrl(canonicalPath),
        pl: getFullUrl(plPath),
        'x-default': getFullUrl(canonicalPath),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: getFullUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      alternateLocale: 'pl_PL',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${meta.title} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* JSON-LD will be added via a client component or inline script */}
    </>
  );
}
