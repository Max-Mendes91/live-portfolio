'use client';

import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Script from 'next/script';
import { hasAnalyticsConsent } from './CookieConsent';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface AnalyticsProps {
  gaMeasurementId?: string;
}

// Inner component that uses useSearchParams (requires Suspense)
const GoogleAnalyticsTracker: React.FC<{ gaMeasurementId: string }> = ({ gaMeasurementId }) => {
  const [hasConsent, setHasConsent] = useState(false);
  const [gtagLoaded, setGtagLoaded] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setHasConsent(hasAnalyticsConsent());

    const handleConsentChange = () => {
      setHasConsent(hasAnalyticsConsent());
    };

    window.addEventListener('cookie-consent-changed', handleConsentChange);
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent-v1') {
        handleConsentChange();
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const handleGtagLoad = useCallback(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaMeasurementId, {
      page_path: window.location.pathname,
    });
    setGtagLoaded(true);
  }, [gaMeasurementId]);

  // Track route changes for SPA navigation
  useEffect(() => {
    if (!gtagLoaded || !hasConsent) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams, gtagLoaded, hasConsent]);

  if (!hasConsent) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      strategy="afterInteractive"
      onLoad={handleGtagLoad}
    />
  );
};

const Analytics: React.FC<AnalyticsProps> = ({ gaMeasurementId }) => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setHasConsent(hasAnalyticsConsent());

    const handleConsentChange = () => {
      setHasConsent(hasAnalyticsConsent());
    };

    window.addEventListener('cookie-consent-changed', handleConsentChange);
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent-v1') {
        handleConsentChange();
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
      window.removeEventListener('storage', handleStorage);
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

      {/* Google Analytics 4 - wrapped in Suspense for useSearchParams */}
      {gaMeasurementId && (
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker gaMeasurementId={gaMeasurementId} />
        </Suspense>
      )}
    </>
  );
};

export default Analytics;
