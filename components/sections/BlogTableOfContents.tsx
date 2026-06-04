'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BlogHeading } from '@/lib/blog';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface BlogTableOfContentsProps {
  headings: BlogHeading[];
  label: string;
}

/**
 * Inline "On this page" index. Sits at the top of the article column, so it
 * never clips against the card's overflow. Open on desktop, collapsed on
 * mobile where a long list would just push the article down.
 */
const BlogTableOfContents: React.FC<BlogTableOfContentsProps> = ({
  headings,
  label,
}) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true);

  // Collapse on mobile after mount (keeps SSR markup stable, avoids a flash).
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label={label}
      className="not-prose mb-8 sm:mb-10 rounded-xl border border-border bg-[#0A0A0A]/60"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-3.5 text-left"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ol className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2 list-none">
            {headings.map(({ id, text }, i) => (
              <li key={id} className="flex gap-2.5 leading-snug">
                <span className="text-text-muted text-xs tabular-nums pt-0.5 w-4 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <a
                  href={`#${id}`}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default BlogTableOfContents;
