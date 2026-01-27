'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { STEPS } from '@/lib/constants';

const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative h-[700px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
              alt="Process Context"
              fill
              sizes="(max-width: 1024px) 0vw, 50vw"
              loading="lazy"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold block mb-2">Our Workflow</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Structured <br /> Excellence</h2>
            </motion.div>

            <div className="space-y-6">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  <span className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-zinc-500 max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
