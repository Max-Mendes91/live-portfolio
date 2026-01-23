'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { FAQTeaserDict } from '@/types/i18n';

interface FAQTeaserSectionProps {
  dictionary?: FAQTeaserDict;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      className={`mb-4 overflow-hidden rounded-xl border cursor-pointer transition-all duration-500 ${
        isOpen ? 'bg-[#0F0F0F] border-white/20' : 'bg-[#0A0A0A] border-white/5 hover:border-white/10'
      }`}
    >
      <div className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
        <span className="text-lg font-normal tracking-tight text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors flex-shrink-0 ml-4 ${
            isOpen ? 'bg-transparent border-white text-white' : 'bg-transparent border-white/10 text-zinc-500'
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-6 pb-6 font-light tracking-tight text-zinc-400 text-sm leading-relaxed max-w-[95%]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQTeaserSection: React.FC<FAQTeaserSectionProps> = ({ dictionary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section className="relative w-full bg-[#050505] py-24">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left Column: Header Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="mb-8">
              <PulseBadge text={content.badge} />
            </div>

            <h2 className="text-5xl md:text-7xl font-normal tracking-tighter leading-tight text-white mb-6">
              {content.title}
            </h2>

            <p className="font-light tracking-tight text-zinc-400 text-lg max-w-md mb-12 leading-relaxed opacity-80">
              {content.subtitle}
            </p>

            <Link href={content.cta.href}>
              <CornerGlowButton>{content.cta.label}</CornerGlowButton>
            </Link>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {content.items.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQTeaserSection;
