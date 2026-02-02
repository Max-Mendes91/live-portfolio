'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownCircle, ArrowUpRight } from 'lucide-react';
import { WorkGridDict } from '@/types/i18n';
import { cn } from '@/lib/utils';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

interface WorkGridProps {
  dictionary?: WorkGridDict;
}

const WorkGrid: React.FC<WorkGridProps> = ({ dictionary }) => {
  const containerRef = useScrollAnimationGroup();

  const content = {
    title: dictionary?.title ?? 'Recent Works',
    viewProject: dictionary?.viewProject ?? 'View Project',
    projects: dictionary?.projects ?? [],
  };

  if (content.projects.length === 0) {
    return null;
  }

  const featuredProject = content.projects[0];
  const gridProjects = content.projects.slice(1);

  return (
    <section id="works" className="py-16 md:py-24 px-4 md:px-12 bg-background overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="animate-on-scroll fade-in-up flex items-center gap-3 mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-medium tracking-tight text-text-primary">
            {content.title}
          </h2>
          <ArrowDownCircle className="w-4 h-4 md:w-5 md:h-5 text-text-muted" />
        </div>

        {/* Featured Project - Hero Treatment */}
        <article
          className="animate-on-scroll fade-in-up group relative mb-6 md:mb-8"
        >
          <div
            className={cn(
              'relative p-5 md:p-8 rounded-xl md:rounded-2xl',
              'bg-surface border border-border',
              'transition-all duration-300',
              'hover:border-border-hover hover:bg-surface-hover'
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Featured Image */}
              {featuredProject.image && (
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface order-1 lg:order-2">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              )}

              {/* Featured Content */}
              <div className="flex flex-col order-2 lg:order-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'inline-flex items-center h-5 md:h-6 px-2 md:px-3',
                        'text-[9px] md:text-[10px] font-medium uppercase tracking-wider',
                        'bg-white/5 border border-border rounded',
                        'text-text-muted'
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary mb-3 md:mb-4 leading-tight">
                  {featuredProject.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4 md:mb-5">
                  {featuredProject.description}
                </p>

                {/* Tech Stack */}
                {featuredProject.tech && (
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/5 text-[9px] md:text-[10px] text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metric */}
                <p className="text-text-muted text-xs md:text-sm font-medium tracking-wide mb-4 md:mb-6">
                  {featuredProject.metric}
                </p>

                {/* CTA */}
                {featuredProject.href !== '#' && (
                  <Link
                    href={featuredProject.href}
                    className={cn(
                      'inline-flex items-center gap-1.5',
                      'text-sm font-medium text-text-secondary',
                      'hover:text-text-primary transition-colors duration-200',
                      'group/link'
                    )}
                  >
                    <span>{featuredProject.cta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Supporting Projects Grid */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5 stagger-children">
            {gridProjects.map((project, index) => (
              <article
                key={project.id}
                className="animate-on-scroll fade-in-up group relative h-full"
                style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
              >
                <div
                  className={cn(
                    'relative h-full p-4 md:p-5 rounded-xl',
                    'bg-surface border border-border',
                    'transition-all duration-300',
                    'hover:border-border-hover hover:bg-surface-hover',
                    'flex flex-col'
                  )}
                >
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative aspect-[16/10] mb-3 md:mb-4 rounded-lg overflow-hidden bg-surface">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2 md:mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          'inline-flex items-center h-5 px-2',
                          'text-[9px] font-medium uppercase tracking-wider',
                          'bg-white/5 border border-border rounded',
                          'text-text-muted'
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold text-text-primary mb-2 leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* View Project Link */}
                  {project.href && project.href !== '#' && (
                    <Link
                      href={project.href}
                      className={cn(
                        'inline-flex items-center gap-1.5',
                        'text-xs font-medium text-text-secondary',
                        'hover:text-text-primary transition-colors duration-200',
                        'group/link mt-auto pt-3'
                      )}
                    >
                      <span>{project.cta || content.viewProject}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;
