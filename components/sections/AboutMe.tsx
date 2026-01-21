'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AboutDict, SupportedLocale } from '@/types/i18n';

interface AboutMeProps {
  locale?: SupportedLocale;
  dictionary?: AboutDict;
}

const AboutMe: React.FC<AboutMeProps> = ({ locale = 'en', dictionary }) => {
  // Use dictionary skills or fallback to default tags
  const tags = dictionary?.skills ?? [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'SEO'
  ];

  // Fallback content for backward compatibility
  const content = {
    headline: dictionary?.headline ?? "Hi, I'm Max Mendes",
    subheadline: dictionary?.subheadline ?? 'Full Stack Web Developer based in Częstochowa, Poland',
    description: dictionary?.description ?? "With expertise in React, Next.js, Node.js, and TypeScript, I help businesses establish a powerful online presence. Whether you need a custom website, e-commerce store, or SEO optimization - I deliver solutions that drive results.",
    description2: dictionary?.description2 ?? "",
  };

  const isPolish = locale === 'pl';
  const learnMoreText = isPolish ? 'Dowiedz się więcej' : 'Learn More About Me';

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
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 text-white">
              {content.headline}
            </h2>

            <p className="text-zinc-500 text-lg mb-8">
              {content.subheadline}
            </p>

            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg mb-6">
              {content.description}
            </p>

            {content.description2 && (
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg mb-8">
                {content.description2}
              </p>
            )}

            {/* Learn More Link - Internal link for SEO */}
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors mb-10 group"
            >
              <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white/60">
                {learnMoreText}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="h-[1px] bg-white/10 w-full mb-10" />

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5 text-[10px] font-medium uppercase tracking-widest text-zinc-300 hover:bg-zinc-800 transition-colors cursor-default"
                >
                  {tag}
                </span>
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
              alt="Max Mendes - Full Stack Web Developer"
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
