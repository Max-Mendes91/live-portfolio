import type { Viewport } from 'next';
import { Outfit } from 'next/font/google';
import '../globals.css';
import { viewport as viewportConfig } from '@/lib/seo/metadata';
import { HREFLANG_CONFIG, getFullUrl } from '@/lib/seo/config';
import { getDictionary } from '@/lib/i18n/config';
import CookieConsent from '@/components/CookieConsent';
import Analytics from '@/components/Analytics';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
});

export const viewport: Viewport = viewportConfig;

export default async function PolishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary('pl');
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        {/* hreflang tags for multi-regional targeting */}
        {HREFLANG_CONFIG.map(({ hreflang, href }) => (
          <link
            key={hreflang}
            rel="alternate"
            hrefLang={hreflang}
            href={getFullUrl(href)}
          />
        ))}
        {/* Favicon - explicit for Google discovery */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://grainy-gradients.vercel.app" crossOrigin="anonymous" />
        {/* Geo targeting meta tags */}
        <meta name="geo.region" content="PL-SL" />
        <meta name="geo.placename" content="Częstochowa" />
        <meta name="geo.position" content="50.8118;19.1203" />
        <meta name="ICBM" content="50.8118, 19.1203" />
        {/* Google Search Console verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        {dictionary.cookieConsent && (
          <CookieConsent dictionary={dictionary.cookieConsent} />
        )}
        <Analytics gaMeasurementId={gaMeasurementId} />
      </body>
    </html>
  );
}
