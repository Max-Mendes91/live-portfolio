'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CornerGlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const CornerGlowButton: React.FC<CornerGlowButtonProps> = ({
  children,
  onClick,
  href,
  className = "",
}) => {
  const buttonClasses = `group relative inline-flex h-10 sm:h-11 md:h-12 items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-white transition-all duration-300 hover:text-white/90 ${className}`;

  const content = (
    <>
      {/* Top-right corner border with glow */}
      <span className="absolute top-0 right-0 w-6 sm:w-7 md:w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />
      <span className="absolute top-0 right-0 w-[1px] h-6 sm:h-7 md:h-8 bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />

      {/* Bottom-left corner border with glow */}
      <span className="absolute bottom-0 left-0 w-6 sm:w-7 md:w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />
      <span className="absolute bottom-0 left-0 w-[1px] h-6 sm:h-7 md:h-8 bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />

      {/* Button text */}
      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
};

export default CornerGlowButton;
