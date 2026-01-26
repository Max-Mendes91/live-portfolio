import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl, SITE_CONFIG } from '@/lib/seo/config';
import ContactClient from './ContactClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const contactPage = dictionary.contactPage;

  if (!contactPage) return {};

  const canonicalUrl = getFullUrl(contactPage.href);

  const languages: Record<string, string> = {};
  Object.entries(contactPage.hrefLang).forEach(([lang, path]) => {
    languages[lang] = getFullUrl(path);
  });
  languages['x-default'] = languages['en'];

  return {
    title: contactPage.seo.title,
    description: contactPage.seo.metaDescription,
    keywords: contactPage.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: contactPage.seo.ogTitle,
      description: contactPage.seo.metaDescription,
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${contactPage.seo.h1} - Max Mendes`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: contactPage.seo.ogTitle,
      description: contactPage.seo.metaDescription,
      site: SITE_CONFIG.owner.social.twitterHandle,
      creator: SITE_CONFIG.owner.social.twitterHandle,
      images: ['/og-image.png'],
    },
  };
}

function generateContactPageSchema() {
  const { owner } = SITE_CONFIG;

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact - Max Mendes',
    description:
      'Contact page for Max Mendes - full-stack web developer based in Poland serving UK, US & EU clients.',
    url: getFullUrl('/en/contact'),
    mainEntity: {
      '@type': 'Person',
      name: 'Max Mendes',
      jobTitle: 'Full-Stack Web Developer',
      email: owner.email,
      telephone: owner.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: owner.address.city,
        addressRegion: owner.address.region,
        addressCountry: 'PL',
      },
    },
  };
}

function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: getFullUrl('/en'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: getFullUrl('/en/contact'),
      },
    ],
  };
}

export default async function ContactPageEN() {
  const dictionary = await getDictionary('en');

  return (
    <>
      <JsonLd data={generateContactPageSchema()} />
      <JsonLd data={generateBreadcrumbSchema()} />
      <ContactClient locale="en" dictionary={dictionary} />
    </>
  );
}
