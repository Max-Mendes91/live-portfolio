'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import SmokeEffect from '@/components/effects/SmokeEffect';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { Display, Heading, Text, BinderClip } from '@/components/ui';
import { Dictionary, SupportedLocale, FAQCategoryDict } from '@/types/i18n';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface FAQClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

interface FAQItemProps {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, linkText, linkHref, isOpen, onClick }) => {
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={false}
      onClick={onClick}
      className={`overflow-hidden rounded-lg sm:rounded-xl border cursor-pointer transition-all duration-500 ${
        isOpen ? 'bg-[#0F0F0F] border-white/20' : 'bg-[#0A0A0A] border-white/5 hover:border-white/10'
      }`}
    >
      <div className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left focus:outline-none">
        <span className="text-sm sm:text-base md:text-lg font-normal tracking-tight text-white pr-3 sm:pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 300, damping: 20 }
          }
          className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border transition-colors flex-shrink-0 ${
            isOpen ? 'bg-transparent border-white text-white' : 'bg-transparent border-white/10 text-zinc-500'
          }`}
        >
          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : isDesktop
                  ? { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }
                  : { duration: 0.2, ease: 'linear' as const }
            }
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 font-light tracking-tight text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
              {answer}
              {linkText && linkHref && (
                <Link
                  href={linkHref}
                  onClick={(e) => e.stopPropagation()}
                  className="block mt-2 sm:mt-3 text-white hover:text-zinc-300 transition-colors underline underline-offset-4 text-xs sm:text-sm md:text-base"
                >
                  {linkText} →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQCategoryProps {
  category: FAQCategoryDict;
  categoryIndex: number;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category, categoryIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDesktopCat = useIsDesktop();
  const prefersReducedMotionCat = usePrefersReducedMotion();
  const shouldUseViewportTriggerCat = isDesktopCat && !prefersReducedMotionCat;

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldUseViewportTriggerCat ? 20 : 0 }}
      animate={shouldUseViewportTriggerCat ? undefined : { opacity: 1, y: 0 }}
      whileInView={shouldUseViewportTriggerCat ? { opacity: 1, y: 0 } : undefined}
      viewport={shouldUseViewportTriggerCat ? { once: true } : undefined}
      transition={{ duration: shouldUseViewportTriggerCat ? 0.6 : 0.2, delay: shouldUseViewportTriggerCat ? categoryIndex * 0.1 : 0 }}
      style={{ willChange: shouldUseViewportTriggerCat ? 'transform, opacity' : 'opacity' }}
    >
      <Heading size="md" as="h2" className="mb-4 sm:mb-5 md:mb-6">
        {category.title}
      </Heading>
      <div className="space-y-3 sm:space-y-4">
        {category.items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            linkText={item.linkText}
            linkHref={item.linkHref}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Shared section container style (matching about page)
const sectionContainerStyle = "border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]";

const FAQClient: React.FC<FAQClientProps> = ({ locale, dictionary }) => {
  const { faqPage, nav, footer } = dictionary;
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseViewportTrigger = isDesktop && !prefersReducedMotion;

  if (!faqPage) return null;

  return (
    <div className="relative">
      {/* Floating Help Icons - Fixed position, appears above all content */}
      <FloatingTechIcons preset="faq" />

      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="relative min-h-screen bg-background overflow-hidden">

          {/* Hero Section */}
          <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 200, scale: prefersReducedMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 1.6,
                ease: [0.22, 1, 0.36, 1],
                ...(!prefersReducedMotion ? { y: { type: "spring", damping: 25, stiffness: 80, mass: 1.2 } } : {}),
              }}
              style={{ willChange: 'transform, opacity' }}
              className="relative max-w-4xl mx-auto"
            >
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12">
                {/* Smoke Effect Background */}
                <SmokeEffect intensity={0.5} />

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="mb-5 sm:mb-6 md:mb-8">
                    <PulseBadge text="FAQ" />
                  </div>

                  <Display size="md" as="h1" className="mb-4 sm:mb-5 md:mb-6">
                    {faqPage.seo.h1}
                  </Display>

                  <Text size="lg" color="secondary" className="max-w-2xl">
                    {faqPage.intro}
                  </Text>
                </div>
              </div>
            </motion.div>
          </section>

          {/* FAQ Categories Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="relative max-w-[90rem] mx-auto">
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className={sectionContainerStyle + " pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24"}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="space-y-10 sm:space-y-12 md:space-y-16">
                    {faqPage.categories.map((category, index) => (
                      <FAQCategory
                        key={index}
                        category={category}
                        categoryIndex={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="relative max-w-4xl mx-auto">
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                  animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                  whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                  viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                  transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2 }}
                  style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                  className="text-center"
                >
                  <Display size="sm" as="h2" className="mb-4 sm:mb-5 md:mb-6">
                    {faqPage.cta.title}
                  </Display>
                  <Text color="secondary" className="mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
                    {faqPage.cta.description}
                  </Text>

                  <Link href={faqPage.cta.primaryButton.href}>
                    <CornerGlowButton>{faqPage.cta.primaryButton.label}</CornerGlowButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Spacer for footer reveal */}
          <div className="h-[20vh]" />
        </main>
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen-safe w-full">
        <FooterSection locale={locale} dictionary={footer} hideCTA />
      </div>
    </div>
  );
};

export default FAQClient;
