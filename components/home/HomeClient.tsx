'use client';

import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const skipIntroRef = useRef(skipIntro);
  const [introComplete, setIntroComplete] = useState(skipIntro);
  const [showHero, setShowHero] = useState(skipIntro);
  const isSafari = useIsSafari();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.95]);

  // useLayoutEffect runs before browser paint — prevents flash of
  // the intro overlay on revisits (sessionStorage skip path)
  useLayoutEffect(() => {
    // Reset scroll — Safari restores scroll position on back-navigation
    window.scrollTo(0, 0);

    // Server detected bot/Lighthouse — intro already skipped via initial state
    if (skipIntroRef.current) return;

    // Local detection for synchronous timer setup (hook value isn't ready yet)
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    let hasSeenIntro = false;
    try {
      hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';
    } catch { /* sessionStorage unavailable */ }

    if (hasSeenIntro) {
      skipIntroRef.current = true;
      setIntroComplete(true);
      setShowHero(true);
      return;
    }

    // Safari: tighter timing (lighter fade animation)
    // Others: original timing (heavier slide-down animation)
    const introDelay = safari ? 1200 : 1500;
    // Show hero BEFORE overlay starts exiting so content is ready behind it
    const heroDelay = safari ? 1100 : 1400;

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
      <HomePageJsonLd locale={locale} />
      <Navbar locale={locale} dictionary={dictionary.nav} />

      {/* Intro Overlay — Safari: opacity fade / Others: slide-down reveal */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={isSafari ? { opacity: 0 } : { y: '100vh' }}
            transition={{
              duration: skipIntroRef.current ? 0 : (isSafari ? 0.6 : 1),
              ease: isSafari ? 'easeOut' : [0.16, 1, 0.3, 1],
            }}
            style={isSafari ? undefined : { willChange: 'transform, opacity' }}
            className="intro-overlay fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={isSafari ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              animate={isSafari ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: isSafari ? 0.6 : 0.8, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <AboutMe dictionary={dictionary.about} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Stack — visibility hides until intro finishes,
           Hero handles its own entrance animation via isReady */}
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className={`relative z-10 bg-background shadow-[0_50px_100px_rgba(0,0,0,0.5)]${!showHero ? ' invisible' : ''}`}
      >
        <Hero dictionary={dictionary.hero} isReady={showHero} locale={locale} />
        <AboutMe dictionary={dictionary.about} />
        <WorkGrid dictionary={dictionary.workGrid} />
        <ServiceSection dictionary={dictionary.services} />
        <ProcessSection dictionary={dictionary.process} />
        <FAQTeaserSection dictionary={dictionary.faqTeaser} />
        <div className="h-[20vh]" />
      </motion.div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen w-full" style={{ visibility: showHero ? 'visible' : 'hidden' }}>
        <FooterSection locale={locale} dictionary={dictionary.footer} />
      </div>
    </div>
  );
}
