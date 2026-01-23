'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code2,
  Cloud,
  ShoppingCart,
  Search,
  Bot,
  LucideIcon
} from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { ServicesDict, ServiceCardDict } from '@/types/i18n';

// Icon mapping for dynamic icon rendering
const ICONS: Record<string, LucideIcon> = {
  Code2,
  Cloud,
  ShoppingCart,
  Search,
  Bot,
};

interface ServiceSectionProps {
  dictionary: ServicesDict;
}

// Code snippet with syntax highlighting
const CodeSnippet: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-[#0a0a0a] border-l-2 border-emerald-500/50 p-4 font-mono text-xs leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-3 text-text-muted">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[10px] uppercase tracking-wider">app/products/page.tsx</span>
      </div>
      <code className="block">
        <span className="text-blue-400">const</span>{' '}
        <span className="text-white">products</span>{' '}
        <span className="text-blue-400">=</span>{' '}
        <span className="text-blue-400">await</span>{' '}
        <span className="text-white">db.products.</span>
        <span className="text-yellow-300">findMany</span>
        <span className="text-white">()</span>
      </code>
      <code className="block mt-1">
        <span className="text-purple-400">if</span>{' '}
        <span className="text-white">(!</span>
        <span className="text-white">products.length</span>
        <span className="text-white">)</span>{' '}
        <span className="text-purple-400">return</span>{' '}
        <span className="text-blue-400">&lt;</span>
        <span className="text-emerald-400">EmptyState</span>{' '}
        <span className="text-blue-400">/&gt;</span>
      </code>
      <code className="block mt-1">
        <span className="text-purple-400">return</span>{' '}
        <span className="text-blue-400">&lt;</span>
        <span className="text-emerald-400">ProductGrid</span>{' '}
        <span className="text-orange-300">items</span>
        <span className="text-blue-400">=</span>
        <span className="text-white">{'{'}products{'}'}</span>{' '}
        <span className="text-blue-400">/&gt;</span>
      </code>
      <code className="block mt-2">
        <span className="text-zinc-500">{'// Error boundary handles failures'}</span>
      </code>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  className?: string;
  showCodeSnippet?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, linkText, linkHref, className, showCodeSnippet }) => {
  // Split description to insert link
  const parts = description.split(linkText);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-500 group flex flex-col ${className || ''}`}
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
            {icon}
          </div>
          <h3 className="text-lg font-normal tracking-tight text-text-primary">
            {title}
          </h3>
        </div>

        <div className="h-[1px] bg-border-subtle w-full mb-4" />

        <p className="font-light tracking-tight text-text-secondary text-sm leading-relaxed">
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <Link
                href={linkHref}
                className="text-text-primary underline underline-offset-2 hover:text-white transition-colors"
              >
                {linkText}
              </Link>
              {parts[1]}
            </>
          ) : (
            description
          )}
        </p>
      </div>

      {showCodeSnippet && (
        <div className="flex-1 flex items-center">
          <CodeSnippet />
        </div>
      )}
    </motion.div>
  );
};

const MarqueeRow: React.FC<{ items: string[]; direction: 'left' | 'right' }> = ({ items, direction }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex gap-4 py-2"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-border whitespace-nowrap text-[10px] font-medium uppercase tracking-widest text-text-muted hover:text-text-primary hover:bg-white/10 transition-all cursor-default"
          >
            <div className="w-1 h-1 rounded-full bg-text-muted" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ServiceSection: React.FC<ServiceSectionProps> = ({ dictionary }) => {
  const { hero, pills, primaryButton, secondaryButton, cards, marquee1, marquee2 } = dictionary;

  // Get icon component from string name
  const getIcon = (iconName: string) => {
    const IconComponent = ICONS[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section className="relative w-full bg-background pt-20">
      {/* The "Panel" Line & Container */}
      <div className="max-w-[90rem] mx-auto border-t border-border rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* Content Container */}
        <div className="px-6 md:px-12 py-24 space-y-16">

          {/* Block A: Service Hero */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <PulseBadge text={hero.badge} />
              </div>

              <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-tight mb-6 text-text-primary">
                {hero.title}
              </h2>

              <p className="font-light tracking-tight text-text-secondary text-lg mb-10 max-w-2xl leading-relaxed">
                {hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-border text-[10px] text-text-muted uppercase font-medium tracking-wider"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <CornerGlowButton href="/en/services">{primaryButton}</CornerGlowButton>
                <CornerGlowButton href="/en/projects">{secondaryButton}</CornerGlowButton>
              </div>
            </motion.div>
          </div>

          {/* Block B: Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Row 1: Wide card (2 cols) + Regular card (1 col) */}
            {cards[0] && (
              <div className="md:col-span-2 h-full">
                <FeatureCard
                  icon={getIcon(cards[0].icon)}
                  title={cards[0].title}
                  description={cards[0].description}
                  linkText={cards[0].linkText}
                  linkHref={cards[0].linkHref}
                  className="h-full"
                />
              </div>
            )}
            {cards[1] && (
              <div className="md:col-span-1 h-full">
                <FeatureCard
                  icon={getIcon(cards[1].icon)}
                  title={cards[1].title}
                  description={cards[1].description}
                  linkText={cards[1].linkText}
                  linkHref={cards[1].linkHref}
                  className="h-full"
                />
              </div>
            )}

            {/* Row 2-3: Tall card (2 rows) with code snippet + 2 stacked cards */}
            {cards[2] && (
              <div className="md:col-span-2 md:row-span-2 h-full">
                <FeatureCard
                  icon={getIcon(cards[2].icon)}
                  title={cards[2].title}
                  description={cards[2].description}
                  linkText={cards[2].linkText}
                  linkHref={cards[2].linkHref}
                  className="h-full"
                  showCodeSnippet
                />
              </div>
            )}
            {cards[3] && (
              <div className="md:col-span-1 h-full">
                <FeatureCard
                  icon={getIcon(cards[3].icon)}
                  title={cards[3].title}
                  description={cards[3].description}
                  linkText={cards[3].linkText}
                  linkHref={cards[3].linkHref}
                  className="h-full"
                />
              </div>
            )}
            {cards[4] && (
              <div className="md:col-span-1 h-full">
                <FeatureCard
                  icon={getIcon(cards[4].icon)}
                  title={cards[4].title}
                  description={cards[4].description}
                  linkText={cards[4].linkText}
                  linkHref={cards[4].linkHref}
                  className="h-full"
                />
              </div>
            )}
          </div>

          {/* Block C: Dual Infinite Marquee with Side Fades */}
          <div className="relative space-y-6 pt-12">
            <MarqueeRow items={marquee1} direction="left" />
            <MarqueeRow items={marquee2} direction="right" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
