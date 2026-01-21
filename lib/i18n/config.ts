import { SupportedLocale } from '@/types/seo';

export const i18nConfig = {
  defaultLocale: 'en' as SupportedLocale,
  locales: ['en', 'pl'] as SupportedLocale[],
  localeNames: {
    en: 'English',
    pl: 'Polski',
  } as const,
} as const;

// Type guard for locale validation
export function isValidLocale(locale: string): locale is SupportedLocale {
  return i18nConfig.locales.includes(locale as SupportedLocale);
}

export type Dictionary = typeof import('./dictionaries/en.json');

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
};

export const getDictionary = async (locale: SupportedLocale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
