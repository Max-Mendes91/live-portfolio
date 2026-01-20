'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Code2,
  Palette,
  Search,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';
import { SLUG_TO_SERVICE_KEY, SERVICE_SLUGS, getServicePath } from '@/lib/services/config';

// Service icons mapping
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  webDevelopment: <Code2 className="w-8 h-8" />,
  webDesign: <Palette className="w-8 h-8" />,
  seo: <Search className="w-8 h-8" />,
  ecommerce: <ShoppingCart className="w-8 h-8" />,
};

// Service content (EN)
const SERVICES_CONTENT = {
  webDevelopment: {
    title: 'Full Stack Web Development',
    badge: 'Development',
    description:
      'Custom web applications built with React, Next.js, and Node.js. From simple landing pages to complex web platforms - I create scalable, performant solutions tailored to your business needs.',
    features: [
      'React & Next.js Applications',
      'Node.js Backend Development',
      'REST & GraphQL APIs',
      'Database Design & Implementation',
      'Cloud Deployment (AWS, Vercel, Railway)',
      'Performance Optimization',
    ],
    ctaText: 'Start Your Project',
  },
  webDesign: {
    title: 'Web Design & UI/UX',
    badge: 'Design',
    description:
      'Modern, responsive web design focused on user experience and conversion. I create beautiful interfaces that not only look great but also convert visitors into customers.',
    features: [
      'UI/UX Design',
      'Responsive Web Design',
      'Figma Prototyping',
      'Design Systems',
      'Mobile-First Approach',
      'Conversion Rate Optimization',
    ],
    ctaText: 'Get a Design Quote',
  },
  seo: {
    title: 'SEO Optimization',
    badge: 'SEO',
    description:
      'Technical SEO, on-page optimization, and performance improvements to boost your search rankings. Get found by customers actively searching for your services on Google.',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Core Web Vitals Optimization',
      'Schema Markup (JSON-LD)',
      'Local SEO (Google My Business)',
      'Keyword Research & Strategy',
    ],
    ctaText: 'Get SEO Audit',
  },
  ecommerce: {
    title: 'E-commerce & Online Stores',
    badge: 'E-commerce',
    description:
      'Professional e-commerce solutions with payment integration, inventory management, and conversion optimization. Launch your online store and start selling to customers worldwide.',
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration (Stripe, PayPal)',
      'Inventory Management Systems',
      'Shopping Cart Optimization',
      'Multi-currency & Multi-language Support',
      'Order Management & Analytics',
    ],
    ctaText: 'Launch Your Store',
  },
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const serviceKey = SLUG_TO_SERVICE_KEY[slug];

  if (!serviceKey) {
    notFound();
  }

  const service = SERVICES_CONTENT[serviceKey as keyof typeof SERVICES_CONTENT];
  const icon = SERVICE_ICONS[serviceKey];

  // Get other services for "Related Services" section
  const otherServices = SERVICE_SLUGS.filter((s) => s !== slug).map((s) => ({
    slug: s,
    key: SLUG_TO_SERVICE_KEY[s],
    title: SERVICES_CONTENT[SLUG_TO_SERVICE_KEY[s] as keyof typeof SERVICES_CONTENT].title,
    path: getServicePath(s, 'en'),
  }));

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <PulseBadge text={service.badge} />
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                {icon}
              </div>
              <h1 className="text-5xl md:text-7xl font-normal tracking-tighter text-white">
                {service.title}
              </h1>
            </div>

            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed font-light">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-normal tracking-tight text-white mb-12">
              What&apos;s Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300 font-light">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto font-light">
              Let&apos;s discuss your project and see how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CornerGlowButton>{service.ctaText}</CornerGlowButton>
              <CornerGlowButton href="/#contact">Contact Me</CornerGlowButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-normal tracking-tight text-white mb-12">
              Other Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={s.path}
                  className="group p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                        {SERVICE_ICONS[s.key]}
                      </div>
                      <span className="text-white font-normal">{s.title}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
