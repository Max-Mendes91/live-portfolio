import type { Viewport } from 'next';
import { Outfit } from 'next/font/google';
import '../globals.css';
import { viewport as viewportConfig } from '@/lib/seo/metadata';
import { HREFLANG_CONFIG, getFullUrl } from '@/lib/seo/config';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
});

export const viewport: Viewport = viewportConfig;

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://grainy-gradients.vercel.app" />
        {/* Geo targeting meta tags */}
        <meta name="geo.region" content="PL-SL" />
        <meta name="geo.placename" content="Czestochowa" />
        <meta name="geo.position" content="50.8118;19.1203" />
        <meta name="ICBM" content="50.8118, 19.1203" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {/* Blocking script: marks intro as seen before browser paints,
            preventing the splash overlay flash on revisits */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('hasSeenIntro')==='true')document.documentElement.classList.add('intro-seen')}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
