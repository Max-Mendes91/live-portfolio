'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  const experience = [
    { role: 'Freelance', company: 'GreenLeaf Co', period: 'Currently' },
    { role: 'Brand Designer', company: 'UrbanFit Studio', period: '2023-24' },
    { role: 'Package Designer', company: 'GreenK Studio', period: '2020-22' },
  ];

  const tags = [
    'Product Design', 'Brand Identity Design', 'UX Design', 'Branding', 'Packaging Design', 'Figma', 'Photoshop'
  ];

  return (
    <section id="about" className="pt-10 pb-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-white">Meet Meily</h2>

            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg mb-12">
              I&apos;m Meily, a passionate Brand Identity & Package Designer based in Tokyo. I
              specialize in crafting bold visual identities and packaging that captivates and
              inspire, blending creativity with strategy to elevate brands.
            </p>

            <div className="h-[1px] bg-white/10 w-full mb-10" />

            <div className="flex flex-wrap gap-3 mb-16">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5 text-[10px] font-medium uppercase tracking-widest text-zinc-300 hover:bg-zinc-800 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              {experience.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-zinc-400 text-sm font-light uppercase tracking-widest">{item.role}</span>
                  <span className="text-white text-sm font-normal">{item.company}</span>
                  <span className="text-zinc-500 text-xs font-light">{item.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200"
              alt="Portrait of Meily"
              fill
              className="object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-1000"
            />
            {/* Subtle glow behind the image */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
