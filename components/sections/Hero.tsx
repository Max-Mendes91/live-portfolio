'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Trophy, FolderOpen, Globe, Languages, ChevronDown } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { SITE_CONFIG } from '@/lib/seo/config';
import { HeroDict } from '@/types/i18n';
import { usePrefersReducedMotion, useIsSafari } from '@/hooks/useMediaQuery';
import { SupportedLocale } from '@/types/seo';

interface HeroProps {
  dictionary?: HeroDict;
  isReady?: boolean;
  locale?: SupportedLocale;
}

// Map icon names to Lucide components
const iconMap = {
  trophy: Trophy,
  folder: FolderOpen,
  globe: Globe,
  languages: Languages,
};

// Hero gradient background - purple/blue with dark radial overlay and bottom fade
const HeroGradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Brand blue base with dark radial from top */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'hsla(217, 80%, 40%, 0.8)',
          backgroundImage: 'radial-gradient(circle at 50% 0%, hsla(0, 0%, 0%, 1) 45%, transparent 100%)',
          backgroundBlendMode: 'normal',
        }}
      />
      {/* Bottom fade to black - seamless transition to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #050505 100%)',
        }}
      />
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ dictionary, isReady = true, locale = 'en' }) => {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { margin: '0px 0px -50% 0px' });
  const [wheelY, setWheelY] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isSafari = useIsSafari();
  // Safari: lighter animations to avoid jank during intro overlay crossfade
  const lite = isSafari || prefersReducedMotion;

  // Only track scroll when hero is in view - prevents unnecessary re-renders
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yContent = useTransform(scrollY, [0, 600], [0, 100]);

  // Memoize static motion values when hero is out of view
  const motionStyle = useMemo(() => {
    if (prefersReducedMotion) {
      return { opacity: 1, y: 0 };
    }
    return { opacity, y: yContent };
  }, [prefersReducedMotion, opacity, yContent]);

  // Fallback values for backward compatibility
  const content = {
    badge: dictionary?.badge ?? 'Full-Stack Development',
    headline: dictionary?.headline ?? 'Freelance Developer for Hire',
    subheadline: dictionary?.subheadline ?? 'Websites. E-commerce. Web Apps. SaaS.',
    description: dictionary?.description ?? "I'm Max, a full-stack developer based in Poland. I build websites, e-commerce stores, web apps, and SaaS products. I handle everything — from research and prototyping to deployment. UK and US clients welcome.",
    ctaPrimary: dictionary?.ctaPrimary ?? 'Book a Free Call',
    ctaSecondary: dictionary?.ctaSecondary ?? 'See Projects',
    phoneLabel: dictionary?.phoneLabel ?? 'or call',
    scrollDown: dictionary?.scrollDown ?? 'Scroll down',
    toSeeProjects: dictionary?.toSeeProjects ?? 'to see projects',
    trustSignals: dictionary?.trustSignals ?? [
      { label: '2+ Years Experience', icon: 'trophy' },
      { label: 'UK/US Friendly Timezone', icon: 'globe' },
      { label: 'Fluent English', icon: 'languages' },
    ],
  };

  useEffect(() => {
    // Don't run wheel animation for users who prefer reduced motion
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setWheelY(5);
      setTimeout(() => setWheelY(0), 1000);
    }, 4500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex flex-col items-center justify-center pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <HeroGradientBackground />

      <motion.div
        style={isInView ? motionStyle : { opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-7xl flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          {/* Top group: Badge + H1 — fade in (no y-offset to avoid overflow:hidden clipping) */}
          <motion.div
            initial={{ opacity: 0, scale: lite ? 1 : 0.97 }}
            animate={isReady ? { opacity: 1, scale: 1 } : undefined}
            transition={{
              duration: lite ? 0.4 : 1.2,
              ease: lite ? 'easeOut' : [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col items-center"
          >
            {/* Redline 3: The Pill Gradient Fade */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border-l border-t border-b border-white/20 border-r-transparent bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-sm mb-4 sm:mb-6 w-fit">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase opacity-80">
                {content.badge}
              </span>
            </div>

            {/* Lighter Typography with Tight Tracking */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] font-light tracking-tighter leading-[1.1] pb-1 sm:pb-2 mb-3 sm:mb-4 select-none text-text-primary max-w-[1200px]">
              {content.headline}
            </h1>
          </motion.div>

          {/* Bottom group: Subheadline, description, CTAs — slide up from below */}
          <motion.div
            initial={{ opacity: 0, y: lite ? 0 : 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: lite ? 0.4 : 1.2,
              delay: lite ? 0.05 : 0.15,
              ease: lite ? 'easeOut' : [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col items-center"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-light tracking-tight text-text-secondary mb-4 sm:mb-6">
              {content.subheadline}
            </h2>

            <p className="font-light tracking-tight text-text-secondary text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed opacity-90 px-2 sm:px-0">
              {content.description}
            </p>

            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 relative">
                <CornerGlowButton href={locale === 'pl' ? '/pl/kontakt' : '/en/contact'}>{content.ctaPrimary}</CornerGlowButton>
                <CornerGlowButton href={locale === 'pl' ? '/pl/projekty' : '/en/projects'}>{content.ctaSecondary}</CornerGlowButton>
              </div>
              <p className="text-xs sm:text-sm text-text-muted">
                {content.phoneLabel}{' '}
                <a
                  href={`tel:${SITE_CONFIG.owner.phone.replace(/\s/g, '')}`}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {SITE_CONFIG.owner.phone}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Trust Signals — fade in last */}
          <motion.div
            initial={{ opacity: 0, y: lite ? 0 : 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: lite ? 0.3 : 0.8,
              delay: lite ? 0.15 : 0.6,
              ease: lite ? 'easeOut' : [0.16, 1, 0.3, 1]
            }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2 sm:px-0"
          >
            {content.trustSignals.map((signal) => {
              const IconComponent = iconMap[signal.icon as keyof typeof iconMap];
              return (
                <div
                  key={signal.label}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                >
                  {IconComponent && <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-text-muted" />}
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide text-text-secondary">
                    {signal.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 sm:bottom-10 w-full flex items-center justify-center px-4 z-20"
      >
        <div className="flex items-center">
          <span className="hidden sm:block text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.3em] text-text-muted uppercase whitespace-nowrap text-right mr-4 sm:mr-10">{content.scrollDown}</span>

          {/* Mobile: Chevron arrow */}
          <motion.div
            animate={{ y: prefersReducedMotion ? 0 : [0, 6, 0] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }
            className="sm:hidden"
          >
            <ChevronDown className="w-6 h-6 text-text-muted" />
          </motion.div>

          {/* Desktop: Mouse scroll wheel */}
          <div className="hidden sm:flex w-5 h-8 rounded-full border border-white/20 justify-center p-1.5 backdrop-blur-[2px]">
            <motion.div
              animate={{ y: prefersReducedMotion ? 0 : wheelY }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 350, damping: 25 }
              }
              className="w-0.5 h-2.5 bg-white/80 rounded-full shadow-[0_0_8px_white]"
            />
          </div>
          <span className="hidden sm:block text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.3em] text-text-muted uppercase whitespace-nowrap text-left ml-4 sm:ml-10">{content.toSeeProjects}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
