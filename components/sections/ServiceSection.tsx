'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Fingerprint,
  Scissors,
  Package,
  Layout
} from 'lucide-react';
import CornerGlowButton from '@/components/ui/CornerGlowButton';
import PulseBadge from '@/components/ui/PulseBadge';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all duration-500 group flex flex-col justify-between"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-lg font-normal tracking-tight text-white">
        {title}
      </h3>
    </div>

    <div className="h-[1px] bg-white/5 w-full mb-4" />

    <p className="font-light tracking-tight text-zinc-400 text-sm leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

const MarqueeRow: React.FC<{ items: string[]; direction: 'left' | 'right' }> = ({ items, direction }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex gap-4 py-2"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 whitespace-nowrap text-[10px] font-medium uppercase tracking-widest text-zinc-500 hover:text-white hover:bg-white/10 transition-all cursor-default"
          >
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ServiceSection: React.FC = () => {
  const marqueeItems1 = [
    "Brand Migration", "Package Design", "Branding", "Slide Decks", "Copywriting", "Brand Graphics"
  ];

  const marqueeItems2 = [
    "Icons", "Brand Visibility", "Brand Integrations", "Optimization", "Brand Landing Pages", "Social Media"
  ];

  return (
    <section className="relative w-full bg-[#050505] pt-20">
      {/* The "Panel" Line & Container */}
      <div className="max-w-[90rem] mx-auto border-t border-white/10 rounded-t-[3rem] bg-[#050505] relative z-10 overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* Content Container */}
        <div className="px-6 md:px-12 py-24 space-y-20">

          {/* Block A: Service Hero (Split Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <PulseBadge text="Design services" />
              </div>

              <h2 className="text-6xl md:text-8xl font-normal tracking-tighter leading-tight mb-8 text-white">
                Services
              </h2>

              <p className="font-light tracking-tight text-zinc-400 text-lg mb-10 max-w-md leading-relaxed opacity-80">
                Helping businesses standout with brand identity packaging that captivates and converts effectively.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {["Product Design", "Brand Identity Design", "Branding", "Packaging Design", "Mockup Design"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-zinc-500 uppercase font-medium tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <CornerGlowButton>Book a Free Call</CornerGlowButton>
                <CornerGlowButton>See Projects</CornerGlowButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl border border-white/5"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
                alt="Design Showcase"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full opacity-60 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </motion.div>
          </div>

          {/* Block B: Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              icon={<Fingerprint className="w-5 h-5" />}
              title="Brand Identity"
              desc="Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems."
            />
            <FeatureCard
              icon={<Scissors className="w-5 h-5" />}
              title="Brand Design"
              desc="Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers."
            />
            <FeatureCard
              icon={<Package className="w-5 h-5" />}
              title="Package Design"
              desc="Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview."
            />
            <FeatureCard
              icon={<Layout className="w-5 h-5" />}
              title="Mockup Design"
              desc="Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters."
            />
          </div>

          {/* Block C: Dual Infinite Marquee with Side Fades */}
          <div className="relative space-y-6 pt-12">
            <MarqueeRow items={marqueeItems1} direction="left" />
            <MarqueeRow items={marqueeItems2} direction="right" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
