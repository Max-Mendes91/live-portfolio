import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl } from '@/lib/seo/config';
import { FAQPageDict } from '@/types/i18n';
import FAQClient from '@/app/(en)/en/faq/FAQClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const faqPage = dictionary.faqPage;

  if (!faqPage) return {};

  // Generate canonical URL dynamically from dictionary
  const canonicalUrl = getFullUrl(faqPage.href);

  // Generate alternate language URLs from hrefLang
  const languages: Record<string, string> = {};
  Object.entries(faqPage.hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  languages['x-default'] = languages['en'];

  return {
    title: faqPage.seo.title,
    description: faqPage.seo.metaDescription,
    keywords: faqPage.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: faqPage.seo.ogTitle,
      description: faqPage.seo.metaDescription,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'pl_PL',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${faqPage.seo.h1} - Max Mendes`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: faqPage.seo.ogTitle,
      description: faqPage.seo.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

function generateFAQSchema(faqPage: FAQPageDict) {
  // Flatten all FAQ items from all categories
  const allFaqItems = faqPage.categories.flatMap(category =>
    category.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems,
  };
}

function generateBreadcrumbSchema(href: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: getFullUrl('/pl'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: getFullUrl(href),
      },
    ],
  };
}

export default async function FAQPagePL() {
  const dictionary = await getDictionary('pl');

  if (!dictionary.faqPage) {
    return null;
  }

  const { href } = dictionary.faqPage;

  return (
    <>
      <JsonLd data={generateFAQSchema(dictionary.faqPage)} />
      <JsonLd data={generateBreadcrumbSchema(href)} />
      <FAQClient locale="pl" dictionary={dictionary} />
    </>
  );
}
