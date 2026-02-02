'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Quote, Clock, Layers, CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react';

import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { Display, Heading, Text, Badge, BinderClip } from '@/components/ui';
import { SupportedLocale, CaseStudyPageDict, CaseStudySection } from '@/types/i18n';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { getDictionary } from '@/lib/i18n/config';

interface CaseStudyClientProps {
  locale: SupportedLocale;
  caseStudyData: CaseStudyPageDict;
}

const CaseStudyClient: React.FC<CaseStudyClientProps> = ({ locale, caseStudyData }) => {
  const [dictionary, setDictionary] = React.useState<Awaited<ReturnType<typeof getDictionary>> | null>(null);
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = isDesktop && !prefersReducedMotion;

  React.useEffect(() => {
    getDictionary(locale).then(setDictionary);
  }, [locale]);

  if (!dictionary) return null;

  const { nav, footer } = dictionary;
  const { content, seo } = caseStudyData;

  return (
    <div className="relative">
      <FloatingTechIcons preset="case-study" />

      <div className="relative z-10 bg-background">
        <Navbar locale={locale} dictionary={nav} />
        <main className="relative min-h-screen bg-background overflow-hidden">

          {/* Hero Section */}
          <HeroSection
            content={content}
            seo={seo}
            shouldAnimate={shouldAnimate}
            prefersReducedMotion={prefersReducedMotion}
          />

          {/* Dynamic Content Sections */}
          {content.sections.map((section, index) => (
            <ContentSection
              key={section.id}
              section={section}
              index={index}
              shouldAnimate={shouldAnimate}
              locale={locale}
            />
          ))}

          {/* Tech Stack Section */}
          <TechStackSection
            techStack={content.techStack}
            shouldAnimate={shouldAnimate}
          />

          {/* CTA Section */}
          <CTASection
            cta={content.cta}
            shouldAnimate={shouldAnimate}
          />

          <div className="h-[20vh]" />
        </main>
      </div>

      <div className="sticky bottom-0 z-0 h-screen-safe w-full">
        <FooterSection locale={locale} dictionary={footer} hideCTA />
      </div>
    </div>
  );
};

