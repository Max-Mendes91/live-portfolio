'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { Display, Heading, Text } from '@/components/ui';
import { Dictionary, SupportedLocale } from '@/types/i18n';
import { SITE_CONFIG } from '@/lib/seo/config';

interface AboutClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

// Internal link mapping for bio text - English URLs
const linkPatterns: Record<string, string> = {
  'business websites': '/en/services/web-development',
  'e-commerce stores': '/en/services/ecommerce-development',
  'web applications': '/en/services/saas-web-apps',
  'SEO optimization': '/en/services/seo-performance-optimization',
  FlowMate: '/en/projects',
  React: 'https://react.dev',
  'Next.js': 'https://nextjs.org',
};

function linkifyBio(text: string): React.ReactNode {
  let result: React.ReactNode[] = [text];

  Object.entries(linkPatterns).forEach(([phrase, url]) => {
    result = result.flatMap((part, index) => {
      if (typeof part !== 'string') return part;

      const regex = new RegExp(`(${phrase})`, 'gi');
      const parts = part.split(regex);

      return parts.map((segment, i) => {
        if (segment.toLowerCase() === phrase.toLowerCase()) {
          const isExternal = url.startsWith('http');
          if (isExternal) {
            return (
              <a
                key={`${index}-${i}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-secondary transition-colors"
              >
                {segment}
              </a>
            );
          }
          return (
            <Link
              key={`${index}-${i}`}
              href={url}
              className="text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-secondary transition-colors"
            >
              {segment}
            </Link>
          );
        }
        return segment;
      });
    });
  });

  return result;
}

// Shared section container style (matching services page)
const sectionContainerStyle = "max-w-[90rem] mx-auto border-t border-border rounded-t-[3rem] bg-background relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]";

const AboutClient: React.FC<AboutClientProps> = ({ locale, dictionary }) => {
  const { aboutPage, nav, footer } = dictionary;

  if (!aboutPage) return null;

  return (
    <div className="relative">
      {/* Main content - sits above footer */}
      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-48 pb-4 overflow-hidden">
        <motion.div
          initial={{ y: 200, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            y: {
              type: "spring",
              damping: 25,
              stiffness: 80,
              mass: 1.2,
            },
          }}
          className="max-w-4xl mx-auto border-t border-white/10 rounded-t-[2rem] pt-20 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-12"
        >
          <div className="text-center flex flex-col items-center">
            <div className="mb-8">
              <PulseBadge text={aboutPage.location} />
            </div>

            <Display size="md" as="h1" className="mb-8">
              {aboutPage.heading}
            </Display>
          </div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-12 lg:py-20">
        <div className={sectionContainerStyle + " pt-16 lg:pt-24 pb-16 lg:pb-24"}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="space-y-6">
              {aboutPage.bio.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Text size="lg" color="secondary" className="leading-relaxed">
                    {linkifyBio(paragraph)}
                  </Text>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto border-t border-white/10 rounded-t-[2rem] pt-16 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading size="lg" as="h2" className="mb-10">
              {aboutPage.skills.title}
            </Heading>
          </motion.div>

          {/* Categorized Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {aboutPage.skills.categories?.map((category, index) => (
              <div key={index}>
                <Text size="sm" color="muted" className="uppercase tracking-widest mb-3">
                  {category.name}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-zinc-900/50 border border-white/5 text-xs font-medium text-zinc-300 hover:bg-zinc-800 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 lg:py-20">
        <div className={sectionContainerStyle + " pt-16 lg:pt-24 pb-16 lg:pb-24"}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heading size="lg" as="h2" className="mb-8">
                {aboutPage.experience.title}
              </Heading>
            </motion.div>

            <div className="space-y-8">
              {aboutPage.experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-surface-hover rounded-full" />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Heading size="sm" as="h3">{item.role}</Heading>
                    <span className="text-text-muted">·</span>
                    <Text color="secondary">{item.company}</Text>
                  </div>
                  <Text size="sm" color="muted" className="mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {item.period}
                  </Text>
                  <Text color="secondary" className="leading-relaxed">{item.description}</Text>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href={SITE_CONFIG.owner.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>{aboutPage.social.github}</span>
              </a>
              <a
                href={SITE_CONFIG.owner.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>{aboutPage.social.linkedin}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decision Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto border-t border-white/10 rounded-t-[2rem] pt-16 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Display size="sm" as="h2" className="mb-6">
              {aboutPage.cta.title}
            </Display>
            <Text color="secondary" className="mb-10 max-w-2xl mx-auto">
              {aboutPage.cta.description}
            </Text>

            <CornerGlowButton href="/en/contact">{aboutPage.cta.button}</CornerGlowButton>
          </motion.div>
        </div>
      </section>

          {/* Spacer for footer reveal */}
          <div className="h-[20vh]" />
        </main>
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-0 h-screen w-full">
        <FooterSection locale={locale} dictionary={footer} hideCTA />
      </div>
    </div>
  );
};

export default AboutClient;
