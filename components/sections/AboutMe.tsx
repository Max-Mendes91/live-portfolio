'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AboutDict } from '@/types/i18n';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';
import {
  RocketIcon,
  TargetIcon,
  StarIcon,
  GlobeIcon,
  CheckmarkIcon,
  LightbulbIcon,
  SparklesIcon,
  CodeWindowIcon,
} from '@/components/effects/FloatingTechIcons/icons';

// Floating icon configuration for about section - desktop only
interface FloatingIconConfig {
  Icon: React.FC<{ size?: number; className?: string }>;
  position: { x: number; y: number }; // percentage within container
  size: number;
  rotation: number;
}

const ABOUT_FLOATING_ICONS: FloatingIconConfig[] = [
  { Icon: RocketIcon, position: { x: 5, y: 45 }, size: 44, rotation: -12 },
  { Icon: SparklesIcon, position: { x: 28, y: 40 }, size: 36, rotation: 10 },
  { Icon: GlobeIcon, position: { x: 75, y: 35 }, size: 38, rotation: 8 },
  { Icon: TargetIcon, position: { x: 92, y: 70 }, size: 36, rotation: -6 },
  { Icon: StarIcon, position: { x: 12, y: 95 }, size: 34, rotation: 15 },
  { Icon: CheckmarkIcon, position: { x: 70, y: 100 }, size: 40, rotation: -10 },
  { Icon: LightbulbIcon, position: { x: 48, y: 75 }, size: 32, rotation: 5 },
  { Icon: CodeWindowIcon, position: { x: 30, y: 105 }, size: 38, rotation: -8 },
];

interface AboutMeProps {
  dictionary?: AboutDict;
}

const AboutMe: React.FC<AboutMeProps> = ({ dictionary }) => {
  const containerRef = useScrollAnimationGroup();

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
    <section id="about" className="relative z-10 bg-background overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto pt-10 sm:pt-14 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Info */}
          <div className="animate-on-scroll fade-in-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter mb-3 sm:mb-4 text-text-primary">
              {content.headline}
            </h2>

            <p className="text-text-muted text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8">
              {content.subheadline}
            </p>

            <p className="text-text-secondary text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg mb-4 sm:mb-6">
              {content.description}
            </p>

            {content.description2 && (
              <p className="text-text-secondary text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg mb-6 sm:mb-8">
                {content.description2}
              </p>
            )}

            {/* Learn More Link - Internal link for SEO */}
            <Link
              href={content.learnMoreHref}
              className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors mb-6 sm:mb-8 md:mb-10 group text-sm sm:text-base"
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
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-surface border border-border-subtle text-[9px] sm:text-[10px] font-medium uppercase tracking-wider sm:tracking-widest text-text-secondary hover:border-border transition-colors cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Image + Floating Icons */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Image — plain div so it paints from server HTML
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

            {/* Floating Icons - Desktop/Laptop only (lg: 1024px+) */}
            <div className="hidden lg:block relative h-52 xl:h-60">
              {ABOUT_FLOATING_ICONS.map((config, index) => {
                const { Icon, position, size, rotation } = config;
                return (
                  <div
                    key={index}
                    className="absolute text-text-muted hover:text-text-secondary transition-colors duration-500"
                    style={{
                      left: `${position.x}%`,
                      top: `${position.y}%`,
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    <Icon size={size} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
