'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { Display, Heading, Text } from '@/components/ui';
import { Dictionary, SupportedLocale, FAQCategoryDict } from '@/types/i18n';

interface FAQClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

interface FAQItemProps {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, linkText, linkHref, isOpen, onClick }) => {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      className={`overflow-hidden rounded-xl border cursor-pointer transition-all duration-500 ${
        isOpen ? 'bg-[#0F0F0F] border-white/20' : 'bg-[#0A0A0A] border-white/5 hover:border-white/10'
      }`}
    >
      <div className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
        <span className="text-lg font-normal tracking-tight text-white pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors flex-shrink-0 ${
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
            <div className="px-6 pb-6 font-light tracking-tight text-zinc-400 text-base leading-relaxed">
              {answer}
              {linkText && linkHref && (
                <Link
                  href={linkHref}
                  onClick={(e) => e.stopPropagation()}
                  className="block mt-3 text-white hover:text-zinc-300 transition-colors underline underline-offset-4"
                >
                  {linkText} →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQCategoryProps {
  category: FAQCategoryDict;
  categoryIndex: number;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category, categoryIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
    >
      <Heading size="md" as="h2" className="mb-6">
        {category.title}
      </Heading>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            linkText={item.linkText}
            linkHref={item.linkHref}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Shared section container style (matching about page)
const sectionContainerStyle = "max-w-[90rem] mx-auto border-t border-border rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]";

const FAQClient: React.FC<FAQClientProps> = ({ locale, dictionary }) => {
  const { faqPage, nav, footer } = dictionary;

  if (!faqPage) return null;

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
                  type: "spring",
                  damping: 25,
                  stiffness: 80,
                  mass: 1.2,
                },
              }}
              className="max-w-4xl mx-auto border-t border-white/10 rounded-t-[2rem] pt-20 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-12"
            >
              <div className="text-center flex flex-col items-center">
                <div className="mb-8">
                  <PulseBadge text="FAQ" />
                </div>

                <Display size="md" as="h1" className="mb-6">
                  {faqPage.seo.h1}
                </Display>

                <Text size="lg" color="secondary" className="max-w-2xl">
                  {faqPage.intro}
                </Text>
              </div>
            </motion.div>
          </section>

          {/* FAQ Categories Section */}
          <section className="py-12 lg:py-20">
            <div className={sectionContainerStyle + " pt-16 lg:pt-24 pb-16 lg:pb-24"}>
              <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <div className="space-y-16">
                  {faqPage.categories.map((category, index) => (
                    <FAQCategory
                      key={index}
                      category={category}
                      categoryIndex={index}
                    />
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
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Display size="sm" as="h2" className="mb-6">
                  {faqPage.cta.title}
                </Display>
                <Text color="secondary" className="mb-10 max-w-2xl mx-auto">
                  {faqPage.cta.description}
                </Text>

                <Link href={faqPage.cta.primaryButton.href}>
                  <CornerGlowButton>{faqPage.cta.primaryButton.label}</CornerGlowButton>
                </Link>
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

export default FAQClient;
