'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, FolderOpen, Globe, Languages } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { TRUST_SIGNALS } from '@/lib/seo/config';

// Map icon names to Lucide components
const iconMap = {
  trophy: Trophy,
  folder: FolderOpen,
  globe: Globe,
  languages: Languages,
};

const LiquidBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            x: [-120, 160, -30],
            y: [120, -160, 60],
            scale: [1, 1.3, 0.85, 1],
            borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "50% 50% 50% 50%", "40% 60% 70% 30%"]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-25%] left-[-15%] w-[1300px] h-[1000px] bg-white/[0.06] blur-[160px] pointer-events-none"
        />

        <motion.div
          animate={{
            x: [160, -120, 50],
            y: [-160, 140, -40],
            scale: [1.15, 0.9, 1.25, 1.15],
            borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "50% 50% 50% 50%", "60% 40% 30% 70%"]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] right-[-15%] w-[1100px] h-[900px] bg-zinc-400/[0.04] blur-[180px] pointer-events-none"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-[#050505] opacity-60" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yContent = useTransform(scrollY, [0, 600], [0, 100]);
  const [wheelY, setWheelY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWheelY(5);
      setTimeout(() => setWheelY(0), 1000);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-48 pb-48 px-6 overflow-hidden">
      <LiquidBackground />

      <motion.div
        style={{ opacity, y: yContent }}
        className="relative z-10 text-center max-w-7xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Redline 3: The Pill Gradient Fade */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-l border-t border-b border-white/20 border-r-transparent bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-sm mb-12 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-white uppercase opacity-80">
              Crafting Unique Brand Identities
            </span>
          </div>

          {/* Lighter Typography with Tight Tracking */}
          <h1 className="text-6xl md:text-[100px] font-light tracking-tighter leading-[1.1] pb-2 mb-12 select-none text-white max-w-[1200px]">
            <span className="block">Branding that you</span>
            <span className="block">need Indeed</span>
          </h1>

          <p className="font-light tracking-tight text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed opacity-90">
            Elevate your brand with custom identity and package design. Showcase your
            story through bold visuals and strategic design solutions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative mb-16">
            <CornerGlowButton>Get Started Now</CornerGlowButton>
            <CornerGlowButton>See Projects</CornerGlowButton>
          </div>

          {/* Trust Signals - SEO badges from friend's advice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {TRUST_SIGNALS.en.map((signal) => {
              const IconComponent = iconMap[signal.icon as keyof typeof iconMap];
              return (
                <div
                  key={signal.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                >
                  {IconComponent && <IconComponent className="w-3.5 h-3.5 text-white/60" />}
                  <span className="text-[10px] md:text-xs font-medium tracking-wide text-white/70">
                    {signal.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-16 w-full max-w-[1400px] flex items-center justify-center px-12 z-20"
      >
        <div className="flex-1 h-[1px] bg-white/[0.05] mr-12" />
        <div className="flex items-center">
          <span className="text-[10px] font-medium tracking-[0.3em] text-zinc-500/60 uppercase whitespace-nowrap text-right mr-10">Scroll down</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5 backdrop-blur-[2px]">
            <motion.div
              animate={{ y: wheelY }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-0.5 h-2.5 bg-white/80 rounded-full shadow-[0_0_8px_white]"
            />
          </div>
          <span className="text-[10px] font-medium tracking-[0.3em] text-zinc-500/60 uppercase whitespace-nowrap text-left ml-10">to see projects</span>
        </div>
        <div className="flex-1 h-[1px] bg-white/[0.05] ml-12" />
      </motion.div>
    </section>
  );
};

export default Hero;
