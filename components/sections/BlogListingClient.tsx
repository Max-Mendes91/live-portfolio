'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { BinderClip } from '@/components/ui';
import { SupportedLocale, BlogPostMeta } from '@/types/i18n';
import { Dictionary } from '@/types/i18n';
import { useIsDesktop, usePrefersReducedMotion, useIsMobile } from '@/hooks/useMediaQuery';

interface BlogListingClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
  posts: BlogPostMeta[];
}

const BlogListingClient: React.FC<BlogListingClientProps> = ({
  locale,
  dictionary,
  posts,
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
      {/* Floating Achievement Icons */}
      <FloatingTechIcons preset="projects" />

      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-4 overflow-hidden">
            <motion.div
              initial={{ opacity: skipHeavyAnimations ? 1 : 0, y: skipHeavyAnimations ? 0 : 200, scale: skipHeavyAnimations ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: skipHeavyAnimations ? 0.15 : 1.6,
                ease: [0.22, 1, 0.36, 1],
                ...(!skipHeavyAnimations ? { y: { type: 'spring', damping: 25, stiffness: 80, mass: 1.2 } } : {}),
              }}
              style={skipHeavyAnimations ? undefined : { willChange: 'transform, opacity' }}
              className="relative max-w-4xl mx-auto"
            >
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] bg-background relative z-10 overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12">
                {/* Mesh Gradient Background */}
                <div className="mesh-gradient-bg" />

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="mb-5 sm:mb-6 md:mb-8">
                    <PulseBadge text={ui.badge} />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-text-primary mb-3 sm:mb-4 md:mb-6">
                    {ui.title}
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary font-light leading-relaxed max-w-2xl">
                    {ui.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Blog Posts Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="relative max-w-[90rem] mx-auto">
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                  {posts.length === 0 ? (
                    <p className="text-center text-text-muted text-sm sm:text-base">
                      {ui.noPosts}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-6 sm:gap-8">
                      {posts.map((post, index) => (
                        <motion.article
                          key={post.slug}
                          initial={{ opacity: 0, y: shouldUseViewportTrigger ? 30 : 0 }}
                          animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                          whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                          viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                          transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? index * 0.1 : 0 }}
                          style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                          className="group"
                        >
                          <Link href={`${blogBasePath}/${post.slug}`}>
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-surface border border-border hover:border-white/20 transition-all p-5 sm:p-6 md:p-8">
                              <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-5 md:gap-8 items-start">
                                {/* Content */}
                                <div className="flex flex-col">
                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                                    {post.tags.slice(0, 4).map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-border text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>

                                  {/* Title */}
                                  <h2 className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight text-text-primary mb-2 sm:mb-3 group-hover:text-white transition-colors leading-tight">
                                    {post.h1}
                                  </h2>

                                  {/* Excerpt */}
                                  <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                                    {post.excerpt}
                                  </p>

                                  {/* Meta info */}
                                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-text-muted text-[10px] sm:text-xs">
                                    <span className="flex items-center gap-1 sm:gap-1.5">
                                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                      {formatDate(post.datePublished)}
                                    </span>
                                    <span className="flex items-center gap-1 sm:gap-1.5">
                                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                      {post.readingTime}
                                    </span>
                                  </div>
                                </div>

                                {/* Image (if available) */}
                                {post.image && (
                                  <div className="relative aspect-[16/10] md:aspect-[3/2] md:w-48 lg:w-56 rounded-lg overflow-hidden bg-surface flex-shrink-0 order-first md:order-last">
                                    <Image
                                      src={post.image}
                                      alt={post.h1}
                                      fill
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 192px, 224px"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Read More */}
                              <div className="mt-4 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                                {ui.readMore}
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        </motion.article>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
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

export default BlogListingClient;
