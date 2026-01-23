// i18n TypeScript interfaces for dictionary structure
import { SupportedLocale } from './seo';

// Re-export for convenience
export type { SupportedLocale };

// Hero section dictionary
export interface HeroDict {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  phoneLabel?: string;
  scrollDown?: string;
  toSeeProjects?: string;
}

// About section dictionary
export interface AboutDict {
  headline: string;
  subheadline: string;
  description: string;
  description2: string;
  skills: string[];
}

// Service card for home page services section
export interface ServiceCardDict {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

// Services section dictionary (home page)
export interface ServicesDict {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  pills: string[];
  primaryButton: string;
  secondaryButton: string;
  cards: ServiceCardDict[];
  marquee1: string[];
  marquee2: string[];
}

// Process step within process section
export interface ProcessStepDict {
  number: string;
  title: string;
  description: string;
}

// Process section dictionary
export interface ProcessDict {
  title: string;
  subtitle: string;
  steps: ProcessStepDict[];
}

// FAQ item within FAQ section
export interface FAQItemDict {
  question: string;
  answer: string;
}

// FAQ section dictionary
export interface FAQDict {
  title: string;
  items: FAQItemDict[];
}

// SEO metadata for service pages
export interface ServiceSEO {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  ogTitle: string;
}

// Schema.org markup for service pages
export interface ServiceSchema {
  serviceType: string;
  description: string;
  areaServed: string[];
}

// Complete service link with SEO metadata
export interface ServiceLink {
  id: string;
  label: string;
  href: string;
  hrefLang: {
    en: string;
    pl: string;
  };
  seo: ServiceSEO;
  schema: ServiceSchema;
}

// Footer section dictionary (reveal footer)
export interface FooterDict {
  availableBadge: string;
  headline: string;
  subheadline: string;
  cta: string;
  seoText: string;
  // Navigation links
  sections: {
    quickLinks: string;
    services: string;
    contact: string;
  };
  quickLinks: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  // Service links with localized hrefs (same pattern as servicesPage.services)
  serviceLinks: Array<{
    label: string;
    href: string;
  }>;
  contact: {
    name: string;
    location: string;
    available: string;
  };
  bottom: {
    copyright: string;
    tagline: string;
    serving: string;
  };
}

// Navigation dictionary
export interface NavDict {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
}

// Common UI strings
export interface CommonDict {
  learnMore: string;
  getStarted: string;
  viewAll: string;
  readMore: string;
  backTo?: string;
  sendMessage?: string;
}

// Contact page dictionary
export interface ContactDict {
  badge: string;
  title: string;
  subtitle: string;
  infoTitle: string;
  formTitle: string;
  labels: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    name: string;
    subject: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  submit: string;
  success: string;
  error: string;
  servingRemote: string;
  flexibleTimezone: string;
  socialConnect: string;
  availabilityHours: string;
  notSure: {
    title: string;
    description: string;
  };
}

// Projects page dictionary
export interface ProjectsDict {
  badge: string;
  title: string;
  subtitle: string;
  categories: {
    all: string;
    websites: string;
    ecommerce: string;
    webApps: string;
  };
  cta: {
    viewProject: string;
    startProject: string;
  };
}

// Work grid section dictionary
export interface WorkGridDict {
  title: string;
  viewCasestudy: string;
}

// Services page dictionary (full page, not homepage section)
export interface ServicesPageDict {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  services: Array<{
    id: string;
    icon1: string;
    icon2: string;
    iconCenter1: string;
    iconCenter2: string;
    badge: string;
    title: string;
    description: string;
    features: string[];
    href: string;
  }>;
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

// SEO metadata for about page (same pattern as ServiceSEO)
export interface AboutPageSEO {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  ogTitle: string;
}

// Schema.org markup for about page
export interface AboutPageSchema {
  type: string;
  description: string;
  areaServed: string[];
}

// About page (full page, not homepage section)
export interface AboutPageDict {
  id: string;
  label: string;
  href: string;
  hrefLang: {
    en: string;
    pl: string;
  };
  seo: AboutPageSEO;
  schema: AboutPageSchema;
  heading: string;
  location: string;
  bio: string[];
  skills: {
    title: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  experience: {
    title: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
  };
  social: {
    github: string;
    linkedin: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

// Service pages with full SEO metadata (for individual service pages)
export interface ServicePagesDict {
  [key: string]: ServiceLink;
}

// Full dictionary interface
export interface Dictionary {
  hero: HeroDict;
  about: AboutDict;
  services: ServicesDict;
  process: ProcessDict;
  faq: FAQDict;
  footer: FooterDict;
  nav: NavDict;
  common: CommonDict;
  contact?: ContactDict;
  projects?: ProjectsDict;
  workGrid?: WorkGridDict;
  aboutPage?: AboutPageDict;
  servicesPage?: ServicesPageDict;
  servicePages?: ServicePagesDict;
}
