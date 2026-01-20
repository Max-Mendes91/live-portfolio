'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';

// Extended project data for the portfolio page (Polish)
const PORTFOLIO_PROJECTS = [
  {
    id: '1',
    title: 'Platforma E-commerce',
    category: 'Tworzenie Stron',
    description: 'Kompleksowe rozwiązanie e-commerce z integracją płatności, zarządzaniem magazynem i analityką w czasie rzeczywistym.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'Panel Analityczny SaaS',
    category: 'UI/UX Design',
    description: 'Nowoczesny panel analityczny z wizualizacją danych w czasie rzeczywistym i responsywnym designem.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'Strona Korporacyjna',
    category: 'Tworzenie Stron',
    description: 'Wysokowydajna strona korporacyjna z optymalizacją SEO i wsparciem wielojęzycznym.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    title: 'System Rezerwacji',
    category: 'Full Stack',
    description: 'Platforma rezerwacji wizyt z integracją kalendarza i automatycznymi powiadomieniami.',
    tech: ['React', 'Node.js', 'MongoDB', 'Twilio'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    title: 'Aplikacja Restauracyjna',
    category: 'Mobile Web',
    description: 'Progresywna aplikacja webowa do zamawiania w restauracji ze śledzeniem zamówień w czasie rzeczywistym.',
    tech: ['Next.js', 'PWA', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    title: 'Szablon Portfolio',
    category: 'Web Design',
    description: 'Minimalistyczny szablon portfolio z ciemnym motywem i płynnymi animacjami.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <Link
          href="/pl"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Wróć do Strony Głównej
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
              <PulseBadge text="Portfolio" />
            </div>

            <h1 className="text-5xl md:text-7xl font-normal tracking-tighter text-white mb-8">
              Wybrane Projekty
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              Kolekcja projektów tworzenia stron i designu, nad którymi pracowałem.
              Każdy projekt to unikalne wyzwanie i rozwiązanie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Masz Pomysł na Projekt?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto font-light">
              Porozmawiajmy o Twoim projekcie i zobaczmy, jak mogę pomóc wcielić Twoje pomysły w życie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CornerGlowButton href="/pl/kontakt">Bezpłatna Wycena</CornerGlowButton>
              <CornerGlowButton href="/pl/uslugi/web-development">Zobacz Usługi</CornerGlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
