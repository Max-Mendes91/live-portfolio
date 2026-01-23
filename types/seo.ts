// SEO TypeScript interfaces

export type SupportedLocale = 'en' | 'pl';

export interface SiteOwner {
  name: string;
  legalName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    region: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter?: string;
    twitterHandle?: string;
    instagram?: string;
  };
}

export interface SiteConfig {
  name: string;
  url: string;
  defaultLocale: SupportedLocale;
  locales: SupportedLocale[];
  owner: SiteOwner;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface LocalizedContent {
  en: string;
  pl: string;
}

export interface SEOService {
  id: string;
  slug: LocalizedContent;
  title: LocalizedContent;
  description: LocalizedContent;
  features: {
    en: string[];
    pl: string[];
  };
  keywords: {
    en: string[];
    pl: string[];
  };
}

export interface FAQItem {
  question: LocalizedContent;
  answer: LocalizedContent;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: LocalizedContent;
  description: LocalizedContent;
}

// JSON-LD Schema Types
export interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  url: string;
  email: string;
  telephone: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
    addressRegion: string;
  };
  sameAs: string[];
  jobTitle: string;
  worksFor: {
    '@type': 'Organization';
    name: string;
  };
  knowsAbout: string[];
}

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'ProfessionalService';
  '@id': string;
  name: string;
  description: string;
  url: string;
  email: string;
  telephone: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
    addressRegion: string;
  };
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  areaServed: Array<{
    '@type': 'Country' | 'City' | 'State';
    name: string;
  }>;
  priceRange: string;
  openingHours: string;
  sameAs: string[];
  founder: {
    '@type': 'Person';
    name: string;
  };
  knowsAbout: string[];
}

export interface WebsiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  '@id': string;
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': 'Person';
    name: string;
  };
  inLanguage: string[];
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

export interface ServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  '@id': string;
  name: string;
  description: string;
  provider: {
    '@type': 'Person';
    name: string;
  };
  areaServed: Array<{
    '@type': 'Country' | 'City' | 'Place' | 'AdministrativeArea';
    name: string;
  }>;
  serviceType: string;
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}
