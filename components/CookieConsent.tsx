'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'cookie-consent-v1';

export interface CookieConsentDict {
  message: string;
  accept: string;
  reject: string;
}

interface CookieConsentProps {
  dictionary: CookieConsentDict;
}

// Export for use by Analytics component
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_KEY) === 'accepted';
}

export function getConsentStatus(): 'accepted' | 'rejected' | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ dictionary }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getConsentStatus();
    if (consent === null) {
      // Show banner after short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setShowBanner(false);
    // Dispatch event for Analytics component to pick up
    window.dispatchEvent(new CustomEvent('cookie-consent-changed'));
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setShowBanner(false);
  }, []);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50"
        >
          <div className="bg-surface border border-border rounded-xl p-4 shadow-lg backdrop-blur-md">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-white/5 rounded-lg flex-shrink-0">
                <Cookie className="w-4 h-4 text-text-muted" />
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {dictionary.message}
              </p>
            </div>

            {/* Buttons - Equal visibility per GDPR */}
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-lg hover:bg-white/5 transition-colors"
              >
                {dictionary.reject}
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
              >
                {dictionary.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
