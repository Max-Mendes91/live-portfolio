'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { BinderClip } from '@/components/ui';
import { SupportedLocale, BlogPostMeta } from '@/types/i18n';
import { Dictionary } from '@/types/i18n';
import { useIsDesktop, usePrefersReducedMotion, useIsMobile } from '@/hooks/useMediaQuery';

interface BlogPostLayoutProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
  meta: BlogPostMeta;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  locale,
  dictionary,
  meta,
  children,
}) => {
  const { blogPage, nav, footer } = dictionary;
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseViewportTrigger = isDesktop && !prefersReducedMotion;
  const skipHeavyAnimations = isMobile || prefersReducedMotion;

  if (!blogPage) return null;

  const { ui } = blogPage;
  const isPolish = locale === 'pl';
  const blogBasePath = isPolish ? '/pl/artykuly' : '/en/blog';
  const contactPath = isPolish ? '/pl/kontakt' : '/en/contact';
  const servicesPath = isPolish ? '/pl/uslugi' : '/en/services';

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isPolish ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="relative">
      {/* Floating icons - fixed position, z-[15] */}
      <FloatingTechIcons preset="blog-article" />

      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} alternateHref={meta.hrefLang[locale === 'en' ? 'pl' : 'en']} />
        <main className="min-h-screen bg-background">
          {/* Article Section */}
          <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-4 overflow-hidden">
            <motion.div
              initial={{ opacity: skipHeavyAnimations ? 1 : 0, y: skipHeavyAnimations ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: skipHeavyAnimations ? 0.15 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={skipHeavyAnimations ? undefined : { willChange: 'transform, opacity' }}
              className="relative max-w-4xl mx-auto"
            >
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12">
                {/* Mesh Gradient Background - static on mobile for scroll performance */}
                <div className={skipHeavyAnimations ? 'mesh-gradient-bg-static' : 'mesh-gradient-bg'} />

                <div className="relative z-10 max-w-prose mx-auto">
                  {/* Back to Blog */}
                  <Link
                    href={blogBasePath}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors mb-6 sm:mb-8"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {ui.backToBlog}
                  </Link>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-border text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-text-muted text-[10px] sm:text-xs mb-6 sm:mb-8">
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {ui.publishedOn} {formatDate(meta.datePublished)}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {meta.readingTime}
                    </span>
                  </div>

                  {/* Hero Image */}
                  {meta.image && (
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface mb-8 sm:mb-10 border border-border">
                      <Image
                        src={meta.image}
                        alt={meta.h1}
                        fill
                        sizes="(max-width: 768px) 100vw, 720px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}

                  {/* MDX Content */}
                  <article className="prose-blog">
                    {children}
                  </article>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="relative max-w-4xl mx-auto">
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: shouldUseViewportTrigger ? 20 : 0 }}
                  animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                  whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                  viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                  transition={{ duration: shouldUseViewportTrigger ? 0.8 : 0.2 }}
                  style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                  className="text-center"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter text-text-primary mb-4 sm:mb-5 md:mb-6">
                    {ui.cta.title}
                  </h2>
                  <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto font-light">
                    {ui.cta.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <CornerGlowButton href={contactPath}>
                      {ui.cta.primaryButton}
                    </CornerGlowButton>
                    <CornerGlowButton href={servicesPath}>
                      {ui.cta.secondaryButton}
                    </CornerGlowButton>
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
      <div className="sticky bottom-0 z-0 h-screen-safe w-full">
        <FooterSection locale={locale} dictionary={footer} hideCTA />
      </div>
    </div>
  );
};

export default BlogPostLayout;
