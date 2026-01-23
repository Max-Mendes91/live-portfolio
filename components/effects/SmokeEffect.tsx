'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SmokeEffectProps {
  /** Intensity of the smoke effect (0-1) */
  intensity?: number;
  /** Additional className for the container */
  className?: string;
}

const SmokeEffect: React.FC<SmokeEffectProps> = ({
  intensity = 0.6,
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Layer 1: Metallic grey core with white edges - GPU composited */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '800px',
          height: '600px',
          top: '5%',
          left: '-5%',
          filter: 'blur(100px)',
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

      {/* Layer 2: Silver core with bright white outer - GPU composited */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '700px',
          height: '550px',
          top: '20%',
          right: '-10%',
          filter: 'blur(90px)',
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

      {/* Layer 3: White outer glow - GPU composited */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '900px',
          height: '700px',
          top: '-10%',
          left: '10%',
          filter: 'blur(120px)',
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
