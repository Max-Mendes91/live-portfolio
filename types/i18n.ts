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

// Service item within services section
export interface ServiceItemDict {
  title: string;
  description: string;
  features: string[];
}

// Services section dictionary
export interface ServicesDict {
  title: string;
  subtitle: string;
  webDevelopment: ServiceItemDict;
  webDesign: ServiceItemDict;
  seo: ServiceItemDict;
  ecommerce: ServiceItemDict;
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

// Footer section dictionary
export interface FooterDict {
  tagline: string;
  cta: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  links: {
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  copyright: string;
  seoText?: string;
  availableBadge?: string;
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

// About page (full page, not homepage section)
export interface AboutPageDict {
  meta: {
    title: string;
    description: string;
  };
  heading: string;
  bio: string[];
  skills: {
    title: string;
    items: string[];
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
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    tertiaryButton: string;
  };
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
}
