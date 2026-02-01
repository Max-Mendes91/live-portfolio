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
  // Don't show intro overlay until we've checked sessionStorage (prevents flash on returning visit)
  const [shouldShowIntro, setShouldShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(skipIntro);
  const [showHero, setShowHero] = useState(skipIntro);
  const [isMobileIntro, setIsMobileIntro] = useState(false);
  const isSafari = useIsSafari();

  // useLayoutEffect runs before browser paint — prevents flash of navbar
  useLayoutEffect(() => {
    // Reset scroll — Safari restores scroll position on back-navigation
    window.scrollTo(0, 0);

    // Server detected bot/Lighthouse — intro already skipped via initial state
    if (skipIntroRef.current) {
      setShowHero(true);
      return;
    }

    // Local detection for synchronous timer setup (hook value isn't ready yet)
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const mobile = window.innerWidth < 640;

    let hasSeenIntro = false;
    try {
      hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';
    } catch { /* sessionStorage unavailable */ }

    if (hasSeenIntro) {
      // Returning visitor - skip intro entirely, no flash
      skipIntroRef.current = true;
      setIntroComplete(true);
      setShowHero(true);
      return;
    }

    // First-time visitor - show intro animation
    setShouldShowIntro(true);
    setIsMobileIntro(mobile);

    // Mobile: fast logo splash (~800ms)
    // Safari desktop: tighter timing (lighter fade animation)
    // Others: original timing (heavier slide-down animation)
    const introDelay = mobile ? 800 : (safari ? 1200 : 1500);
    // Show hero BEFORE overlay starts exiting so content is ready behind it
    const heroDelay = mobile ? 700 : (safari ? 1100 : 1400);

    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, introDelay);

    const heroTimer = setTimeout(() => {
      setShowHero(true);
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
      <Navbar locale={locale} dictionary={dictionary.nav} />

      {/* Intro Overlay — only rendered for first-time visitors after sessionStorage check
          This prevents flash on returning visits or locale switch */}
      <AnimatePresence>
        {shouldShowIntro && !introComplete && (
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
              /* Mobile: Simple logo splash */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col items-center gap-4"
              >
                <Image
                  src="/navbar-logo.webp"
                  alt="Max Mendes"
                  width={200}
                  height={40}
                  priority
                  className="opacity-90"
                />
              </motion.div>
            ) : (
              /* Desktop: Full AboutMe component */
              <motion.div
                initial={isSafari ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                animate={isSafari ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: isSafari ? 0.6 : 0.8, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <AboutMe dictionary={dictionary.about} />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Stack — visibility hides until intro finishes,
           Hero handles its own entrance animation via isReady */}
      <div
        className={`relative z-10 bg-background shadow-[0_50px_100px_rgba(0,0,0,0.5)]${!showHero ? ' invisible' : ''}`}
      >
        <Hero dictionary={dictionary.hero} isReady={showHero} locale={locale} />
        <AboutMe dictionary={dictionary.about} />
        <WorkGrid dictionary={dictionary.workGrid} />
        <ServiceSection dictionary={dictionary.services} />
        <ProcessSection dictionary={dictionary.process} />
        <FAQTeaserSection dictionary={dictionary.faqTeaser} />
        {/* Spacer for footer reveal - creates scroll space so footer can be fully revealed */}
        <div className="h-[20vh]" />
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen w-full" style={{ visibility: showHero ? 'visible' : 'hidden' }}>
        <FooterSection locale={locale} dictionary={dictionary.footer} useHeroGradient />
      </div>
    </div>
  );
}
