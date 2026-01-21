import { getDictionary, isValidLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { SupportedLocale } from '@/types/seo';
import HomeClient from './HomeClient';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as SupportedLocale);

  return <HomeClient locale={locale as SupportedLocale} dictionary={dictionary} />;
}
