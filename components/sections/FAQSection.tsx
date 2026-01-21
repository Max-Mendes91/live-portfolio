'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { FAQDict } from '@/types/i18n';

interface FAQSectionProps {
  dictionary?: FAQDict;
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
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
            isOpen ? 'bg-white border-white text-black' : 'bg-transparent border-white/10 text-zinc-500'
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

const FAQSection: React.FC<FAQSectionProps> = ({ dictionary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Fallback FAQs for backward compatibility
  const defaultFaqs = [
    {
      question: "What services do you provide?",
      answer: "I specialize in brand identity and package design, helping businesses build a cohesive visual presence that resonates with their target audience. From logo design to complex physical product packaging, I handle the creative strategy and execution."
    },
    {
      question: "How do I start working with you?",
      answer: "Starting is simple. You can book a free discovery call through our link. During this 15-minute session, we'll discuss your project goals, timelines, and whether we're a good fit for each other's vision."
    },
    {
      question: "What design tools do you use?",
      answer: "My primary tech stack includes Figma for digital products, Adobe Illustrator for vector work, and Photoshop/Cinema 4D for high-fidelity product mockups and packaging visualizations."
    },
    {
      question: "How long does a project take?",
      answer: "Timelines vary depending on scope. A standard brand identity project typically spans 4-6 weeks, while comprehensive packaging systems may take 8-10 weeks from discovery to final delivery."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, every package includes a set number of revision rounds (typically 2 or 3) to ensure the final product perfectly aligns with your expectations and strategic requirements."
    },
    {
      question: "Do you offer development services?",
      answer: "While my core focus is branding and design, I collaborate with a network of premium developers to bring digital identities to life on the web using modern frameworks like React and Next.js."
    }
  ];

  const content = {
    title: dictionary?.title ?? 'Answers',
    faqs: dictionary?.items ?? defaultFaqs,
  };

  return (
    <section className="relative w-full bg-[#050505] pt-20">
      {/* The "Panel" Line & Container */}
      <div className="max-w-[90rem] mx-auto border-t border-white/10 rounded-t-[3rem] bg-[#050505] relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* Content Container */}
        <div className="px-6 md:px-12 py-24">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">

            {/* Left Column: Vertical Content Stack */}
            <div className="col-span-12 lg:col-span-5 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                {/* 1. Badge */}
                <div className="mb-6">
                  <PulseBadge text="FAQ's" />
                </div>

                {/* 2. Title */}
                <h2 className="text-6xl md:text-8xl font-normal tracking-tighter leading-tight mb-6 text-white">
                  {content.title}
                </h2>

                {/* 3. Subtext */}
                <p className="font-light tracking-tight text-zinc-500 text-base leading-relaxed max-w-sm mb-12">
                  Find answers to common questions about our design process, timelines, and specialized services.
                </p>

                {/* 4. Standalone Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0A]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=1000"
                    alt="Minimalist Abstract Shadows"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
                  />
                </motion.div>

                {/* 5. Tags Below Image */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Product Design", "Brand Identity", "Branding"].map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-[10px] uppercase font-medium tracking-widest text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 6. CTA Button */}
                <div className="mt-10">
                  <CornerGlowButton>Book a Free Call</CornerGlowButton>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Separated Accordion Cards */}
            <div className="col-span-12 lg:col-span-7 pt-4">
              {content.faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
