'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import SmokeEffect from '@/components/effects/SmokeEffect';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { Display, Heading, Text, BinderClip } from '@/components/ui';
import { Dictionary, SupportedLocale } from '@/types/i18n';
import { SITE_CONFIG } from '@/lib/seo/config';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface AboutClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

// Internal link mapping for bio text - English URLs
const linkPatterns: Record<string, string> = {
  'business websites': '/en/services/web-development',
  'e-commerce stores': '/en/services/ecommerce-development',
  'web applications': '/en/services/saas-web-apps',
  'SEO optimization': '/en/services/seo-performance-optimization',
  FlowMate: '/en/projects',
  React: 'https://react.dev',
  'Next.js': 'https://nextjs.org',
};

function linkifyBio(text: string): React.ReactNode {
  let result: React.ReactNode[] = [text];

  Object.entries(linkPatterns).forEach(([phrase, url]) => {
    result = result.flatMap((part, index) => {
      if (typeof part !== 'string') return part;

      const regex = new RegExp(`(${phrase})`, 'gi');
      const parts = part.split(regex);

      return parts.map((segment, i) => {
        if (segment.toLowerCase() === phrase.toLowerCase()) {
          const isExternal = url.startsWith('http');
          if (isExternal) {
            return (
              <a
                key={`${index}-${i}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-secondary transition-colors"
              >
                {segment}
              </a>
            );
          }
          return (
            <Link
              key={`${index}-${i}`}
              href={url}
              className="text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-secondary transition-colors"
            >
              {segment}
            </Link>
          );
        }
        return segment;
      });
    });
  });

  return result;
}

const AboutClient: React.FC<AboutClientProps> = ({ locale, dictionary }) => {
  const { aboutPage, nav, footer } = dictionary;
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseViewportTrigger = isDesktop && !prefersReducedMotion;

  if (!aboutPage) return null;

  return (
    <div className="relative">
      {/* Floating Tech Icons - Fixed position, appears above all content */}
      <FloatingTechIcons preset="about" />

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
          className="relative max-w-4xl mx-auto border-t border-white/10 rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
        >
          {/* Smoke Effect Background */}
          <SmokeEffect intensity={0.5} />

          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="mb-5 sm:mb-6 md:mb-8">
              <PulseBadge text={aboutPage.location} />
            </div>

            <Display size="md" as="h1" className="mb-5 sm:mb-6 md:mb-8">
              {aboutPage.heading}
            </Display>
          </div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-20">
        <div className="relative max-w-[90rem] mx-auto">
          {/* Binder Clips */}
          <BinderClip position="top-left" size="md" />
          <BinderClip position="top-right" size="md" />

          <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {aboutPage.bio.map((paragraph, index) => (
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
                      {linkifyBio(paragraph)}
                    </Text>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
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
                {aboutPage.skills.title}
              </Heading>
            </motion.div>

            {/* Categorized Skills */}
            <motion.div
              initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
              animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
              whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldUseViewportTrigger ? { once: true } : undefined}
              transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? 0.1 : 0 }}
              style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8"
            >
              {aboutPage.skills.categories?.map((category, index) => (
                <div key={index}>
                  <Text size="sm" color="muted" className="uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3">
                    {category.name}
                  </Text>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-surface/50 border border-border-subtle text-[10px] sm:text-xs font-medium text-text-secondary hover:bg-surface-hover transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-20">
        <div className="relative max-w-[90rem] mx-auto">
          {/* Binder Clips */}
          <BinderClip position="top-left" size="md" />
          <BinderClip position="top-right" size="md" />

          <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
              animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
              whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldUseViewportTrigger ? { once: true } : undefined}
              transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2 }}
              style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
            >
              <Heading size="lg" as="h2" className="mb-5 sm:mb-6 md:mb-8">
                {aboutPage.experience.title}
              </Heading>
            </motion.div>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {aboutPage.experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-5 sm:pl-6 md:pl-8 border-l border-border"
                >
                  <div className="absolute left-0 top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 -translate-x-[6px] sm:-translate-x-[7px] bg-surface-hover rounded-full" />
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <Heading size="sm" as="h3">{item.role}</Heading>
                    <span className="text-text-muted">·</span>
                    <Text color="secondary">{item.company}</Text>
                  </div>
                  <Text size="sm" color="muted" className="mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {item.period}
                  </Text>
                  <Text color="secondary" className="leading-relaxed text-sm sm:text-base">{item.description}</Text>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
              animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
              whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldUseViewportTrigger ? { once: true } : undefined}
              transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? 0.3 : 0 }}
              style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
              className="mt-5 sm:mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href={SITE_CONFIG.owner.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{aboutPage.social.github}</span>
              </a>
              <a
                href={SITE_CONFIG.owner.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{aboutPage.social.linkedin}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      </section>

      {/* Decision Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-20">
        <div className="relative max-w-4xl mx-auto">
          {/* Binder Clips */}
          <BinderClip position="top-left" size="md" />
          <BinderClip position="top-right" size="md" />

          <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-10 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Display size="sm" as="h2" className="mb-4 sm:mb-5 md:mb-6">
                {aboutPage.cta.title}
              </Display>
              <Text color="secondary" className="mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
                {aboutPage.cta.description}
              </Text>

              <CornerGlowButton href="/en/contact">{aboutPage.cta.button}</CornerGlowButton>
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

export default AboutClient;
