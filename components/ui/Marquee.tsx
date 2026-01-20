'use client';

import React from 'react';
import { TAGS } from '@/lib/constants';

const Marquee: React.FC = () => {
  return (
    <div className="py-20 border-y border-white/5 overflow-hidden flex whitespace-nowrap bg-[#050505] relative z-10">
      <div className="flex animate-marquee gap-8">
        {[...TAGS, ...TAGS].map((tag, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="px-8 py-3 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-sm font-semibold uppercase tracking-widest text-zinc-300">
              {tag}
            </span>
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
