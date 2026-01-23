'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/types/i18n';

interface ProjectsClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

const ProjectsClient: React.FC<ProjectsClientProps> = ({ dictionary }) => {
  const projectsPage = dictionary.projectsPage;
  const workGrid = dictionary.workGrid;

  if (!projectsPage || !workGrid) return null;

  const projects = workGrid.projects;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <PulseBadge text={projectsPage.badge} />
            </div>

            <h1 className="text-5xl md:text-7xl font-normal tracking-tighter text-text-primary mb-8">
              {projectsPage.title}
            </h1>

            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
              {projectsPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
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
                <div className="relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-border-subtle transition-all p-6">
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
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-text-primary mb-6">
              {projectsPage.cta.title}
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto font-light">
              {projectsPage.cta.description}
            </p>
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
    </main>
  );
};

export default ProjectsClient;
