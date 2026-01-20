'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { SITE_CONFIG } from '@/lib/seo/config';

const FooterSection: React.FC = () => {
  return (
    <footer className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-black">
      {/* Smoke/Glow Effect using Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(120,120,120,0.15)_0%,_rgba(0,0,0,1)_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl"
      >
        {/* Available For Work Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-white/80">Available For Work</span>
        </div>

        {/* Headline - Couture Light Weight */}
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight text-white mb-12">
          Curious about what we can create together? <span className="text-zinc-500">Let&apos;s bring something extraordinary to life!</span>
        </h2>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <CornerGlowButton>
            Book a Free Call
            <ArrowUpRight className="w-4 h-4" />
          </CornerGlowButton>
        </div>

        {/* Social Icons at the bottom */}
        <div className="mt-24 flex items-center gap-8">
          <a
            href={SITE_CONFIG.owner.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-widest hidden md:block">GitHub</span>
          </a>
          <div className="w-[1px] h-4 bg-white/10" />
          <a
            href={SITE_CONFIG.owner.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-widest hidden md:block">LinkedIn</span>
          </a>
          <div className="w-[1px] h-4 bg-white/10" />
          <a
            href={SITE_CONFIG.owner.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-widest hidden md:block">Twitter</span>
          </a>
          <div className="w-[1px] h-4 bg-white/10" />
          <a
            href={SITE_CONFIG.owner.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-widest hidden md:block">Instagram</span>
          </a>
        </div>

        {/* Location keywords for SEO - from friend's advice */}
        <p className="mt-12 text-[10px] text-zinc-600 tracking-wide text-center max-w-lg">
          Web Developer in Czestochowa, Poland · Serving clients in Poland, UK, US & Europe
        </p>
      </motion.div>

      {/* Copyright footer sub-bar */}
      <div className="absolute bottom-10 w-full px-12 flex flex-col md:flex-row justify-between items-center text-[9px] font-medium tracking-[0.2em] text-zinc-700 uppercase">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
        <span className="mt-4 md:mt-0">{SITE_CONFIG.owner.address.city}, {SITE_CONFIG.owner.address.country}</span>
      </div>
    </footer>
  );
};

export default FooterSection;
