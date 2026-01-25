'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsDesktop } from '@/hooks/useMediaQuery';
import { TechIcon } from './icons';
import { mergeWithPreset } from './presets';
import type { FloatingTechIconsProps, FloatingIconConfig } from './types';
import { cn } from '@/lib/utils';

/**
 * FloatingTechIcons Component
 *
 * Fixed-position scroll-based parallax with tech icons.
 * Icons appear in viewport margins (left/right edges).
 * Sequential reveal: icons appear and disappear as you scroll.
 *
 * Only renders on desktop/laptop viewports (≥ 1024px) for performance.
 * Mobile and tablet devices skip rendering entirely.
 *
 * Uses document scroll progress for full-page tracking.
 */
const FloatingTechIcons: React.FC<FloatingTechIconsProps> = ({
  preset = 'about',
  customConfig,
  className,
  showShapes = false, // Disabled by default now
  opacityMultiplier = 1,
}) => {
  // Only render on desktop (≥ 1024px / lg: breakpoint)
  const isDesktop = useIsDesktop();

  // Track document scroll progress (0 at top, 1 at bottom)
  const { scrollYProgress } = useScroll();

  // Get configuration
  const config = useMemo(() => {
    if (customConfig?.icons && customConfig.icons.length > 0) {
      return {
        name: 'custom',
        icons: customConfig.icons,
        shapes: customConfig.shapes ?? [],
      };
    }
    return mergeWithPreset(preset, customConfig);
  }, [preset, customConfig]);

  // Don't render on mobile/tablet - performance optimization
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className={cn(
        // Fixed position - stays in viewport
        'fixed inset-0',
        // Don't capture pointer events
        'pointer-events-none',
        // Above content backgrounds (z-10) but below navbar (z-50)
        'z-[15]',
        className
      )}
      aria-hidden="true"
    >
      {config.icons.map((iconConfig, index) => (
        <FloatingIconFixed
          key={`icon-${iconConfig.id}-${index}`}
          config={iconConfig}
          scrollYProgress={scrollYProgress}
          opacityMultiplier={opacityMultiplier}
        />
      ))}
    </div>
  );
};

/**
 * Individual floating icon with scroll-based animations
 * Only rendered on desktop viewports (≥ 1024px)
 */
interface FloatingIconFixedProps {
  config: FloatingIconConfig;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  opacityMultiplier: number;
}

const FloatingIconFixed: React.FC<FloatingIconFixedProps> = ({
  config,
  scrollYProgress,
  opacityMultiplier,
}) => {
  const {
    id,
    initialPosition,
    movement,
    parallaxSpeed,
    size,
    opacity: baseOpacity,
    fadeInAt,
    fadeOutAt,
    rotation = 0,
  } = config;

  // Parallax movement based on scroll
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, movement.y * parallaxSpeed]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, movement.x * parallaxSpeed]
  );

  // Opacity based on scroll position (sequential reveal)
  const scrollOpacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, fadeInAt - 0.05),
      fadeInAt,
      fadeOutAt,
      Math.min(1, fadeOutAt + 0.05),
    ],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute pointer-events-none will-change-transform"
      style={{
        left: `${initialPosition.x}%`,
        top: `${initialPosition.y}%`,
        x,
        y,
        rotate: rotation,
      }}
    >
      <motion.div
        className={cn(
          // White icons with subtle glow
          'text-text-primary/70',
          'drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]'
        )}
        style={{
          width: size,
          height: size,
          opacity: scrollOpacity,
        }}
      >
        <div style={{ opacity: baseOpacity * opacityMultiplier }}>
          <TechIcon id={id} size={size} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingTechIcons;
