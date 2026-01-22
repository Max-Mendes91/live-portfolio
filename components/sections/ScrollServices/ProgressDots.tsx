'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressDotsProps {
  activeIndex: number;
  total: number;
  className?: string;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({
  activeIndex,
  total,
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute right-8 lg:right-12 top-1/2 -translate-y-1/2',
        'flex flex-col gap-4',
        className
      )}
    >
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          className={cn(
            'w-2.5 h-2.5 rounded-full',
            'border border-border',
            'cursor-pointer',
            'transition-colors duration-300',
            'focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background'
          )}
          animate={{
            backgroundColor: index === activeIndex ? '#ffffff' : 'transparent',
            scale: index === activeIndex ? 1.4 : 1,
            boxShadow:
              index === activeIndex
                ? '0 0 20px rgba(255, 255, 255, 0.6)'
                : '0 0 0 rgba(255, 255, 255, 0)',
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-label={`Go to service ${index + 1}`}
          aria-current={index === activeIndex ? 'step' : undefined}
        />
      ))}

      {/* Progress line connecting dots */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border -z-10" />
    </div>
  );
};

export default ProgressDots;
