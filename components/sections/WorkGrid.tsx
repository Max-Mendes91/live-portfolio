'use client';

import React from 'react';
import Link from 'next/link';
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
    <section id="works" className="py-24 px-6 md:px-12 bg-background overflow-hidden">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-on-scroll fade-in-up flex items-center gap-3 mb-12">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            {content.title}
          </h2>
          <ArrowDownCircle className="w-5 h-5 text-text-muted" />
        </div>

        {/* Project Cards Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {content.projects.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll fade-in-up group relative"
              style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
            >
              <div
                className={cn(
                  'relative h-full p-6 md:p-8 rounded-2xl',
                  'bg-surface border border-border',
                  'transition-all duration-300',
                  'hover:border-border-hover hover:bg-surface-hover',
                  'flex flex-col'
                )}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'inline-flex items-center h-6 px-2.5',
                        'text-[10px] font-medium uppercase tracking-wider',
                        'bg-white/5 border border-border rounded-md',
                        'text-text-muted'
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description - flex-1 to take available space */}
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Metric */}
                <div className="mb-6">
                  <p className="text-text-muted text-xs md:text-sm font-medium tracking-wide">
                    {project.metric}
                  </p>
                </div>

                {/* CTA Link - Internal navigation */}
                {project.href !== '#' && (
                  <Link
                    href={project.href}
                    className={cn(
                      'inline-flex items-center gap-2',
                      'text-sm font-medium text-text-secondary',
                      'hover:text-text-primary transition-colors duration-200',
                      'group/link'
                    )}
                  >
                    <span>{project.cta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
