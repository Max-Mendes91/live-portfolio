import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/config';
import { getBlogPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  // Define pages with their localized paths and hreflang alternates
  const pages: Array<{
    en: string;
    pl: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    // Homepage
    {
      en: '/en',
      pl: '/pl',
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    // About
    {
      en: '/en/about',
      pl: '/pl/o-mnie',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    // Contact
    {
      en: '/en/contact',
      pl: '/pl/kontakt',
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    // Projects
    {
      en: '/en/projects',
      pl: '/pl/projekty',
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    // Blog listing
    {
      en: '/en/blog',
      pl: '/pl/artykuly',
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    // Services main page
    {
      en: '/en/services',
      pl: '/pl/uslugi',
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    // Service: Web Development
    {
      en: '/en/services/web-development',
      pl: '/pl/uslugi/tworzenie-stron',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    // Service: SaaS & Web Apps
    {
      en: '/en/services/saas-web-apps',
      pl: '/pl/uslugi/aplikacje-webowe',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    // Service: E-commerce
    {
      en: '/en/services/ecommerce-development',
      pl: '/pl/uslugi/sklepy-internetowe',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    // Service: SEO & Performance
    {
      en: '/en/services/seo-performance-optimization',
      pl: '/pl/uslugi/pozycjonowanie',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    // Service: AI Integration
    {
      en: '/en/services/ai-integration',
      pl: '/pl/uslugi/integracja-ai',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    // FAQ
    {
      en: '/en/faq',
      pl: '/pl/pytania',
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    // Case Study: FlowMate
    {
      en: '/en/projects/flowmate',
      pl: '/pl/projekty/flowmate',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
  ];

  // Generate sitemap entries with hreflang alternates
  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    // English version
    sitemapEntries.push({
      url: `${baseUrl}${page.en}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.en}`,
          pl: `${baseUrl}${page.pl}`,
          'x-default': `${baseUrl}${page.en}`,
        },
      },
    });

    // Polish version
    sitemapEntries.push({
      url: `${baseUrl}${page.pl}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.en}`,
          pl: `${baseUrl}${page.pl}`,
          'x-default': `${baseUrl}${page.en}`,
        },
      },
    });
  });

  // Add blog posts dynamically
  const enPosts = await getBlogPosts('en');

  for (const post of enPosts) {
    const enPath = post.hrefLang.en;
    const plPath = post.hrefLang.pl;

    // English version
    sitemapEntries.push({
      url: `${baseUrl}${enPath}`,
      lastModified: new Date(post.dateModified || post.datePublished),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}${enPath}`,
          pl: `${baseUrl}${plPath}`,
          'x-default': `${baseUrl}${enPath}`,
        },
      },
    });

    // Polish version
    sitemapEntries.push({
      url: `${baseUrl}${plPath}`,
      lastModified: new Date(post.dateModified || post.datePublished),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}${enPath}`,
          pl: `${baseUrl}${plPath}`,
          'x-default': `${baseUrl}${enPath}`,
        },
      },
    });
  }

  return sitemapEntries;
}
