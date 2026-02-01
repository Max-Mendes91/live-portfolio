import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} - Full Stack Web Developer`,
    short_name: SITE_CONFIG.name,
    description:
      'Professional web development services. React, Next.js, E-commerce, and SEO optimization.',
    start_url: '/',
    display: 'browser', // Changed from 'standalone' - no app behavior, normal website
    background_color: '#050505',
    theme_color: '#050505',
    categories: ['business', 'productivity'],
    lang: 'en',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
