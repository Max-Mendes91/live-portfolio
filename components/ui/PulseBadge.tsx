'use client';

import React from "react";

interface PulseBadgeProps {
  text: string;
}

const PulseBadge: React.FC<PulseBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] w-fit">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
      </span>
      <span className="text-[10px] font-bold tracking-[0.25em] text-white uppercase opacity-80">
        {text}
      </span>
    </div>
  );
};

export default PulseBadge;
