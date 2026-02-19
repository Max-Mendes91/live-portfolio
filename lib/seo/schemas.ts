import {
  PersonSchema,
  LocalBusinessSchema,
  WebsiteSchema,
  ServiceSchema,
  FAQPageSchema,
  BreadcrumbSchema,
  SupportedLocale,
} from '@/types/seo';
import { ServiceLink, CaseStudyPageDict, BlogPageDict, BlogPostMeta } from '@/types/i18n';
import { SITE_CONFIG, GEO_COORDINATES, TARGET_MARKETS, SKILLS, getFullUrl } from './config';

// Generate Person schema for Max Mendes
export function generatePersonSchema(): PersonSchema {
  const { owner } = SITE_CONFIG;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: owner.name,
    url: SITE_CONFIG.url,
    email: owner.email,
    telephone: owner.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: owner.address.street,
      addressLocality: owner.address.city,
      postalCode: owner.address.postalCode,
      addressCountry: owner.address.country,
      addressRegion: owner.address.region,
    },
    sameAs: [
      owner.social.linkedin,
      owner.social.github,
      owner.social.x,
      owner.social.instagram,
    ].filter(Boolean) as string[],
    jobTitle: 'Full Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: owner.name,
    },
    knowsAbout: SKILLS,
  };
}

// Generate Local Business schema
export function generateLocalBusinessSchema(locale: SupportedLocale = 'en'): LocalBusinessSchema {
  const { owner } = SITE_CONFIG;

  const descriptions = {
    en: 'Professional web development services including React, Next.js, e-commerce, and SEO optimization. Serving clients in Poland, UK, US, and Europe.',
    pl: 'Profesjonalne uslugi tworzenia stron internetowych w React, Next.js, e-commerce i pozycjonowanie SEO. Obslugujemy klientow z Polski i calej Europy.',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: owner.name,
    description: descriptions[locale],
    url: SITE_CONFIG.url,
    email: owner.email,
    telephone: owner.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: owner.address.street,
      addressLocality: owner.address.city,
      postalCode: owner.address.postalCode,
      addressCountry: owner.address.country,
      addressRegion: owner.address.region,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
    areaServed: [
      ...TARGET_MARKETS.primary.map((m) => ({ '@type': m.type, name: m.name })),
      ...TARGET_MARKETS.secondary.map((m) => ({ '@type': m.type, name: m.name })),
    ],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      owner.social.linkedin,
      owner.social.github,
      owner.social.x,
      owner.social.instagram,
    ].filter(Boolean) as string[],
    founder: {
      '@type': 'Person',
      name: owner.name,
    },
    knowsAbout: SKILLS,
  };
}

// Homepage schema data from dictionary
export interface HomePageSchemaData {
  seo: {
    h1: string;
  };
  schema: {
    description: string;
  };
}

// Generate Website schema
export function generateWebsiteSchema(homePageData?: HomePageSchemaData): WebsiteSchema {
  const { owner } = SITE_CONFIG;

  // Use dictionary data if provided, otherwise fall back to hardcoded values
  const description = homePageData?.schema.description ??
    'Professional web development portfolio and services by Max Mendes - Full Stack Developer specializing in React, Next.js, and modern web technologies.';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description,
    publisher: {
      '@type': 'Person',
      name: owner.name,
    },
    inLanguage: ['en', 'pl'],
  };
}

// Generate Service schema
export function generateServiceSchema(
  serviceId: string,
  locale: SupportedLocale = 'en'
): ServiceSchema {
  const services = {
    webDevelopment: {
      en: {
        name: 'Full Stack Web Development',
        description:
          'Custom web applications built with React, Next.js, and Node.js. From landing pages to complex web platforms.',
        serviceType: 'Web Development',
      },
      pl: {
        name: 'Tworzenie Stron Internetowych',
        description:
          'Profesjonalne tworzenie stron i aplikacji webowych w React, Next.js i Node.js.',
        serviceType: 'Tworzenie Stron',
      },
    },
    webDesign: {
      en: {
        name: 'Web Design & UI/UX',
        description:
          'Modern, responsive web design focused on user experience and conversion optimization.',
        serviceType: 'Web Design',
      },
      pl: {
        name: 'Projektowanie Stron WWW & UI/UX',
        description:
          'Nowoczesny, responsywny design stron skoncentrowany na doswiadczeniu uzytkownika.',
        serviceType: 'Projektowanie Stron',
      },
    },
    seo: {
      en: {
        name: 'SEO Optimization',
        description:
          'Technical SEO, on-page optimization, and performance improvements to boost search rankings.',
        serviceType: 'SEO Services',
      },
      pl: {
        name: 'Pozycjonowanie SEO',
        description:
          'SEO techniczne, optymalizacja on-page i poprawa wydajnosci dla lepszych pozycji w Google.',
        serviceType: 'Pozycjonowanie',
      },
    },
    ecommerce: {
      en: {
        name: 'E-commerce & Online Stores',
        description:
          'Professional e-commerce solutions with payment integration and inventory management.',
        serviceType: 'E-commerce Development',
      },
      pl: {
        name: 'Sklepy Internetowe & E-commerce',
        description:
          'Profesjonalne rozwiazania e-commerce z integracja platnosci i zarzadzaniem magazynem.',
        serviceType: 'Sklepy Internetowe',
      },
    },
  };

  const service = services[serviceId as keyof typeof services]?.[locale];

  if (!service) {
    throw new Error(`Service ${serviceId} not found for locale ${locale}`);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/#service-${serviceId}`,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: SITE_CONFIG.owner.name,
    },
    areaServed: [
      ...TARGET_MARKETS.primary.map((m) => ({ '@type': m.type, name: m.name })),
      ...TARGET_MARKETS.secondary.map((m) => ({ '@type': m.type, name: m.name })),
    ],
    serviceType: service.serviceType,
  };
}

