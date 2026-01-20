'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import PulseBadge from '@/components/ui/PulseBadge';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import { SITE_CONFIG } from '@/lib/seo/config';

export default function ContactPage() {
  const { owner } = SITE_CONFIG;

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
              <PulseBadge text="Kontakt" />
            </div>

            <h1 className="text-5xl md:text-7xl font-normal tracking-tighter text-white mb-8">
              Współpracujmy Razem
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              Masz pomysł na projekt? Chętnie o nim posłucham.
              Skontaktuj się i stwórzmy razem coś niesamowitego.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-normal tracking-tight text-white mb-8">
                Dane Kontaktowe
              </h2>

              <div className="space-y-6">
                <a
                  href={`mailto:${owner.email}`}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-1">
                      Email
                    </span>
                    <span className="text-white font-light">{owner.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${owner.phone}`}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-1">
                      Telefon
                    </span>
                    <span className="text-white font-light">{owner.phone}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#080808] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-1">
                      Lokalizacja
                    </span>
                    <span className="text-white font-light">
                      {owner.address.city}, {owner.address.country}
                    </span>
                    <span className="text-zinc-500 text-sm block mt-1">
                      Obsługuję klientów z Polski i całej Europy
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#080808] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-1">
                      Dostępność
                    </span>
                    <span className="text-white font-light">Pon - Pt: 9:00 - 18:00</span>
                    <span className="text-zinc-500 text-sm block mt-1">
                      Elastyczne godziny dla klientów zagranicznych
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-4">
                  Social Media
                </span>
                <div className="flex gap-4">
                  <a
                    href={owner.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={owner.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={owner.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-sm"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-normal tracking-tight text-white mb-8">
                Wyślij Wiadomość
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-2"
                    >
                      Imię
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Twoje imię"
                      className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="twoj@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-2"
                  >
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Zapytanie o projekt"
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-2"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Opowiedz mi o swoim projekcie..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex h-12 items-center justify-center px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:text-white/90 w-full sm:w-auto"
                >
                  {/* Top-right corner border with glow */}
                  <span className="absolute top-0 right-0 w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />
                  <span className="absolute top-0 right-0 w-[1px] h-8 bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />

                  {/* Bottom-left corner border with glow */}
                  <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />
                  <span className="absolute bottom-0 left-0 w-[1px] h-8 bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />

                  <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                    Wyślij Wiadomość
                    <Send className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-normal tracking-tight text-white mb-6">
              Nie Wiesz Czego Potrzebujesz?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto font-light">
              Zobacz moje usługi, żeby dowiedzieć się, jak mogę pomóc w Twoim projekcie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CornerGlowButton href="/pl/uslugi/web-development">Tworzenie Stron</CornerGlowButton>
              <CornerGlowButton href="/pl/projekty">Zobacz Portfolio</CornerGlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
