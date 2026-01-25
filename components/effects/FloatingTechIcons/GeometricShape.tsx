'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useSimpleParallax } from '@/hooks/useParallax';
import type { GeometricShapeProps } from './types';
import { cn } from '@/lib/utils';

/**
 * GeometricShape Component
 *
 * Decorative background shapes that move with parallax.
 * Rendered as pure white outlines at very low opacity (4-8%).
 *
 * Uses simpler parallax without fade effects since shapes
 * should remain subtle throughout the scroll.
 */
const GeometricShape: React.FC<GeometricShapeProps> = ({
  config,
  containerRef,
  isMobile,
  sizeMultiplier,
}) => {
  const { type, position, size, parallaxSpeed, opacity, rotation = 0 } = config;

  // Get simple parallax motion values (no fade)
  const { x, y, isInView } = useSimpleParallax({
    containerRef,
    speed: parallaxSpeed,
    movement: { x: 30, y: 150 }, // Subtle movement for shapes
  });

  // Calculate responsive size
  const responsiveSize = isMobile ? size * sizeMultiplier : size;

  // Skip rendering if not in view (performance optimization)
  if (!isInView) {
    return null;
  }

  // Render shape based on type
  const renderShape = () => {
    // Common styles for all shapes
    // Uses semantic border color for consistency
    const commonClasses = cn(
      'absolute',
      'border border-text-primary', // White border using semantic token
      'pointer-events-none'
    );

    switch (type) {
      case 'circle':
        return (
          <div
            className={cn(commonClasses, 'rounded-full')}
            style={{
              width: responsiveSize,
              height: responsiveSize,
              opacity,
            }}
          />
        );

      case 'square':
        return (
          <div
            className={commonClasses}
            style={{
              width: responsiveSize,
              height: responsiveSize,
              opacity,
              transform: `rotate(${rotation}deg)`,
            }}
          />
        );

      case 'triangle':
        // Triangle using CSS borders
        // Creates equilateral triangle outline effect
        return (
          <div
            className="absolute pointer-events-none"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${responsiveSize / 2}px solid transparent`,
              borderRight: `${responsiveSize / 2}px solid transparent`,
              borderBottom: `${responsiveSize * 0.866}px solid rgba(255, 255, 255, ${opacity})`,
              transform: `rotate(${rotation}deg)`,
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none',
        'will-change-transform'
      )}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        x,
        y,
        // Shapes at lowest z-index (behind icons)
        zIndex: 1,
      }}
    >
      {renderShape()}
    </motion.div>
  );
};

// Memoize for performance
export default memo(GeometricShape, (prevProps, nextProps) => {
  return (
    prevProps.config.type === nextProps.config.type &&
    prevProps.config.position.x === nextProps.config.position.x &&
    prevProps.config.position.y === nextProps.config.position.y &&
    prevProps.isMobile === nextProps.isMobile &&
    prevProps.sizeMultiplier === nextProps.sizeMultiplier
  );
});
