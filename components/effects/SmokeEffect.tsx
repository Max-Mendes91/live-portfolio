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

  // Desktop, in view, normal motion: Full 3-layer animated effect
  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Layer 1: Metallic grey core with white edges */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '800px',
          height: '600px',
          top: '5%',
          left: '-5%',
          filter: 'blur(100px)',
          backfaceVisibility: 'hidden',
          background: `radial-gradient(ellipse at center, rgba(169,169,169,${0.08 * intensity}) 0%, rgba(192,192,192,${0.1 * intensity}) 25%, rgba(255,255,255,${0.15 * intensity}) 50%, rgba(255,255,255,${0.06 * intensity}) 70%, transparent 85%)`,
        }}
        animate={{
          x: ['0%', '40%', '80%', '40%', '0%'],
          y: ['0%', '-15%', '10%', '20%', '0%'],
          scale: [1, 1.1, 0.92, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 2: Silver core with bright white outer */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '700px',
          height: '550px',
          top: '20%',
          right: '-10%',
          filter: 'blur(90px)',
          backfaceVisibility: 'hidden',
          background: `radial-gradient(ellipse at center, rgba(161,161,170,${0.06 * intensity}) 0%, rgba(212,212,216,${0.1 * intensity}) 30%, rgba(255,255,255,${0.14 * intensity}) 55%, rgba(250,250,250,${0.05 * intensity}) 70%, transparent 85%)`,
        }}
        animate={{
          x: ['0%', '-50%', '-90%', '-45%', '0%'],
          y: ['0%', '12%', '-8%', '15%', '0%'],
          scale: [1, 0.95, 1.08, 0.98, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 3: White outer glow */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '900px',
          height: '700px',
          top: '-10%',
          left: '10%',
          filter: 'blur(120px)',
          backfaceVisibility: 'hidden',
          background: `radial-gradient(ellipse at center, transparent 20%, rgba(255,255,255,${0.1 * intensity}) 45%, rgba(255,255,255,${0.05 * intensity}) 65%, transparent 80%)`,
        }}
        animate={{
          x: ['-5%', '20%', '45%', '15%', '-5%'],
          y: ['5%', '-10%', '12%', '-5%', '5%'],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft ambient glow - static, no animation */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 50% 50%, rgba(220,220,220,${0.03 * intensity}) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
};

export default SmokeEffect;
