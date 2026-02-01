'use client';

import React, { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { FAQTeaserDict } from '@/types/i18n';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

interface FAQTeaserSectionProps {
  dictionary?: FAQTeaserDict;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// CSS grid-based accordion - no height animation, fully composited
const FAQItem = memo<FAQItemProps>(({ question, answer, isOpen, onClick }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      onClick={onClick}
      className={`mb-4 sm:mb-4 rounded-xl border cursor-pointer transition-[border-color,background-color] duration-300 overflow-hidden ${
        isOpen ? 'bg-surface border-border' : 'bg-surface border-border-subtle hover:border-border'
      }`}
    >
      <div className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none">
        <span className="text-base sm:text-lg font-normal tracking-tight text-text-primary">{question}</span>
        <div
          className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-[transform,border-color,color] flex-shrink-0 ml-3 sm:ml-4 ${
            prefersReducedMotion ? '' : 'duration-300'
          } ${
            isOpen ? 'bg-transparent border-text-primary text-text-primary rotate-45' : 'bg-transparent border-border text-text-muted rotate-0'
          }`}
        >
          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>

      {/* CSS grid trick for smooth height animation without reflow */}
      <div
        className={`grid transition-[grid-template-rows] ${
          prefersReducedMotion ? 'duration-0' : 'duration-300'
        } ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 font-light tracking-tight text-text-secondary text-xs sm:text-sm leading-relaxed max-w-[95%]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
});
FAQItem.displayName = 'FAQItem';

const FAQTeaserSection: React.FC<FAQTeaserSectionProps> = ({ dictionary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useScrollAnimationGroup();

  // Memoized toggle handler to prevent FAQItem re-renders
  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  // Fallback content for backward compatibility
  const content = {
    badge: dictionary?.badge ?? 'FAQ',
    title: dictionary?.title ?? 'Questions?',
    subtitle: dictionary?.subtitle ?? 'Quick answers to common questions',
    items: dictionary?.items ?? [
      {
        question: "What do you build?",
        answer: "Production web applications—SaaS platforms, custom e-commerce systems, and business websites—built with React, Next.js, and TypeScript. No WordPress or templates."
      },
      {
        question: "How long does a typical project take?",
        answer: "Small projects: 3-5 weeks. SaaS or e-commerce platforms: 8-12 weeks, depending on scope and integrations."
      },
      {
        question: "What's your pricing structure?",
        answer: "Fixed-price for defined scopes, or monthly retainer for ongoing development. Pricing depends on complexity and required integrations."
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes. I provide ongoing support, updates, and performance improvements after launch, usually as a monthly maintenance or development agreement."
      }
    ],
    cta: dictionary?.cta ?? { label: 'See All Questions', href: '/en/faq' },
  };

  return (
    <section className="relative w-full bg-background py-12 sm:py-16 md:py-20 lg:py-24">
            <div ref={containerRef} className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-start">

          {/* Left Column: Header Content */}
          <div className="animate-on-scroll fade-in-left">
            <div className="mb-5 sm:mb-6 md:mb-8">
              <PulseBadge text={content.badge} />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tighter leading-tight text-text-primary mb-3 sm:mb-4 md:mb-6">
              {content.title}
            </h2>

            <p className="font-light tracking-tight text-text-secondary text-sm sm:text-base md:text-lg max-w-md mb-5 sm:mb-8 md:mb-12 leading-relaxed opacity-80">
              {content.subtitle}
            </p>

            <Link href={content.cta.href}>
              <CornerGlowButton>{content.cta.label}</CornerGlowButton>
            </Link>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="animate-on-scroll fade-in-up" style={{ '--delay': '100ms' } as React.CSSProperties}>
            {content.items.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQTeaserSection;
