'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollServices, { ScrollServiceItem } from '@/components/sections/ScrollServices';
import { Button, BinderClip } from '@/components/ui';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import SmokeEffect from '@/components/effects/SmokeEffect';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/types/i18n';

interface ServicesClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

const ServicesClient: React.FC<ServicesClientProps> = ({ locale, dictionary }) => {
  const { nav, servicesPage, common } = dictionary;

  // Transform dictionary services to ScrollServiceItem format
  const services: ScrollServiceItem[] = servicesPage?.services || [];

  return (
    <div className="relative">
      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="min-h-screen bg-background">

      {/* Hero section */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            y: {
              type: "spring",
              damping: 25,
              stiffness: 80,
              mass: 1.2,
            },
          }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Binder Clips */}
          <BinderClip position="top-left" size="md" />
          <BinderClip position="top-right" size="md" />

          <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12">
            {/* Smoke Effect Background */}
            <SmokeEffect intensity={0.5} />

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border-l border-t border-b border-border-hover border-r-transparent bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-sm mb-5 sm:mb-6 md:mb-8 w-fit">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase opacity-80">
                  {servicesPage?.hero.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-text-primary mb-3 sm:mb-4">
                {servicesPage?.hero.title}
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-text-secondary mb-5 sm:mb-6 md:mb-8">
                {servicesPage?.hero.subtitle}
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted font-light leading-relaxed max-w-3xl">
                {servicesPage?.hero.description}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scroll reveal services section */}
      <ScrollServices services={services} learnMoreText={common?.learnMore} />

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32">
        <div className="relative max-w-4xl mx-auto">
          {/* Binder Clips */}
          <BinderClip position="top-left" size="md" />
          <BinderClip position="top-right" size="md" />

          <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter text-text-primary mb-4 sm:mb-5 md:mb-6">
                {servicesPage?.cta.title}
              </h2>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto font-light">
                {servicesPage?.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button href="/en/contact" variant="corner-glow">
                  {servicesPage?.cta.primaryButton}
                </Button>
                <Button href="/en/projects" variant="corner-glow">
                  {servicesPage?.cta.secondaryButton}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        {/* Spacer for footer reveal */}
        <div className="h-[20vh]" />
      </main>
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen w-full">
        <FooterSection locale={locale} dictionary={dictionary.footer} hideCTA />
      </div>
    </div>
  );
};

export default ServicesClient;