// Generate FAQ Page schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Breadcrumb schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: getFullUrl(item.url) }),
    })),
  };
}

// Generate all schemas for homepage
export function generateHomePageSchemas(locale: SupportedLocale = 'en', homePageData?: HomePageSchemaData) {
  return [generatePersonSchema(), generateLocalBusinessSchema(locale), generateWebsiteSchema(homePageData)];
}

// Generate Service schema from dictionary ServiceLink data
export function generateServicePageSchema(serviceData: ServiceLink): ServiceSchema {
  const { id, schema, seo } = serviceData;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/#service-${id}`,
    name: seo.h1,
    description: schema.description,
    provider: {
      '@type': 'Person',
      name: SITE_CONFIG.owner.name,
    },
    areaServed: schema.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    serviceType: schema.serviceType,
  };
}

// Case Study / TechArticle Schema type
export interface CaseStudySchema {
  '@context': string;
  '@type': string;
  '@id'?: string;
  headline: string;
  description: string;
  author: {
    '@type': string;
    name: string;
    url: string;
  };
  publisher: {
    '@type': string;
    name: string;
    url: string;
  };
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage: string;
  image?: string;
  keywords: string[];
  articleSection?: string;
  wordCount?: number;
  about?: Array<{
    '@type': string;
    name: string;
  }>;
}

// Generate Case Study (TechArticle) schema from dictionary
export function generateCaseStudySchema(caseStudyData: CaseStudyPageDict): CaseStudySchema {
  const { id, schema, seo, href, content } = caseStudyData;
  const canonicalUrl = getFullUrl(href);

  return {
    '@context': 'https://schema.org',
    '@type': schema.articleType || 'TechArticle',
    '@id': `${SITE_CONFIG.url}/#case-study-${id}`,
    headline: seo.h1,
    description: schema.description,
    author: {
      '@type': 'Person',
      name: schema.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.owner.name,
      url: SITE_CONFIG.url,
    },
    datePublished: schema.datePublished,
    dateModified: schema.dateModified || schema.datePublished,
    mainEntityOfPage: canonicalUrl,
    image: content.hero.image ? getFullUrl(content.hero.image) : undefined,
    keywords: schema.keywords,
    articleSection: 'Case Study',
    about: content.techStack.categories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Thing',
        name: item,
      }))
    ),
  };
}

// Generate HowTo schema for the build process section (optional rich result)
export function generateCaseStudyHowToSchema(caseStudyData: CaseStudyPageDict) {
  const { seo, content, href } = caseStudyData;
  const buildSection = content.sections.find((s) => s.id === 'build-process');

  if (!buildSection?.stackDecisions) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Build a ${content.hero.tags.join(', ')} Application`,
    description: seo.metaDescription,
    totalTime: buildSection.timeline?.duration ? `P${buildSection.timeline.duration.replace(' months', 'M').replace(' month', 'M')}` : undefined,
    step: buildSection.stackDecisions.map((decision, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Choose ${decision.layer}`,
      text: `${decision.choice}: ${decision.why}`,
    })),
    mainEntityOfPage: getFullUrl(href),
  };
}

// Blog listing schema (CollectionPage + ItemList)
export function generateBlogListingSchema(
  blogData: BlogPageDict,
  posts: BlogPostMeta[],
  locale: SupportedLocale = 'en'
) {
  const canonicalUrl = getFullUrl(blogData.href);

  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_CONFIG.url}/#blog-listing`,
    name: blogData.seo.h1,
    description: blogData.schema.description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
    },
    inLanguage: locale === 'en' ? 'en' : 'pl',
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: getFullUrl(post.hrefLang[locale]),
      name: post.title,
    })),
  };

  return [collectionPage, itemList];
}

// Blog post schema (BlogPosting)
export function generateBlogPostSchema(
  postMeta: BlogPostMeta,
  locale: SupportedLocale = 'en'
) {
  const canonicalUrl = getFullUrl(postMeta.hrefLang[locale]);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_CONFIG.url}/#blog-post-${postMeta.slug}`,
    headline: postMeta.h1,
    description: postMeta.metaDescription,
    author: {
      '@type': 'Person',
      name: postMeta.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.owner.name,
      url: SITE_CONFIG.url,
    },
    datePublished: postMeta.datePublished,
    dateModified: postMeta.dateModified || postMeta.datePublished,
    mainEntityOfPage: canonicalUrl,
    image: postMeta.image ? getFullUrl(postMeta.image) : undefined,
    keywords: postMeta.keywords,
    inLanguage: locale === 'en' ? 'en' : 'pl',
    articleSection: 'Blog',
  };
}
