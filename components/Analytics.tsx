'use client';

import React, { useEffect, useState } from 'react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Script from 'next/script';
import { hasAnalyticsConsent } from './CookieConsent';

interface AnalyticsProps {
  gaMeasurementId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ gaMeasurementId }) => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Initial check
    setHasConsent(hasAnalyticsConsent());

    // Listen for consent changes
    const handleConsentChange = () => {
      setHasConsent(hasAnalyticsConsent());
    };

    window.addEventListener('cookie-consent-changed', handleConsentChange);
    // Also listen for storage events (cross-tab)
    window.addEventListener('storage', (e) => {
      if (e.key === 'cookie-consent-v1') {
        handleConsentChange();
      }
    });

    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, []);

  const vercelAnalyticsEnabled = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED === 'true';

  return (
    <>
      {/* Vercel Analytics - privacy-friendly, loads based on consent */}
      {vercelAnalyticsEnabled && hasConsent && (
        <>
          <VercelAnalytics />
          <SpeedInsights />
        </>
      )}

      {/* Google Analytics 4 - ONLY loads after explicit consent */}
      {hasConsent && gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_path: window.location.pathname,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default Analytics;
