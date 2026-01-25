'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
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
    <footer className="relative h-screen w-full flex flex-col items-center justify-center px-2 sm:px-6 overflow-hidden bg-black">
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
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3 sm:mb-8 md:mb-10 short:mb-4">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-[8px] sm:text-[10px] uppercase font-medium tracking-[0.15em] sm:tracking-[0.2em] text-white/80">{content.availableBadge}</span>
        </div>

        {/* H1 - Main Headline */}
        <h2 className="text-xl sm:text-4xl md:text-6xl short:text-4xl font-light tracking-tighter leading-tight text-white mb-2 sm:mb-6 short:mb-3 px-1">
          {content.headline}
        </h2>

        {/* H2 - Subheadline */}
        <p className="text-text-secondary text-xs sm:text-lg short:text-base mb-4 sm:mb-10 md:mb-12 short:mb-6 max-w-2xl font-light px-2 sm:px-0">
          {content.subheadline}
        </p>

        {/* CTA Button */}
        {!hideCTA && (
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-12 md:mb-16 short:mb-6">
            <CornerGlowButton href={contactUrl}>
              {content.cta}
              <ArrowUpRight className="w-4 h-4" />
            </CornerGlowButton>
          </div>
        )}

        {/* Links Grid: Quick Links | Services | Contact - Always 3 columns */}
        <div className="w-full max-w-4xl grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 short:gap-4 text-center mt-4 sm:mt-8 short:mt-4">
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <div className="text-center sm:text-left">
              <h3 className="text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-text-muted mb-2 sm:mb-4">
                {content.sections.quickLinks}
              </h3>
              <nav className="flex flex-col items-center sm:items-start">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[10px] sm:text-sm text-text-secondary hover:text-text-primary transition-colors py-1.5 sm:py-1 min-h-[36px] sm:min-h-0 flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <div className="text-center sm:text-left">
              <h3 className="text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-text-muted mb-2 sm:mb-4">
                {content.sections.services}
              </h3>
              <nav className="flex flex-col items-center sm:items-start">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[10px] sm:text-sm text-text-secondary hover:text-text-primary transition-colors py-1.5 sm:py-1 min-h-[36px] sm:min-h-0 flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-text-muted mb-2 sm:mb-4">
              {content.sections.contact}
            </h3>
            <div className="flex flex-col text-[10px] sm:text-sm items-center">
              <span className="text-text-primary font-medium py-1.5 sm:py-1">
                {content.contact.name}
              </span>
              <a
                href="https://maps.google.com/?q=Częstochowa,Poland"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 sm:gap-2 py-1.5 sm:py-1 min-h-[36px] sm:min-h-0"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-text-muted flex-shrink-0" />
                {/* Abbreviated on mobile, full on desktop */}
                <span className="sm:hidden">Częstochowa, PL</span>
                <span className="hidden sm:inline">{content.contact.location}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.owner.email}`}
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 sm:gap-2 py-1.5 sm:py-1 min-h-[36px] sm:min-h-0"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-text-muted flex-shrink-0" />
                {/* "Email me" on mobile, full email on desktop */}
                <span className="sm:hidden">Email me</span>
                <span className="hidden sm:inline">{SITE_CONFIG.owner.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.owner.phone}`}
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 sm:gap-2 py-1.5 sm:py-1 min-h-[36px] sm:min-h-0"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-text-muted flex-shrink-0" />
                <span>{content.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-4 sm:mt-10 md:mt-12 short:mt-4 flex items-center gap-3 sm:gap-6 md:gap-8">
          {socialLinks.map((social, index) => (
            <React.Fragment key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors min-h-[44px] min-w-[44px] justify-center"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[10px] font-medium uppercase tracking-widest hidden md:block">{social.label}</span>
              </a>
              {index < socialLinks.length - 1 && (
                <div className="hidden sm:block w-[1px] h-4 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Location keywords for SEO */}
        <p className="mt-3 sm:mt-8 md:mt-12 text-[8px] sm:text-[10px] text-zinc-600 tracking-wide text-center max-w-lg px-2 sm:px-0 short:text-[8px]">
          {content.seoText}
        </p>
      </motion.div>

      {/* Copyright footer sub-bar */}
      <div className="absolute bottom-2 sm:bottom-6 md:bottom-10 short:bottom-2 w-full px-2 sm:px-8 md:px-12 flex flex-row justify-between items-center text-[7px] sm:text-[9px] font-medium tracking-[0.1em] sm:tracking-[0.2em] text-zinc-700 uppercase">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
        <span>{content.contact.location}</span>
      </div>
    </footer>
  );
};

export default FooterSection;
