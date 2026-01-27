import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { getDictionary } from '@/lib/i18n/config';
import { generateHomePageMetadata } from '@/lib/seo/metadata';
import HomeClient from '@/components/home/HomeClient';
import { isBot } from '@/lib/utils';

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
  const headersList = await headers();
  const skipIntro = isBot(headersList.get('user-agent'));

  return <HomeClient locale="en" dictionary={dictionary} skipIntro={skipIntro} />;
}
