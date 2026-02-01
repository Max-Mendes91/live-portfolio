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

        {/* Project Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 stagger-children">
          {content.projects.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll fade-in-up group relative h-full"
              style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2 md:mb-3">
                  {project.tags.map((tag) => (
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
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2 leading-tight min-h-[40px] md:min-h-[48px]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed min-h-[60px] md:min-h-[80px]">
                  {project.shortDescription}
                </p>

                {/* Metric */}
                <p className="text-text-muted text-[10px] md:text-xs font-medium tracking-wide mt-3 md:mt-4 min-h-[32px] md:min-h-[40px]">
                  {project.metric}
                </p>

                {/* CTA Link - Internal navigation */}
                {project.href !== '#' && (
                  <Link
                    href={project.href}
                    className={cn(
                      'inline-flex items-center gap-1.5',
                      'text-xs md:text-sm font-medium text-text-secondary',
                      'hover:text-text-primary transition-colors duration-200',
                      'group/link mt-auto pt-3 md:pt-4'
                    )}
                  >
                    <span>{project.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
