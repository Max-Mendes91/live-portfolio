import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/config';

// Comprehensive list of AI crawlers - all ALLOWED for discoverability
const AI_CRAWLERS = [
  // OpenAI
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  // Anthropic
  'anthropic-ai',
  'ClaudeBot',
  'claude-web',
  // Google AI
  'Google-Extended',
  'Gemini-Deep-Research',
  'GoogleAgent-Mariner',
  'Google-CloudVertexBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Meta
  'FacebookBot',
  'meta-externalagent',
  'Meta-ExternalFetcher',
  // ByteDance
  'Bytespider',
  // Amazon
  'Amazonbot',
  // Apple
  'Applebot',
  'Applebot-Extended',
  // Common Crawl
  'CCBot',
  // DeepSeek
  'DeepSeekBot',
  // Microsoft
  'Bingbot',
  // Cohere
  'cohere-ai',
  // Other emerging AI
  'YouBot',
  'Diffbot',
  'PetalBot',
  'SemrushBot-OCOB',
  'DataForSeoBot',
];

export default function robots(): MetadataRoute.Robots {
  // Base rules for all crawlers
  const baseRules: MetadataRoute.Robots['rules'] = [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/private/'],
    },
  ];

  // AI crawler rules - ALLOW all for discoverability
  const aiRules: MetadataRoute.Robots['rules'] = AI_CRAWLERS.map((bot) => ({
    userAgent: bot,
    allow: '/',
    disallow: ['/api/', '/_next/', '/private/'],
  }));

  return {
    rules: [...baseRules, ...aiRules],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
