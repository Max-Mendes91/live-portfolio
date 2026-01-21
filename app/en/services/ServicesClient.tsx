'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Palette, Search, ShoppingCart } from 'lucide-react';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { SupportedLocale } from '@/types/seo';
import { Dictionary } from '@/types/i18n';

interface ServicesClientProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

const ServicesClient: React.FC<ServicesClientProps> = ({ dictionary }) => {
  const { services } = dictionary;

  const servicesList = [
    {
      icon: Code,
      title: services.webDevelopment.title,
      description: services.webDevelopment.description,
      features: services.webDevelopment.features,
      href: '/en/services/web-development',
    },
    {
      icon: Palette,
      title: services.webDesign.title,
      description: services.webDesign.description,
      features: services.webDesign.features,
      href: '/en/services/web-design',
    },
    {
      icon: Search,
      title: services.seo.title,
      description: services.seo.description,
      features: services.seo.features,
      href: '/en/services/seo',
    },
    {
      icon: ShoppingCart,
      title: services.ecommerce.title,
      description: services.ecommerce.description,
      features: services.ecommerce.features,
      href: '/en/services/ecommerce',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <PulseBadge text={services.title} />
            </div>

            <h1 className="text-5xl md:text-7xl font-normal tracking-tighter text-white mb-8">
              {services.subtitle}
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              Comprehensive web development services for businesses and startups. From simple
              websites to complex applications.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block h-full p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl font-normal tracking-tight text-white mb-4 group-hover:text-white/90 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="text-zinc-500 text-sm font-light flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Let&apos;s discuss your project and see how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CornerGlowButton href="/en/contact">Get Free Quote</CornerGlowButton>
              <CornerGlowButton href="/en/projects">View Projects</CornerGlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesClient;
