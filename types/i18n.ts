// i18n TypeScript interfaces for dictionary structure
import { SupportedLocale } from './seo';

// Re-export for convenience
export type { SupportedLocale };

// Trust signal item (used in Hero)
export interface TrustSignalDict {
  label: string;
  icon: string;
}

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
  trustSignals?: TrustSignalDict[];
}

// About section dictionary (homepage)
export interface AboutDict {
  headline: string;
  subheadline: string;
  description: string;
  description2: string;
  learnMoreText: string;
  learnMoreHref: string;
  trustBadges: string[];
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
  subtitle: string;
  description: string;
}

// CTA link with internal href
export interface ProcessCTADict {
  label: string;
  href: string;
}

// Process section dictionary
export interface ProcessDict {
  badge: string;
  title: string;
  subtitle: string;
  imageLabel: string;
  steps: ProcessStepDict[];
  ctas: ProcessCTADict[];
}

// FAQ item within FAQ section
export interface FAQItemDict {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

// FAQ section dictionary
export interface FAQDict {
  title: string;
  items: FAQItemDict[];
}

// FAQ Teaser section dictionary (homepage teaser)
export interface FAQTeaserDict {
  badge: string;
  title: string;
  subtitle: string;
  items: FAQItemDict[];
  cta: {
    label: string;
    href: string;
  };
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
    faq: string;
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
    phone: string;
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
  logoAlt: string;
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
  formDescription?: string;
  labels: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    name: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
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
    ctaServices?: string;
    ctaProjects?: string;
  };
}

// SEO metadata for contact page
export interface ContactPageSEO {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  ogTitle: string;
}

// Schema.org markup for contact page
export interface ContactPageSchema {
  type: string;
  description: string;
  areaServed: string[];
}

// Contact page with SEO metadata (full page)
export interface ContactPageDict {
  id: string;
  label: string;
  href: string;
  hrefLang: {
    en: string;
    pl: string;
  };
  seo: ContactPageSEO;
  schema: ContactPageSchema;
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

// Project item for work grid
export interface WorkGridProjectDict {
  id: string;
  title: string;
  description: string;
  metric: string;
  href: string;
  externalUrl?: string;
  cta: string;
  externalCta?: string;
  tags: string[];
  image?: string;
  tech?: string[];
}

// Work grid section dictionary
export interface WorkGridDict {
  title: string;
  viewProject: string;
  projects: WorkGridProjectDict[];
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

// FAQ category with questions
export interface FAQCategoryDict {
  title: string;
  items: FAQItemDict[];
}

// SEO metadata for FAQ page
export interface FAQPageSEO {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  ogTitle: string;
}

// Schema.org markup for FAQ page
export interface FAQPageSchema {
  type: string;
  description: string;
}

// FAQ page dictionary (full page)
export interface FAQPageDict {
  id: string;
  label: string;
  href: string;
  hrefLang: {
    en: string;
    pl: string;
  };
  seo: FAQPageSEO;
  schema: FAQPageSchema;
  intro: string;
  categories: FAQCategoryDict[];
  cta: {
    title: string;
    description: string;
    primaryButton: {
      label: string;
      href: string;
    };
  };
}

// SEO metadata for projects page
export interface ProjectsPageSEO {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  ogTitle: string;
}

// Schema.org markup for projects page
export interface ProjectsPageSchema {
  type: string;
  description: string;
}

// Projects page dictionary with SEO metadata (full page)
export interface ProjectsPageDict {
  id: string;
  label: string;
  href: string;
  hrefLang: {
    en: string;
    pl: string;
  };
  seo: ProjectsPageSEO;
  schema: ProjectsPageSchema;
  badge: string;
  title: string;
  subtitle: string;
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

// SEO metadata for home page (same pattern as other pages)
export interface HomePageSEO {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  ogTitle: string;
}

// Schema.org markup for home page
export interface HomePageSchema {
  type: string;
  description: string;
  areaServed: string[];
}

// Home page dictionary with SEO metadata (consistent with aboutPage, faqPage, etc.)
export interface HomePageDict {
  id: string;
  label: string;
  href: string;
  hrefLang: {
    en: string;
    pl: string;
  };
  seo: HomePageSEO;
  schema: HomePageSchema;
}

// Full dictionary interface
export interface Dictionary {
  hero: HeroDict;
  about: AboutDict;
  services: ServicesDict;
  process: ProcessDict;
  faq: FAQDict;
  faqTeaser?: FAQTeaserDict;
  footer: FooterDict;
  nav: NavDict;
  common: CommonDict;
  contact?: ContactDict;
  projects?: ProjectsDict;
  workGrid?: WorkGridDict;
  homePage?: HomePageDict;
  aboutPage?: AboutPageDict;
  contactPage?: ContactPageDict;
  faqPage?: FAQPageDict;
  projectsPage?: ProjectsPageDict;
  servicesPage?: ServicesPageDict;
  servicePages?: ServicePagesDict;
}
