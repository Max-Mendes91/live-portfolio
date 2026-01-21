import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/config';
import { i18nConfig } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  // Define pages with their paths per locale
  // Polish uses localized paths (kontakt, projekty, uslugi)
  // English uses English paths (contact, projects, services)
  const pages = [
    {
      en: '/en',
      pl: '/pl',
      priority: 1.0,
      changeFrequency: 'weekly' as const
    },
    {
      en: '/en/contact',
      pl: '/pl/kontakt',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    },
    {
      en: '/en/projects',
      pl: '/pl/projekty',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      en: '/en/services/web-development',
      pl: '/pl/uslugi/web-development',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    },
    {
      en: '/en/services/web-design',
      pl: '/pl/uslugi/web-design',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    },
    {
      en: '/en/services/seo',
      pl: '/pl/uslugi/seo',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    },
    {
      en: '/en/services/ecommerce',
      pl: '/pl/uslugi/ecommerce',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    },
  ];

  // Generate sitemap entries for all locales
  return pages.flatMap((page) =>
    i18nConfig.locales.map((locale) => ({
      url: `${baseUrl}${page[locale]}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );
}
