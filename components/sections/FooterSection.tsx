'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import SmokeEffect from '@/components/effects/SmokeEffect';
import { SITE_CONFIG } from '@/lib/seo/config';
import { getLocalizedUrl } from '@/lib/i18n/routes';
import { SupportedLocale, FooterDict } from '@/types/i18n';

interface FooterSectionProps {
  locale?: SupportedLocale;
  dictionary: FooterDict;
  hideCTA?: boolean;
}

const FooterSection: React.FC<FooterSectionProps> = ({ locale = 'en', dictionary, hideCTA = false }) => {
  const content = dictionary;

  const contactUrl = getLocalizedUrl(locale, 'contact');

  // Quick links with localized URLs
  const quickLinks = [
    { label: content.quickLinks.home, href: getLocalizedUrl(locale, 'home') },
    { label: content.quickLinks.about, href: getLocalizedUrl(locale, 'about') },
    { label: content.quickLinks.services, href: getLocalizedUrl(locale, 'services') },
    { label: content.quickLinks.projects, href: getLocalizedUrl(locale, 'projects') },
    { label: content.quickLinks.contact, href: getLocalizedUrl(locale, 'contact') },
    { label: content.quickLinks.faq, href: getLocalizedUrl(locale, 'faq') },
  ];

  // Service links from dictionary (SEO-optimized per locale)
  const serviceLinks = content.serviceLinks;

  const socialLinks = [
    { href: SITE_CONFIG.owner.social.github, icon: Github, label: 'GitHub' },
    { href: SITE_CONFIG.owner.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: SITE_CONFIG.owner.social.twitter, icon: Twitter, label: 'Twitter' },
    { href: SITE_CONFIG.owner.social.instagram, icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="relative h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden bg-black">
      {/* Cinematic Smoke Effect */}
      <SmokeEffect intensity={0.5} />
      {/* Additional Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(120,120,120,0.12)_0%,_rgba(0,0,0,1)_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl"
      >
        {/* Available For Work Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8 md:mb-10">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-white/80">{content.availableBadge}</span>
        </div>

        {/* H1 - Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tighter leading-tight text-white mb-4 sm:mb-6">
          {content.headline}
        </h2>

        {/* H2 - Subheadline */}
        <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl font-light px-2 sm:px-0">
          {content.subheadline}
        </p>

        {/* CTA Button */}
        {!hideCTA && (
          <div className="flex flex-col items-center justify-center mb-10 sm:mb-12 md:mb-16">
            <CornerGlowButton href={contactUrl}>
              {content.cta}
              <ArrowUpRight className="w-4 h-4" />
            </CornerGlowButton>
          </div>
        )}

        {/* Links Grid: Quick Links | Services | Contact */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 text-center mt-6 sm:mt-8">
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-4">
                {content.sections.quickLinks}
              </h3>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-4 text-center">
                {content.sections.services}
              </h3>
              <nav className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-4">
              {content.sections.contact}
            </h3>
            <div className="flex flex-col gap-2 text-sm items-center">
              <span className="text-text-primary font-medium">
                {content.contact.name}
              </span>
              <a
                href="https://maps.google.com/?q=Częstochowa,Poland"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-text-muted" />
                {content.contact.location}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.owner.email}`}
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-text-muted" />
                {SITE_CONFIG.owner.email}
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-4 sm:gap-6 md:gap-8">
          {socialLinks.map((social, index) => (
            <React.Fragment key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium uppercase tracking-widest hidden md:block">{social.label}</span>
              </a>
              {index < socialLinks.length - 1 && (
                <div className="hidden sm:block w-[1px] h-4 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Location keywords for SEO */}
        <p className="mt-6 sm:mt-8 md:mt-12 text-[10px] text-zinc-600 tracking-wide text-center max-w-lg px-4 sm:px-0">
          {content.seoText}
        </p>
      </motion.div>

      {/* Copyright footer sub-bar */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 w-full px-4 sm:px-8 md:px-12 flex flex-col sm:flex-row justify-between items-center text-[9px] font-medium tracking-[0.2em] text-zinc-700 uppercase">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
        <span className="mt-2 sm:mt-0">{content.contact.location}</span>
      </div>
    </footer>
  );
};

export default FooterSection;
