'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import WorkGrid from '@/components/sections/WorkGrid';
import ServiceSection from '@/components/sections/ServiceSection';
import FAQSection from '@/components/sections/FAQSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FooterSection from '@/components/sections/FooterSection';
import AboutMe from '@/components/sections/AboutMe';
import { HomePageJsonLd } from '@/components/seo/JsonLd';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/lib/i18n/config';

interface HomeClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

export default function HomeClient({ locale, dictionary }: HomeClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [introComplete, setIntroComplete] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.95]);

  useEffect(() => {
    // Phase 1 & 2 logic
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 1500);

    // Phase 3 logic
    const heroTimer = setTimeout(() => {
      setShowHero(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(heroTimer);
    };
  }, []);

  // Pass dictionary sections to components as they are refactored
  // Components without dictionary props still use hardcoded text (backward compatible)

  return (
    <div className="relative bg-black selection:bg-white/10">
      <HomePageJsonLd locale={locale} />
      <Navbar locale={locale} dictionary={dictionary.nav} />

      {/* Redline 4: The "Meily Entrance" Loader Overlay */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              y: '100vh',
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <AboutMe locale={locale} dictionary={dictionary.about} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Stack */}
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showHero ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 bg-[#050505] shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
      >
        <Hero locale={locale} dictionary={dictionary.hero} />
        <AboutMe locale={locale} dictionary={dictionary.about} />
        <WorkGrid />
        <ServiceSection dictionary={dictionary.services} />
        <ProcessSection />
        <FAQSection />
        <div className="h-[20vh]" />
      </motion.div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen w-full">
        <FooterSection locale={locale} dictionary={dictionary.footer} />
      </div>
    </div>
  );
}
