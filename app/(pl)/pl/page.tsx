import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/config';
import { generateHomePageMetadata } from '@/lib/seo/metadata';
import HomeClient from '@/components/home/HomeClient';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('pl');
  const homePage = dictionary.homePage;

  if (!homePage) {
    return { title: 'Max Mendes | Web Developer' };
  }

  return {
    ...generateHomePageMetadata(homePage, 'pl'),
    other: {
      'google-site-verification': '',
    },
  };
}

export default async function PolishHomePage() {
  const dictionary = await getDictionary('pl');

  return <HomeClient locale="pl" dictionary={dictionary} />;
}
