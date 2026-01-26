'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, ListTodo, Rocket } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { ProcessDict } from '@/types/i18n';

interface ProcessSectionProps {
  dictionary?: ProcessDict;
}

interface ProcessCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, number, title, subtitle, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative bg-[#0A0A0A] border border-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-colors hover:border-white/10 group overflow-hidden"
  >
    <div className="flex justify-between items-start mb-4 sm:mb-5 md:mb-6">
      <div className="text-zinc-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform origin-left">
        {icon}
      </div>

      {/* The "Top-Lit Border" Number Container */}
      <div className="
        relative flex items-center justify-center
        w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
        rounded-full
        bg-[#1A1A1A]
        border-t border-t-white/30
        border-l border-l-white/5 border-r border-r-white/5
        border-b border-b-transparent
        shadow-[0_4px_10px_rgba(0,0,0,0.5)]
        transition-all duration-500
        group-hover:border-t-white/60
      ">
        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
          {number}
        </span>

        {/* Tiny top glow bloom for extra realism */}
        <div className="absolute -top-[0.5px] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>

    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest text-zinc-500 mb-1.5 sm:mb-2">
      {subtitle}
    </p>

    <h3 className="text-lg sm:text-xl font-normal tracking-tight text-white mb-3 sm:mb-4">
      {title}
    </h3>

    <div className="w-10 sm:w-12 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700 ease-in-out mb-3 sm:mb-4" />

    <p className="font-light tracking-tight text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[95%] sm:max-w-[90%]">
      {description}
    </p>
  </motion.div>
);

const ProcessSection: React.FC<ProcessSectionProps> = ({ dictionary }) => {
  // Fallback content for backward compatibility
  const content = {
    badge: dictionary?.badge ?? 'Development Process',
    title: dictionary?.title ?? 'How I Build Your Software',
    subtitle: dictionary?.subtitle ?? 'A proven workflow for building SaaS applications, e-commerce platforms, and AI-powered features that scale.',
    imageLabel: dictionary?.imageLabel ?? 'Development Workflow',
    steps: dictionary?.steps ?? [
      { number: '01', title: 'Requirements & Architecture', subtitle: 'Technical Discovery', description: 'I analyze your business requirements, select the optimal React and Next.js stack, and design database architecture and API structure for scalability.' },
      { number: '02', title: 'Development & Integration', subtitle: 'Build & Test', description: 'I write production TypeScript code, implement features with real-time updates and authentication, test continuously, and integrate AI capabilities where needed.' },
      { number: '03', title: 'Production Deployment', subtitle: 'Deploy & Document', description: 'I deploy to production infrastructure, optimize performance and SEO, provide complete documentation, and train your team on maintenance.' },
    ],
    ctas: dictionary?.ctas ?? [
      { label: 'View Services', href: '/en/services' },
      { label: 'See Projects', href: '/en/projects' },
    ],
  };

  return (
    <section className="relative w-full bg-[#050505] pt-12 sm:pt-16 md:pt-20">
      {/* The "Panel" Line & Container */}
      <div className="max-w-[90rem] mx-auto border-t border-white/10 rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-[#050505] relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* Content Container */}
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-stretch">

            {/* Left Column: Portrait B&W Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <Image
                src="/images/process.webp"
                alt="Development Process Planning"
                fill
                className="object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12">
                <p className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/40">{content.imageLabel}</p>
              </div>
            </motion.div>

            {/* Right Column: Content Stack */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10 sm:mb-12 md:mb-16"
              >
                <div className="mb-5 sm:mb-6 md:mb-8">
                  <PulseBadge text={content.badge} />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tighter leading-tight text-white mb-4 sm:mb-5 md:mb-6">
                  {content.title}
                </h2>

                <p className="font-light tracking-tight text-zinc-400 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 md:mb-12 leading-relaxed opacity-80">
                  {content.subtitle}
                </p>

                <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
                  {content.ctas.map((cta, index) => (
                    <Link key={index} href={cta.href}>
                      <CornerGlowButton>{cta.label}</CornerGlowButton>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Process Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
                {content.steps.map((step, index) => {
                  const icons = [
                    <Lightbulb key="1" className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5px]" />,
                    <ListTodo key="2" className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5px]" />,
                    <Rocket key="3" className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5px]" />,
                  ];
                  return (
                    <ProcessCard
                      key={step.number}
                      icon={icons[index] || icons[0]}
                      number={step.number}
                      title={step.title}
                      subtitle={step.subtitle}
                      description={step.description}
                    />
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
