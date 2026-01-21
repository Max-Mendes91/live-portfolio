'use client';

import React from 'react';
import Image from 'next/image';
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
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, number, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 transition-colors hover:border-white/10 group overflow-hidden"
  >
    <div className="flex justify-between items-start mb-8">
      <div className="text-zinc-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform origin-left">
        {icon}
      </div>

      {/* The "Top-Lit Border" Number Container */}
      <div className="
        relative flex items-center justify-center
        w-10 h-10
        rounded-full
        bg-[#1A1A1A]
        border-t border-t-white/30
        border-l border-l-white/5 border-r border-r-white/5
        border-b border-b-transparent
        shadow-[0_4px_10px_rgba(0,0,0,0.5)]
        transition-all duration-500
        group-hover:border-t-white/60
      ">
        <span className="text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
          {number}
        </span>

        {/* Tiny top glow bloom for extra realism */}
        <div className="absolute -top-[0.5px] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>

    <h3 className="text-xl font-normal tracking-tight text-white mb-4">
      {title}
    </h3>

    <div className="w-12 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700 ease-in-out mb-4" />

    <p className="font-light tracking-tight text-zinc-400 text-sm leading-relaxed max-w-[90%]">
      {description}
    </p>
  </motion.div>
);

const ProcessSection: React.FC<ProcessSectionProps> = ({ dictionary }) => {
  // Fallback content for backward compatibility
  const content = {
    title: dictionary?.title ?? 'Structured Excellence',
    subtitle: dictionary?.subtitle ?? 'Design process',
    steps: dictionary?.steps ?? [
      { number: '01', title: 'Vision Mapping', description: 'We dive deep into your brand DNA and market landscape to establish a strategic foundation for everything that follows.' },
      { number: '02', title: 'Iterative Refinement', description: 'Collaborative feedback cycles and high-fidelity prototyping ensure every pixel aligns with your vision and user needs.' },
      { number: '03', title: 'Final Deployment', description: 'Precision-engineered assets delivered and ready for immediate implementation across your entire brand ecosystem.' },
    ],
  };

  return (
    <section className="relative w-full bg-[#050505] pt-20">
      {/* The "Panel" Line & Container */}
      <div className="max-w-[90rem] mx-auto border-t border-white/10 rounded-t-[3rem] bg-[#050505] relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* Content Container */}
        <div className="px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-stretch">

            {/* Left Column: Portrait B&W Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[500px] lg:min-h-0 rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <Image
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200"
                alt="Design Process Sketching"
                fill
                className="object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-12 left-12">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Studio Process 2024</p>
              </div>
            </motion.div>

            {/* Right Column: Content Stack */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="mb-8">
                  <PulseBadge text={content.subtitle} />
                </div>

                <h2 className="text-5xl md:text-7xl font-normal tracking-tighter leading-tight text-white mb-6">
                  {content.title}
                </h2>

                <p className="font-light tracking-tight text-zinc-400 text-lg max-w-md mb-12 leading-relaxed opacity-80">
                  Crafting bold visuals that inspire and building strong brand identities through a calibrated, results-driven workflow.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <CornerGlowButton>Book a Free Call</CornerGlowButton>
                  <CornerGlowButton>Case Studies</CornerGlowButton>
                </div>
              </motion.div>

              {/* Process Cards Grid */}
              <div className="grid grid-cols-1 gap-6">
                {content.steps.map((step, index) => {
                  const icons = [
                    <Lightbulb key="1" className="w-6 h-6 stroke-[1.5px]" />,
                    <ListTodo key="2" className="w-6 h-6 stroke-[1.5px]" />,
                    <Rocket key="3" className="w-6 h-6 stroke-[1.5px]" />,
                  ];
                  return (
                    <ProcessCard
                      key={step.number}
                      icon={icons[index] || icons[0]}
                      number={step.number}
                      title={step.title}
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
