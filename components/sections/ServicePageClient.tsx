'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import SmokeEffect from '@/components/effects/SmokeEffect';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { Display, Heading, Text, BinderClip } from '@/components/ui';
import { Dictionary, SupportedLocale, ServiceLink } from '@/types/i18n';
import type { PresetName } from '@/components/effects/FloatingTechIcons/types';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

const SERVICE_ICON_PRESETS: Record<string, PresetName> = {
  'web-development': 'web-development',
  'saas-web-apps': 'saas',
  'ecommerce-development': 'ecommerce',
  'seo-performance-optimization': 'seo',
  'ai-integration': 'ai-integration',
};

interface ServicePageClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
  serviceData: ServiceLink;
}

const ServicePageClient: React.FC<ServicePageClientProps> = ({ locale, dictionary, serviceData }) => {
  const { nav, footer } = dictionary;
  const content = serviceData.content;
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseViewportTrigger = isDesktop && !prefersReducedMotion;

  if (!content) return null;

  const contactHref = locale === 'en' ? '/en/contact' : '/pl/kontakt';
  const iconPreset = SERVICE_ICON_PRESETS[serviceData.id] || 'web-development';

  return (
    <div className="relative">
      {/* Floating Tech Icons - Fixed position, appears above all content */}
      <FloatingTechIcons preset={iconPreset} />

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
                ...(!prefersReducedMotion ? { y: { type: 'spring', damping: 25, stiffness: 80, mass: 1.2 } } : {}),
              }}
              style={{ willChange: 'transform, opacity' }}
              className="relative max-w-4xl mx-auto border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
            >
              {/* Smoke Effect Background */}
              <SmokeEffect intensity={0.5} />

              <div className="relative z-10 text-center flex flex-col items-center">
                <Display size="md" as="h1" className="mb-5 sm:mb-6 md:mb-8">
                  {serviceData.seo.h1}
                </Display>

                <Text size="xl" color="secondary" className="max-w-2xl leading-relaxed">
                  {content.subtitle}
                </Text>
              </div>
            </motion.div>
          </section>

          {/* Content Sections - All in one continuous block */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-20">
            <div className="relative max-w-[90rem] mx-auto">
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16 md:space-y-20">
                  {content.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <motion.div
                        initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                        animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                        whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                        viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                        transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2 }}
                        style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                      >
                        <Heading size="lg" as="h2" className="mb-6 sm:mb-8 md:mb-10">
                          {section.title}
                        </Heading>
                      </motion.div>

                      <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {section.paragraphs.map((paragraph, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                            animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                            whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                            viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                            transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? index * 0.1 : 0 }}
                            style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                          >
                            <Text size="lg" color="secondary" className="leading-relaxed">
                              {paragraph}
                            </Text>
                          </motion.div>
                        ))}

                        {/* Internal Links */}
                        {section.links && section.links.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                            animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                            whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                            viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                            transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? section.paragraphs.length * 0.1 : 0 }}
                            style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                            className="pt-2 sm:pt-3"
                          >
                            {section.links.map((link, linkIndex) => (
                              <Link
                                key={linkIndex}
                                href={link.href}
                                className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors group"
                              >
                                <span className="underline decoration-border underline-offset-4 group-hover:decoration-text-secondary transition-colors">
                                  {link.text}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Stack Section */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-20">
            <div className="relative max-w-4xl mx-auto">
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-10 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                  animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                  whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                  viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                  transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2 }}
                  style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                >
                  <Heading size="lg" as="h2" className="mb-6 sm:mb-8 md:mb-10">
                    {content.techStackTitle}
                  </Heading>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                  {content.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                      animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                      whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                      viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                      transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? index * 0.1 : 0 }}
                      style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                    >
                      <Text size="sm" color="muted" className="uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3">
                        {tech.title}
                      </Text>
                      <Text color="secondary" className="leading-relaxed text-sm sm:text-base">
                        {tech.description}
                      </Text>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-20">
            <div className="relative max-w-4xl mx-auto">
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-10 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12">
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
                    {content.cta.title}
                  </Display>
                  <Text color="secondary" className="mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
                    {content.cta.subtitle}
                  </Text>

                  <CornerGlowButton href={contactHref}>
                    {content.cta.button}
                  </CornerGlowButton>
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
        <FooterSection locale={locale} dictionary={footer} hideCTA />
      </div>
    </div>
  );
};

export default ServicePageClient;
