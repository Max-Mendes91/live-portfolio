import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { generateHomeMetadata, viewport as viewportConfig } from '@/lib/seo/metadata';
import { HREFLANG_CONFIG, getFullUrl } from '@/lib/seo/config';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  ...generateHomeMetadata('en'),
  other: {
    'google-site-verification': '', // Add your verification code
  },
};

export const viewport: Viewport = viewportConfig;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* hreflang tags for multi-regional targeting */}
        {HREFLANG_CONFIG.map(({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" hrefLang={hreflang} href={getFullUrl(href)} />
        ))}
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo targeting meta tags */}
        <meta name="geo.region" content="PL-SL" />
        <meta name="geo.placename" content="Czestochowa" />
        <meta name="geo.position" content="50.8118;19.1203" />
        <meta name="ICBM" content="50.8118, 19.1203" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
