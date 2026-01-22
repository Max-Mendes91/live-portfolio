import {
  PersonSchema,
  LocalBusinessSchema,
  WebsiteSchema,
  ServiceSchema,
  FAQPageSchema,
  BreadcrumbSchema,
  SupportedLocale,
} from '@/types/seo';
import { ServiceLink } from '@/types/i18n';
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
      owner.social.twitter,
      owner.social.linkedin,
      owner.social.github,
      owner.social.instagram,
    ],
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
      owner.social.twitter,
      owner.social.linkedin,
      owner.social.github,
      owner.social.instagram,
    ],
    founder: {
      '@type': 'Person',
      name: owner.name,
    },
    knowsAbout: SKILLS,
  };
}

// Generate Website schema
export function generateWebsiteSchema(): WebsiteSchema {
  const { owner } = SITE_CONFIG;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description:
      'Professional web development portfolio and services by Max Mendes - Full Stack Developer specializing in React, Next.js, and modern web technologies.',
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
export function generateHomePageSchemas(locale: SupportedLocale = 'en') {
  return [generatePersonSchema(), generateLocalBusinessSchema(locale), generateWebsiteSchema()];
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
