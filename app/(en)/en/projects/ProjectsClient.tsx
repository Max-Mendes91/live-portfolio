'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { Display, Text } from '@/components/ui';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/types/i18n';

interface ProjectsClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

// Shared section container style (matching about/services pages)
const sectionContainerStyle =
  'max-w-[90rem] mx-auto border-t border-border rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]';

const ProjectsClient: React.FC<ProjectsClientProps> = ({
  locale,
  dictionary,
}) => {
  const { projectsPage, workGrid, nav, footer } = dictionary;

  if (!projectsPage || !workGrid) return null;

  const projects = workGrid.projects;

  return (
    <div className="relative">
      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-48 pb-4 overflow-hidden">
            <motion.div
              initial={{ y: 200, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                y: {
                  type: 'spring',
                  damping: 25,
                  stiffness: 80,
                  mass: 1.2,
                },
              }}
              className="max-w-4xl mx-auto border-t border-white/10 rounded-t-[2rem] pt-20 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-12"
            >
              <div className="text-center flex flex-col items-center">
                <div className="mb-8">
                  <PulseBadge text={projectsPage.badge} />
                </div>

                <Display size="md" as="h1" className="mb-6">
                  {projectsPage.title}
                </Display>

                <Text
                  size="lg"
                  color="secondary"
                  className="max-w-2xl leading-relaxed"
                >
                  {projectsPage.subtitle}
                </Text>
              </div>
            </motion.div>
          </section>

          {/* Projects Grid Section */}
          <section className="py-12 lg:py-20">
            <div className={sectionContainerStyle + ' pt-16 lg:pt-24 pb-16 lg:pb-24'}>
              <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-white/20 transition-all p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-white/5 border border-border text-[10px] text-text-muted uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-2xl font-normal tracking-tight text-text-primary mb-3">
                          {project.title}
                        </h3>

                        <p className="text-text-secondary text-sm font-light leading-relaxed mb-4">
                          {project.description}
                        </p>

                        <p className="text-text-muted text-xs mb-6">
                          {project.metric}
                        </p>

                        {project.tech && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-text-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {project.externalUrl && (
                          <a
                            href={project.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                          >
                            {project.externalCta || 'Visit Live Site'}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 lg:py-20">
            <div className="max-w-4xl mx-auto border-t border-white/10 rounded-t-[2rem] pt-16 px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Display size="sm" as="h2" className="mb-6">
                  {projectsPage.cta.title}
                </Display>
                <Text
                  color="secondary"
                  className="mb-10 max-w-xl mx-auto font-light"
                >
                  {projectsPage.cta.description}
                </Text>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <CornerGlowButton href="/en/contact">
                    {projectsPage.cta.primaryButton}
                  </CornerGlowButton>
                  <CornerGlowButton href="/en/services">
                    {projectsPage.cta.secondaryButton}
                  </CornerGlowButton>
                </div>
              </motion.div>
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

export default ProjectsClient;
