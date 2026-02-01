'use client';

import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import WorkGrid from '@/components/sections/WorkGrid';
import ServiceSection from '@/components/sections/ServiceSection';
import FAQTeaserSection from '@/components/sections/FAQTeaserSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FooterSection from '@/components/sections/FooterSection';
import AboutMe from '@/components/sections/AboutMe';
import { HomePageJsonLd } from '@/components/seo/JsonLd';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/lib/i18n/config';
import { useIsSafari } from '@/hooks/useMediaQuery';

interface HomeClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
  skipIntro?: boolean;
}

export default function HomeClient({ locale, dictionary, skipIntro = false }: HomeClientProps) {
  const skipIntroRef = useRef(skipIntro);
  // Track if we've determined what to show (prevents content flash before decision)
  const [isReady, setIsReady] = useState(skipIntro);
  // Show intro for first-time visitors
  const [shouldShowIntro, setShouldShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(skipIntro);
  // Controls hero animations - true = start animations
  const [heroReady, setHeroReady] = useState(skipIntro);
  const [isMobileIntro, setIsMobileIntro] = useState(false);
  const isSafari = useIsSafari();

  // useLayoutEffect runs before browser paint — prevents flash
  useLayoutEffect(() => {
    // Reset scroll — Safari restores scroll position on back-navigation
    window.scrollTo(0, 0);

    // Server detected bot/Lighthouse — intro already skipped
    if (skipIntroRef.current) {
      setIsReady(true);
      setHeroReady(true);
      return;
    }

    // Local detection for synchronous timer setup
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const mobile = window.innerWidth < 1024; // Skip intro on mobile/tablet for performance

    let hasSeenIntro = false;
    try {
      hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';
    } catch { /* sessionStorage unavailable */ }

    // Skip intro on mobile for better LCP performance
    if (hasSeenIntro || mobile) {
      skipIntroRef.current = true;
      setIntroComplete(true);
      setHeroReady(true);
      setIsReady(true);
      if (!hasSeenIntro) {
        try { sessionStorage.setItem('hasSeenIntro', 'true'); } catch {}
      }
      return;
    }

    // Desktop first-time visitor - show intro animation
    setShouldShowIntro(true);
    setIsMobileIntro(false); // Only desktop gets intro now
    setIsReady(true);

    // Desktop timing
    const introDelay = safari ? 1200 : 1500;
    const heroDelay = safari ? 1100 : 1400;

    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, introDelay);

    const heroTimer = setTimeout(() => {
      setHeroReady(true);
      try { sessionStorage.setItem('hasSeenIntro', 'true'); } catch {}
    }, heroDelay);

    return () => {
      clearTimeout(timer);
      clearTimeout(heroTimer);
    };
  }, []);

  // Pass dictionary sections to components as they are refactored
  // Components without dictionary props still use hardcoded text (backward compatible)

  return (
    <div className="relative bg-background selection:bg-white/10" style={{ backfaceVisibility: 'hidden' }}>
      <HomePageJsonLd locale={locale} homePageData={dictionary.homePage} />

      {/* Black screen until we determine what to show (desktop only) */}
      {!isReady && (
        <div className="fixed inset-0 z-[100] bg-background lg:block hidden" />
      )}

      {/* Navbar - hidden during intro on desktop only */}
      <div className={introComplete ? '' : 'lg:invisible'}>
        <Navbar locale={locale} dictionary={dictionary.nav} />
      </div>

      {/* Intro Overlay — only rendered for first-time visitors */}
      <AnimatePresence>
        {isReady && shouldShowIntro && !introComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={isMobileIntro ? { opacity: 0 } : (isSafari ? { opacity: 0 } : { y: '100vh' })}
            transition={{
              duration: isMobileIntro ? 0.3 : (isSafari ? 0.6 : 1),
              ease: isMobileIntro ? 'easeOut' : (isSafari ? 'easeOut' : [0.16, 1, 0.3, 1]),
            }}
            style={isMobileIntro || isSafari ? undefined : { willChange: 'transform, opacity' }}
            className="intro-overlay fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
          >
            {isMobileIntro ? (
              /* Mobile: Logo visible immediately, then overlay fades out */
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/navbar-logo.webp"
                  alt="Max Mendes"
                  width={200}
                  height={40}
                  priority
                  className="opacity-90"
                />
              </div>
            ) : (
              /* Desktop: Full AboutMe component with intro animation */
              <div className="w-full h-full">
                <AboutMe dictionary={dictionary.about} isIntro />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Stack — hidden during intro on desktop only */}
      <div
        className={`relative z-10 bg-background shadow-[0_50px_100px_rgba(0,0,0,0.5)] ${
          (isReady && (introComplete || !shouldShowIntro)) ? '' : 'lg:invisible'
        }`}
      >
        <Hero dictionary={dictionary.hero} isReady={heroReady} locale={locale} />
        <AboutMe dictionary={dictionary.about} />
        <WorkGrid dictionary={dictionary.workGrid} />
        <ServiceSection dictionary={dictionary.services} />
        <ProcessSection dictionary={dictionary.process} />
        <FAQTeaserSection dictionary={dictionary.faqTeaser} />
        {/* Spacer for footer reveal - creates scroll space so footer can be fully revealed */}
        <div className="h-[20vh]" />
      </div>

      {/* Sticky Reveal Footer - hidden during intro on desktop only */}
      <div
        className={`sticky bottom-0 z-0 h-screen w-full ${
          (isReady && (introComplete || !shouldShowIntro)) ? '' : 'lg:invisible'
        }`}
      >
        <FooterSection locale={locale} dictionary={dictionary.footer} useHeroGradient />
      </div>
    </div>
  );
}
