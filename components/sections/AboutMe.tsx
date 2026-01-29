'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AboutDict } from '@/types/i18n';

interface AboutMeProps {
  dictionary?: AboutDict;
}

const AboutMe: React.FC<AboutMeProps> = ({ dictionary }) => {
  // Fallback content for backward compatibility
  const content = {
    headline: dictionary?.headline ?? "Hi, I'm Max Mendes",
    subheadline: dictionary?.subheadline ?? 'Full Stack Web Developer based in Częstochowa, Poland',
    description: dictionary?.description ?? "With expertise in React, Next.js, Node.js, and TypeScript, I help businesses establish a powerful online presence. Whether you need a custom website, e-commerce store, or SEO optimization - I deliver solutions that drive results.",
    description2: dictionary?.description2 ?? "",
    learnMoreText: dictionary?.learnMoreText ?? 'Learn More About Me',
    learnMoreHref: dictionary?.learnMoreHref ?? '/en/about',
    trustBadges: dictionary?.trustBadges ?? [
      '500+ Hours Building Production Software',
      'Working with Teams in Poland, UK & US',
      'One Developer, Complete Ownership',
      'Modern Architecture, Zero Technical Debt',
    ],
  };

  return (
    <section id="about" className="pt-8 sm:pt-10 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter mb-3 sm:mb-4 text-white">
              {content.headline}
            </h2>

            <p className="text-zinc-500 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8">
              {content.subheadline}
            </p>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg mb-4 sm:mb-6">
              {content.description}
            </p>

            {content.description2 && (
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg mb-6 sm:mb-8">
                {content.description2}
              </p>
            )}

            {/* Learn More Link - Internal link for SEO */}
            <Link
              href={content.learnMoreHref}
              className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors mb-6 sm:mb-8 md:mb-10 group text-sm sm:text-base"
            >
              <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white/60">
                {content.learnMoreText}
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="h-[1px] bg-white/10 w-full mb-6 sm:mb-8 md:mb-10" />

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {content.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-white/5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider sm:tracking-widest text-zinc-300 hover:bg-zinc-800 transition-colors cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image — plain div so it paints from server HTML
               without waiting for JS hydration (critical for LCP) */}
          <div className="group relative aspect-[4/5] xl:aspect-square overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/aboutme.webp"
              alt="Max Mendes - Full Stack Web Developer based in Poland, specializing in React and Next.js development"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1023px) 90vw, 45vw"
              quality={75}
              priority
              fetchPriority="high"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="grayscale"
            />
            {/* Hover overlay - opacity transition instead of filter (GPU-composited) */}
            <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
            {/* Subtle glow behind the image */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
