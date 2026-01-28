'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface SmokeEffectProps {
  /** Intensity of the smoke effect (0-1) */
  intensity?: number;
  /** Additional className for the container */
  className?: string;
}

const StaticGradient: React.FC<{ intensity: number }> = ({ intensity }) => (
  <div
    className="absolute inset-0"
    style={{
      background: `radial-gradient(ellipse 80% 60% at 40% 35%, rgba(255,255,255,${0.08 * intensity}) 0%, rgba(220,220,220,${0.05 * intensity}) 35%, transparent 70%)`,
    }}
  />
);

const SmokeEffect: React.FC<SmokeEffectProps> = ({
  intensity = 0.6,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  // Start animations 300px before element enters viewport so transition is seamless
  const isInView = useInView(containerRef, { margin: '300px 0px' });

  // Mobile or Reduced Motion: Show static gradient (performance optimization)
  if (!isDesktop || prefersReducedMotion) {
    return (
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <StaticGradient intensity={intensity} />
      </div>
    );
  }

  // Off-screen: show static gradient to free GPU resources (Safari performance)
  if (!isInView) {
    return (
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <StaticGradient intensity={intensity} />
      </div>
    );
  }

  // Desktop, in view, normal motion: Optimized 2-layer animated effect
  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Layer 1: Primary smoke - reduced blur for better performance */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '600px',
          height: '450px',
          top: '5%',
          left: '-5%',
          filter: 'blur(70px)',
          backfaceVisibility: 'hidden',
          background: `radial-gradient(ellipse at center, rgba(169,169,169,${0.1 * intensity}) 0%, rgba(255,255,255,${0.18 * intensity}) 40%, rgba(255,255,255,${0.08 * intensity}) 65%, transparent 85%)`,
        }}
        animate={{
          x: ['0%', '50%', '0%'],
          y: ['0%', '-10%', '0%'],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 2: Secondary smoke - counter movement */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '550px',
          height: '400px',
          top: '15%',
          right: '-8%',
          filter: 'blur(60px)',
          backfaceVisibility: 'hidden',
          background: `radial-gradient(ellipse at center, rgba(200,200,200,${0.08 * intensity}) 0%, rgba(255,255,255,${0.15 * intensity}) 45%, rgba(250,250,250,${0.06 * intensity}) 70%, transparent 85%)`,
        }}
        animate={{
          x: ['0%', '-45%', '0%'],
          y: ['0%', '10%', '0%'],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft ambient glow - static, no animation */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 50% 50%, rgba(220,220,220,${0.04 * intensity}) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
};

export default SmokeEffect;
