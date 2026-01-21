import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { getFullUrl, SITE_CONFIG } from '@/lib/seo/config';
import ContactClient from './ContactClient';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getFullUrl('/en/contact');

  return {
    title: 'Contact - Freelance Web Developer Poland | Max Mendes',
    description:
      'Get in touch for your web project. Full-stack developer based in Poland. Free quote. Websites, e-commerce, web apps.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        pl: getFullUrl('/pl/kontakt'),
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: 'Contact - Freelance Web Developer | Max Mendes',
      description:
        'Get in touch for your web project. Full-stack developer based in Poland.',
      url: canonicalUrl,
      siteName: 'Max Mendes',
      locale: 'en_US',
      type: 'website',
    },
  };
}

function generateContactPageSchema() {
  const { owner } = SITE_CONFIG;

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact - Max Mendes',
    description: 'Contact page for Max Mendes - full-stack web developer based in Poland',
    url: getFullUrl('/en/contact'),
    mainEntity: {
      '@type': 'Person',
      name: 'Max Mendes',
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

export default async function ContactPageEN() {
  const dictionary = await getDictionary('en');

  return (
    <>
      <JsonLd data={generateContactPageSchema()} />
      <ContactClient locale="en" dictionary={dictionary} />
    </>
  );
}
