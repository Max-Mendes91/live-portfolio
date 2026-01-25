'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import { TechIcon } from './icons';
import type { FloatingIconProps } from './types';
import { cn } from '@/lib/utils';

/**
 * FloatingIcon Component
 *
 * Individual tech icon with parallax scroll animation.
 * Uses transform-based animations for GPU acceleration.
 *
 * Responsive Behavior (from DEVICE_BREAKPOINTS.md):
 * - Size is scaled via sizeMultiplier prop on mobile
 * - Opacity reduced on mobile for subtlety
 * - Position uses percentage-based values for all screens
 */
const FloatingIcon: React.FC<FloatingIconProps> = ({
  config,
  containerRef,
  isMobile,
  sizeMultiplier,
  opacityMultiplier,
}) => {
  const {
    id,
    initialPosition,
    movement,
    parallaxSpeed,
    size,
    opacity,
    fadeInAt,
    fadeOutAt,
    rotation = 0,
    zIndex = 10,
  } = config;

  // Get parallax motion values from custom hook
  const { x, y, opacity: scrollOpacity, isInView } = useParallax({
    containerRef,
    speed: parallaxSpeed,
    movement,
    fadeInAt,
    fadeOutAt,
  });

  // Calculate responsive size
  // Desktop: full size | Mobile: scaled down
  const responsiveSize = isMobile ? size * sizeMultiplier : size;

  // Calculate final opacity with multiplier
  const baseOpacity = opacity * opacityMultiplier;

  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none',
        // Ensure smooth rendering with GPU acceleration
        'will-change-transform',
        // Hide when not in view for performance
        !isInView && 'invisible'
      )}
      style={{
        // Position based on percentage of container
        left: `${initialPosition.x}%`,
        top: `${initialPosition.y}%`,
        // Apply parallax transforms
        x,
        y,
        // Base rotation (static)
        rotate: rotation,
        // Layering
        zIndex,
      }}
    >
      {/* Icon wrapper with size and color */}
      <motion.div
        className={cn(
          // White icons for dark background visibility
          'text-text-primary',
          // Blue glow effect
          'drop-shadow-[0_0_40px_rgba(96,165,250,0.4)]'
        )}
        style={{
          width: responsiveSize,
          height: responsiveSize,
          // Scroll-based opacity with base multiplier
          opacity: scrollOpacity,
        }}
      >
        <div style={{ opacity: baseOpacity }}>
          <TechIcon id={id} size={responsiveSize} />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Memoize to prevent unnecessary re-renders
// Only re-render when config or responsive state changes
export default memo(FloatingIcon, (prevProps, nextProps) => {
  return (
    prevProps.config.id === nextProps.config.id &&
    prevProps.isMobile === nextProps.isMobile &&
    prevProps.sizeMultiplier === nextProps.sizeMultiplier &&
    prevProps.opacityMultiplier === nextProps.opacityMultiplier
  );
});
