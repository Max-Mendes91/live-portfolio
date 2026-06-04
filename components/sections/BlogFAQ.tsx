'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { slugify } from '@/lib/slug';

interface BlogFAQProps {
  faqs: Array<{ question: string; answer: string }>;
  title: string;
}

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Render an answer string, turning [text](href) markdown links into real links. */
function renderAnswer(answer: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(answer)) !== null) {
    if (match.index > last) nodes.push(answer.slice(last, match.index));
    const [, text, href] = match;
    const linkClass =
      'text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors';
    if (href.startsWith('/')) {
      nodes.push(
        <Link
          key={`l${key++}`}
          href={href}
          onClick={(e) => e.stopPropagation()}
          className={linkClass}
        >
          {text}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={`l${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={linkClass}
        >
          {text}
        </a>
      );
    }
    last = match.index + match[0].length;
  }
  if (last < answer.length) nodes.push(answer.slice(last));
  return nodes;
}

interface BlogFAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Matches the portfolio FAQ accordion (CSS grid-rows trick, no reflow).
const BlogFAQItem: React.FC<BlogFAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      onClick={onClick}
      className={`rounded-lg sm:rounded-xl border cursor-pointer transition-colors duration-300 overflow-hidden ${
        isOpen ? 'bg-[#0F0F0F] border-white/20' : 'bg-[#0A0A0A] border-white/5 hover:border-white/10'
      }`}
    >
      <div className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left focus:outline-none">
        <span className="text-sm sm:text-base md:text-lg font-normal tracking-tight text-white pr-3 sm:pr-4">
          {question}
        </span>
        <div
          className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border transition-all flex-shrink-0 ${
            prefersReducedMotion ? '' : 'duration-300'
          } ${
            isOpen ? 'bg-transparent border-white text-white rotate-45' : 'bg-transparent border-white/10 text-zinc-500 rotate-0'
          }`}
        >
          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] ${
          prefersReducedMotion ? 'duration-0' : 'duration-300'
        } ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 font-light tracking-tight text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            {renderAnswer(answer)}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogFAQ: React.FC<BlogFAQProps> = ({ faqs, title }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id={slugify(title)} className="scroll-mt-28 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-text-primary mb-5 sm:mb-6">
        {title}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((item, index) => (
          <BlogFAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogFAQ;
