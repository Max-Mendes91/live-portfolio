import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateHomePageMetadata } from '@/lib/seo/metadata';
import HomeClient from '@/components/home/HomeClient';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  const homePage = dictionary.homePage;

  if (!homePage) {
    return { title: 'Max Mendes | Web Developer' };
  }

  return {
    ...generateHomePageMetadata(homePage, 'en'),
    other: {
      'google-site-verification': '',
    },
  };
}

export default async function EnglishHomePage() {
  const dictionary = await getDictionary('en');

  return <HomeClient locale="en" dictionary={dictionary} />;
}
