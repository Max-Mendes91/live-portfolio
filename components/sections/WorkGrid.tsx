'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { ArrowUpRight, ArrowDownCircle } from 'lucide-react';
import { WorkGridDict } from '@/types/i18n';

interface WorkGridProps {
  dictionary?: WorkGridDict;
}

const WorkGrid: React.FC<WorkGridProps> = ({ dictionary }) => {
  // Fallback content for backward compatibility
  const content = {
    title: dictionary?.title ?? 'Recent Works',
    viewCasestudy: dictionary?.viewCasestudy ?? 'View Casestudy',
  };

  return (
    <section id="works" className="pb-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Screenshot Style Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <h2 className="text-2xl font-medium tracking-tight text-white/90">{content.title}</h2>
          <ArrowDownCircle className="w-5 h-5 text-white/40" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-[#0a0a0a] aspect-[3/4]"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-100 transition-all duration-700"
              />

              {/* Card Overlay as per screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="flex justify-center">
                  <button className="w-full backdrop-blur-lg bg-white/10 border border-white/20 py-3 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 opacity-100 group-hover:bg-white/20 transition-all duration-500">
                    {content.viewCasestudy}
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