// Hero Section Component
interface HeroSectionProps {
  content: CaseStudyPageDict['content'];
  seo: CaseStudyPageDict['seo'];
  shouldAnimate: boolean;
  prefersReducedMotion: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, seo, shouldAnimate, prefersReducedMotion }) => {
  const { hero } = content;

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 100, scale: prefersReducedMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.15 : 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative max-w-5xl mx-auto border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden"
      >
        <div className="mesh-gradient-bg" />

        <div className="relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <Badge variant="outline" size="lg">
              {hero.badge}
            </Badge>
          </div>

          {/* Title */}
          <Display size="md" as="h1" className="text-center mb-4 sm:mb-6">
            {seo.h1}
          </Display>

          {/* Subtitle */}
          <Text size="xl" color="secondary" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            {hero.subtitle}
          </Text>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {hero.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="text-center p-4 rounded-xl bg-surface/50 border border-border-subtle"
              >
                <Text size="xl" weight="medium" className="text-text-primary mb-1 font-bold">
                  {metric.value}
                </Text>
                <Text size="sm" color="muted">
                  {metric.label}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {hero.tags.map((tag, index) => (
              <Badge key={index} variant="default" size="sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Live URL Button */}
          {hero.liveUrl && (
            <div className="flex justify-center">
              <CornerGlowButton
                href={hero.liveUrl}
                target="_blank"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                {hero.liveUrlCta || 'View Live Site'}
              </CornerGlowButton>
            </div>
          )}
        </div>
      </motion.div>

      {/* Hero Image */}
      {hero.image && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 mt-8"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <Image
              src={hero.image}
              alt={seo.h1}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

// Content Section Component
interface ContentSectionProps {
  section: CaseStudySection;
  index: number;
  shouldAnimate: boolean;
  locale: SupportedLocale;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section, index, shouldAnimate, locale }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="relative max-w-5xl mx-auto">
        <BinderClip position="top-left" size="md" />
        <BinderClip position="top-right" size="md" />

        <div className={`border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12 ${isEven ? 'bg-background' : 'bg-surface/30'}`}>
          <motion.div
            initial={{ opacity: 0, y: shouldAnimate ? 30 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading size="lg" as="h2" className="mb-6 sm:mb-8">
              {section.title}
            </Heading>
          </motion.div>

          {/* Regular Content Paragraphs */}
          {section.content && (
            <div className="space-y-4 sm:space-y-5">
              {section.content.map((paragraph, pIndex) => (
                <motion.div
                  key={pIndex}
                  initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                >
                  <Text size="lg" color="secondary" className="leading-relaxed">
                    {paragraph}
                  </Text>
                </motion.div>
              ))}
            </div>
          )}

          {/* Highlight Quote */}
          {section.highlight && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle"
            >
              <Quote className="w-8 h-8 text-text-muted mb-4" />
              <Text size="xl" className="text-text-primary italic mb-4">
                &ldquo;{section.highlight.quote}&rdquo;
              </Text>
              <Text size="sm" color="muted">
                — {section.highlight.author}
                {section.highlight.source && `, ${section.highlight.source}`}
              </Text>
            </motion.div>
          )}

          {/* Subsections (Technical Challenges) */}
          {section.subsections && (
            <div className="mt-8 space-y-8">
              {section.subsections.map((subsection, sIndex) => (
                <motion.div
                  key={sIndex}
                  initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sIndex * 0.1 }}
                  className="pl-4 sm:pl-6 border-l-2 border-border"
                >
                  <Heading size="md" as="h3" className="mb-4">
                    {subsection.title}
                  </Heading>
                  <div className="space-y-3">
                    {subsection.content.map((para, pIndex) => (
                      <Text key={pIndex} color="secondary" className="leading-relaxed">
                        {para}
                      </Text>
                    ))}
                  </div>
                  {subsection.link && (
                    <Link
                      href={subsection.link.href}
                      className="inline-flex items-center gap-2 mt-4 text-text-primary hover:text-text-secondary transition-colors group"
                    >
                      <span className="underline decoration-border underline-offset-4 group-hover:decoration-text-secondary">
                        {subsection.link.text}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Timeline (Build Process) */}
          {section.timeline && (
            <motion.div
              initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 mb-8 flex flex-wrap gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-subtle">
                <Clock className="w-4 h-4 text-text-muted" />
                <Text size="sm" color="secondary">
                  {section.timeline.start} → {section.timeline.end}
                </Text>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-subtle">
                <Layers className="w-4 h-4 text-text-muted" />
                <Text size="sm" color="secondary">
                  {section.timeline.hours} hours
                </Text>
              </div>
            </motion.div>
          )}

          {/* Stack Decisions Table */}
          {section.stackDecisions && (
            <motion.div
              initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-text-muted text-sm font-medium">Layer</th>
                    <th className="text-left py-3 px-4 text-text-muted text-sm font-medium">Choice</th>
                    <th className="text-left py-3 px-4 text-text-muted text-sm font-medium hidden sm:table-cell">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {section.stackDecisions.map((decision, dIndex) => (
                    <tr key={dIndex} className="border-b border-border-subtle">
                      <td className="py-3 px-4 text-text-secondary text-sm">{decision.layer}</td>
                      <td className="py-3 px-4 text-text-primary text-sm font-medium">{decision.choice}</td>
                      <td className="py-3 px-4 text-text-muted text-sm hidden sm:table-cell">{decision.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* Section Link */}
          {section.link && (
            <motion.div
              initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <Link
                href={section.link.href}
                className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors group"
              >
                <span className="underline decoration-border underline-offset-4 group-hover:decoration-text-secondary">
                  {section.link.text}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}

          {/* Scale Metrics */}
          {section.metrics && (
            <motion.div
              initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            >
              {section.metrics.map((metric, mIndex) => (
                <div key={mIndex} className="text-center p-4 rounded-xl bg-surface border border-border-subtle">
                  <Text size="xl" weight="medium" className="text-text-primary mb-1 font-bold">
                    {metric.value}
                  </Text>
                  <Text size="xs" color="muted">
                    {metric.label}
                  </Text>
                </div>
              ))}
            </motion.div>
          )}

          {/* Features List */}
          {section.features && (
            <motion.div
              initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {section.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <Text size="sm" color="secondary">
                    {feature}
                  </Text>
                </div>
              ))}
            </motion.div>
          )}

          {/* Lessons Learned */}
          {section.lessonsLearned && (
            <motion.div
              initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6"
            >
              {section.lessonsLearned.map((lesson, lIndex) => (
                <div key={lIndex} className="p-5 sm:p-6 rounded-xl bg-surface border border-border-subtle">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <Heading size="sm" as="h4" className="mb-2">
                        {lesson.title}
                      </Heading>
                      <Text color="secondary" className="leading-relaxed">
                        {lesson.content}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// Tech Stack Section Component
interface TechStackSectionProps {
  techStack: CaseStudyPageDict['content']['techStack'];
  shouldAnimate: boolean;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ techStack, shouldAnimate }) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="relative max-w-5xl mx-auto">
        <BinderClip position="top-left" size="md" />
        <BinderClip position="top-right" size="md" />

        <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldAnimate ? 30 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading size="lg" as="h2" className="mb-8 sm:mb-10">
              {techStack.title}
            </Heading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-xl bg-surface border border-border-subtle"
              >
                <Text size="sm" color="muted" className="uppercase tracking-wider mb-3">
                  {category.name}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, iIndex) => (
                    <Badge key={iIndex} variant="outline" size="sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
interface CTASectionProps {
  cta: CaseStudyPageDict['content']['cta'];
  shouldAnimate: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ cta, shouldAnimate }) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="relative max-w-4xl mx-auto">
        <BinderClip position="top-left" size="md" />
        <BinderClip position="top-right" size="md" />

        <div className="border-t border-border rounded-t-[1.5rem] sm:rounded-t-[2rem] pt-10 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldAnimate ? 30 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Display size="sm" as="h2" className="mb-4 sm:mb-5 md:mb-6">
              {cta.title}
            </Display>
            <Text color="secondary" className="mb-8 sm:mb-10 max-w-2xl mx-auto">
              {cta.subtitle}
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CornerGlowButton href={cta.primaryButton.href}>
                {cta.primaryButton.text}
              </CornerGlowButton>

              <CornerGlowButton href={cta.secondaryButton.href}>
                {cta.secondaryButton.text}
              </CornerGlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyClient;
