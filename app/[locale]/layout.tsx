import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Outfit } from 'next/font/google';
import '../globals.css';
import { i18nConfig, isValidLocale } from '@/lib/i18n/config';
import { generateHomeMetadata, viewport as viewportConfig } from '@/lib/seo/metadata';
import { getFullUrl } from '@/lib/seo/config';
import { SupportedLocale } from '@/types/seo';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    ...generateHomeMetadata(locale as SupportedLocale),
    other: {
      'google-site-verification': '',
    },
  };
}

export const viewport: Viewport = viewportConfig;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* hreflang tags for multi-regional targeting */}
        <link rel="alternate" hrefLang="en" href={getFullUrl('/en')} />
        <link rel="alternate" hrefLang="en-US" href={getFullUrl('/en')} />
        <link rel="alternate" hrefLang="en-GB" href={getFullUrl('/en')} />
        <link rel="alternate" hrefLang="pl" href={getFullUrl('/pl')} />
        <link rel="alternate" hrefLang="x-default" href={getFullUrl('/en')} />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Geo targeting meta tags */}
        <meta name="geo.region" content="PL-SL" />
        <meta name="geo.placename" content="Czestochowa" />
        <meta name="geo.position" content="50.8118;19.1203" />
        <meta name="ICBM" content="50.8118, 19.1203" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
