'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button"
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`
        group relative px-8 py-4 rounded-full
        bg-white/5 backdrop-blur-md
        border border-white/10
        text-white text-sm font-medium tracking-widest uppercase
        transition-[transform,background-color,border-color] duration-300 ease-out
        hover:bg-white/10
        hover:border-white/40
        hover:scale-105
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Outer glow - opacity transition instead of box-shadow */}
      <div className="absolute -inset-2 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Internal Shine Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

      {/* Radiant Bloom Background */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />
    </motion.button>
  );
};

export default GlowButton;
