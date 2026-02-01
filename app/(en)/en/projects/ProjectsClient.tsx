'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { BinderClip } from '@/components/ui';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/types/i18n';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface ProjectsClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

const ProjectsClient: React.FC<ProjectsClientProps> = ({
  locale,
  dictionary,
}) => {
  const { projectsPage, workGrid, nav, footer } = dictionary;
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseViewportTrigger = isDesktop && !prefersReducedMotion;

  if (!projectsPage || !workGrid) return null;

  const projects = workGrid.projects;

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
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 200, scale: prefersReducedMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 1.6,
                ease: [0.22, 1, 0.36, 1],
                ...(!prefersReducedMotion ? { y: { type: 'spring', damping: 25, stiffness: 80, mass: 1.2 } } : {}),
              }}
              style={{ willChange: 'transform, opacity' }}
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
                    <PulseBadge text={projectsPage.badge} />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-text-primary mb-3 sm:mb-4 md:mb-6">
                    {projectsPage.title}
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary font-light leading-relaxed max-w-2xl">
                    {projectsPage.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects Grid Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="relative max-w-[90rem] mx-auto">
              {/* Binder Clips */}
              <BinderClip position="top-left" size="md" />
              <BinderClip position="top-right" size="md" />

              <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: shouldUseViewportTrigger ? 30 : 0 }}
                        animate={shouldUseViewportTrigger ? undefined : { opacity: 1, y: 0 }}
                        whileInView={shouldUseViewportTrigger ? { opacity: 1, y: 0 } : undefined}
                        viewport={shouldUseViewportTrigger ? { once: true } : undefined}
                        transition={{ duration: shouldUseViewportTrigger ? 0.6 : 0.2, delay: shouldUseViewportTrigger ? index * 0.1 : 0 }}
                        style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                        className="group h-full"
                      >
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-surface border border-border hover:border-white/20 transition-all p-4 sm:p-5 md:p-6 h-full flex flex-col">
                          {/* Project Image */}
                          {project.image && (
                            <div className="relative aspect-[16/10] mb-4 sm:mb-5 rounded-lg overflow-hidden bg-surface">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          )}

                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-border text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-text-primary mb-2 sm:mb-3">
                            {project.title}
                          </h3>

                          <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed min-h-[72px] sm:min-h-[100px]">
                            {project.description}
                          </p>

                          <p className="text-text-muted text-[10px] sm:text-xs mt-3 sm:mt-4 min-h-[28px] sm:min-h-[32px]">
                            {project.metric}
                          </p>

                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 min-h-[44px] sm:min-h-[52px] content-start">
                            {project.tech?.map((tech) => (
                              <span
                                key={tech}
                                className="px-1.5 sm:px-2 py-0.5 rounded bg-white/5 text-[9px] sm:text-[10px] text-text-muted h-fit"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {project.externalUrl && (
                            <a
                              href={project.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors mt-auto pt-3 sm:pt-4"
                            >
                              {project.externalCta || 'Visit Live Site'}
                              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </a>
                          )}
                        </div>
                      </motion.div>
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
                  transition={{ duration: shouldUseViewportTrigger ? 0.8 : 0.2 }}
                  style={{ willChange: shouldUseViewportTrigger ? 'transform, opacity' : 'opacity' }}
                  className="text-center"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter text-text-primary mb-4 sm:mb-5 md:mb-6">
                    {projectsPage.cta.title}
                  </h2>
                  <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto font-light">
                    {projectsPage.cta.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <CornerGlowButton href="/en/contact">
                      {projectsPage.cta.primaryButton}
                    </CornerGlowButton>
                    <CornerGlowButton href="/en/services">
                      {projectsPage.cta.secondaryButton}
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

export default ProjectsClient;
