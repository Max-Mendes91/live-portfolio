'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { useIsDesktop } from '@/hooks/useMediaQuery';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';
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
import { ServicesDict } from '@/types/i18n';
import {
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  DockerIcon,
  NextjsIcon,
  PostgresqlIcon,
  GitIcon,
  VercelIcon,
} from '@/components/effects/FloatingTechIcons/icons';

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
    <div className="w-full rounded-lg sm:rounded-xl bg-surface border-l-2 border-emerald-500/50 p-3 sm:p-4 font-mono text-[10px] sm:text-xs leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-2 sm:mb-3 text-text-secondary">
        <div className="flex gap-1 sm:gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider">app/products/page.tsx</span>
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
        <span className="text-text-secondary">{'// Error boundary handles failures'}</span>
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

const FeatureCard = memo<FeatureCardProps>(({ icon, title, description, linkText, linkHref, className, showCodeSnippet }) => {
  // Split description to insert link
  const parts = description.split(linkText);

  return (
    <div
      className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-surface border border-border hover:border-border-hover transition-[border-color] duration-500 group flex flex-col ${className || ''}`}
    >
      <div>
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-[color] duration-500">
            {icon}
          </div>
          <h3 className="text-base sm:text-lg font-normal tracking-tight text-text-primary">
            {title}
          </h3>
        </div>

        <div className="h-[1px] bg-border-subtle w-full mb-3 sm:mb-4" />

        <p className="font-light tracking-tight text-text-secondary text-xs sm:text-sm leading-relaxed">
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <Link
                href={linkHref}
                className="text-text-primary underline underline-offset-2 hover:text-white transition-[color] duration-200"
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
    </div>
  );
});
FeatureCard.displayName = 'FeatureCard';

// Floating icon configuration for service hero
interface FloatingIconConfig {
  Icon: React.FC<{ size?: number; className?: string }>;
  position: { x: number; y: number };
  size: number;
  rotation: number;
  delay: number;
}

const FLOATING_ICONS: FloatingIconConfig[] = [
  { Icon: ReactIcon, position: { x: 102, y: 5 }, size: 55, rotation: -8, delay: 0 },
  { Icon: TailwindIcon, position: { x: 105, y: 38 }, size: 42, rotation: 6, delay: 0.1 },
  { Icon: GitIcon, position: { x: 102, y: 70 }, size: 38, rotation: -5, delay: 0.2 },
  { Icon: NextjsIcon, position: { x: 118, y: 12 }, size: 50, rotation: 10, delay: 0.15 },
  { Icon: TypeScriptIcon, position: { x: 121, y: 48 }, size: 45, rotation: -6, delay: 0.25 },
  { Icon: PostgresqlIcon, position: { x: 118, y: 82 }, size: 35, rotation: 8, delay: 0.3 },
  { Icon: DockerIcon, position: { x: 134, y: 22 }, size: 40, rotation: 5, delay: 0.2 },
  { Icon: VercelIcon, position: { x: 132, y: 58 }, size: 36, rotation: -8, delay: 0.35 },
];

// Floating icon - no animation needed for decorative elements
const FloatingServiceIcon = memo<{ config: FloatingIconConfig }>(({ config }) => {
  const { Icon, position, size, rotation } = config;

  return (
    <div
      className="absolute pointer-events-none hidden lg:block"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="text-text-primary drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
        <Icon size={size} />
      </div>
    </div>
  );
});
FloatingServiceIcon.displayName = 'FloatingServiceIcon';

// CSS-only marquee - uses CSS animation with play-state
const MarqueeRow = memo<{ items: string[]; direction: 'left' | 'right' }>(({ items, direction }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div
        className={`flex gap-2 sm:gap-3 md:gap-4 py-1.5 sm:py-2 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/5 border border-border whitespace-nowrap text-[9px] sm:text-[10px] font-medium uppercase tracking-wider sm:tracking-widest text-text-muted hover:text-text-primary hover:bg-white/10 transition-[color,background-color] duration-200 cursor-default"
          >
            <div className="w-1 h-1 rounded-full bg-text-muted" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});
MarqueeRow.displayName = 'MarqueeRow';

const ServiceSection: React.FC<ServiceSectionProps> = ({ dictionary }) => {
  const { hero, pills, primaryButton, secondaryButton, cards, marquee1, marquee2 } = dictionary;
  const containerRef = useScrollAnimationGroup();
  const isDesktop = useIsDesktop();

  // Get icon component from string name
  const getIcon = (iconName: string) => {
    const IconComponent = ICONS[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section className="relative w-full bg-background pt-12 sm:pt-16 md:pt-20">
      {/* The "Panel" Line & Container */}
      <div ref={containerRef} className="max-w-[90rem] mx-auto border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* Content Container */}
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 space-y-10 sm:space-y-12 md:space-y-16">

          {/* Block A: Service Hero */}
          <div className="max-w-4xl relative">
            {/* Floating Tech Icons - Desktop only */}
            {isDesktop && FLOATING_ICONS.map((config, index) => (
              <FloatingServiceIcon key={index} config={config} />
            ))}
            <div className="animate-on-scroll fade-in-up">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <PulseBadge text={hero.badge} />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-tight mb-4 sm:mb-5 md:mb-6 text-text-primary">
                {hero.title}
              </h2>

              <p className="font-light tracking-tight text-text-secondary text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed">
                {hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 md:mb-10">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-white/5 border border-border text-[9px] sm:text-[10px] text-text-muted uppercase font-medium tracking-wider"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-row items-start gap-2 sm:gap-3 md:gap-4">
                <CornerGlowButton href="/en/services">{primaryButton}</CornerGlowButton>
                <CornerGlowButton href="/en/projects">{secondaryButton}</CornerGlowButton>
              </div>
            </div>
          </div>

          {/* Block B: Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 stagger-children">
            {cards[0] && (
              <div className="md:col-span-2 h-full animate-on-scroll fade-in-up">
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
              <div className="md:col-span-1 h-full animate-on-scroll fade-in-up">
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

            {cards[2] && (
              <div className="md:col-span-2 md:row-span-2 h-full animate-on-scroll fade-in-up">
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
              <div className="md:col-span-1 h-full animate-on-scroll fade-in-up">
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
              <div className="md:col-span-1 h-full animate-on-scroll fade-in-up">
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
          <div className="relative space-y-3 sm:space-y-4 md:space-y-6 pt-6 sm:pt-8 md:pt-12">
            <MarqueeRow items={marquee1} direction="left" />
            <MarqueeRow items={marquee2} direction="right" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
