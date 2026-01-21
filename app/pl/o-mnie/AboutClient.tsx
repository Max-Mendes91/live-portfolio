'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Dictionary, SupportedLocale } from '@/types/i18n';

interface AboutClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

// Internal link mapping for bio text - Polish URLs
const linkPatterns: Record<string, string> = {
  'strony internetowe': '/pl/uslugi/tworzenie-stron',
  'sklepy online': '/pl/uslugi/sklepy-internetowe',
  'sklepy internetowe': '/pl/uslugi/sklepy-internetowe',
  'aplikacje webowe': '/pl/uslugi/tworzenie-stron',
  'optymalizuję pod SEO': '/pl/uslugi/pozycjonowanie',
  'FlowMate': '/pl/projekty',
  'React': 'https://react.dev',
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
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition-colors"
              >
                {segment}
              </a>
            );
          }
          return (
            <Link
              key={`${index}-${i}`}
              href={url}
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition-colors"
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

const AboutClient: React.FC<AboutClientProps> = ({ locale, dictionary }) => {
  const { aboutPage, nav } = dictionary;

  if (!aboutPage) return null;

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar locale={locale} dictionary={nav} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-zinc-500 mb-8"
          >
            <Link href="/pl" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <span className="text-zinc-400">O mnie</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8"
          >
            {aboutPage.heading}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-sm mb-12"
          >
            <MapPin className="w-4 h-4" />
            <span>Częstochowa, Polska</span>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {aboutPage.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg text-zinc-400 leading-relaxed"
              >
                {linkifyBio(paragraph)}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
          >
            {aboutPage.skills.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {aboutPage.skills.items.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-sm hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
          >
            {aboutPage.experience.title}
          </motion.h2>

          <div className="space-y-8">
            {aboutPage.experience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-white/20 rounded-full" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-medium text-white">{item.role}</h3>
                  <span className="text-zinc-500">·</span>
                  <span className="text-zinc-400">{item.company}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {item.period}
                </p>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
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
              href="https://github.com/Max-Mendes91"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/max-mendes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {aboutPage.cta.title}
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl">
              {aboutPage.cta.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/pl/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {aboutPage.cta.primaryButton}
              </Link>

              <Link
                href="/pl/projekty"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {aboutPage.cta.secondaryButton}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/pl/uslugi"
                className="inline-flex items-center gap-2 px-6 py-3 text-zinc-400 hover:text-white transition-colors"
              >
                {aboutPage.cta.tertiaryButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <Link href="/pl" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <Link href="/pl/uslugi" className="hover:text-white transition-colors">
              Usługi
            </Link>
            <Link href="/pl/projekty" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/pl/kontakt" className="hover:text-white transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;
