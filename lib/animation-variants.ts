/**
 * Animation Variants with Reduced Motion Support
 *
 * Provides reusable Framer Motion animation presets that respect
 * user's prefers-reduced-motion preference for accessibility.
 *
 * Usage:
 * const variant = getResponsiveVariant(prefersReducedMotion, isDesktop);
 * <motion.div variants={fadeInUp} initial="initial" animate={variant} />
 */

import { Variants, Transition } from 'framer-motion';

/**
 * Get appropriate variant key based on user preferences
 */
export function getResponsiveVariant(
  prefersReducedMotion: boolean,
  isDesktop: boolean
): 'reduced' | 'mobile' | 'desktop' {
  if (prefersReducedMotion) return 'reduced';
  return isDesktop ? 'desktop' : 'mobile';
}

/**
 * Smooth easing curve (used for most animations)
 */
export const smoothEase = [0.16, 1, 0.3, 1] as const;

/**
 * Fade In Up - Scroll reveal animation
 * Desktop: Slides up with fade
 * Mobile: Slides up with fade (same as desktop)
 * Reduced: Quick fade only
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  desktop: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: smoothEase },
  },
  mobile: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: smoothEase },
  },
  reduced: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: 'linear' },
  },
};

/**
 * Fade In - Simple opacity fade
 * Desktop: Slow fade
 * Mobile: Slow fade (same as desktop)
 * Reduced: Quick fade
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  desktop: {
    opacity: 1,
    transition: { duration: 1, ease: smoothEase },
  },
  mobile: {
    opacity: 1,
    transition: { duration: 1, ease: smoothEase },
  },
  reduced: {
    opacity: 1,
    transition: { duration: 0.15, ease: 'linear' },
  },
};

/**
 * Height Reveal - For accordions and expanding elements
 * Uses height animation (Safari-compatible) instead of scaleY
 * Desktop: Height reveal with fade
 * Mobile: Height reveal with fade (faster)
 * Reduced: Instant appearance
 */
export const heightReveal: Variants = {
  initial: { height: 0, opacity: 0 },
  desktop: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: smoothEase },
  },
  mobile: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.2, ease: 'linear' },
  },
  reduced: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0 },
  },
};

/**
 * Stagger container for child animations
 */
export const staggerContainer: Variants = {
  initial: {},
  desktop: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  mobile: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  reduced: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

/**
 * Get transition settings based on preferences
 */
export function getTransition(
  prefersReducedMotion: boolean,
  normalTransition: Transition
): Transition {
  if (prefersReducedMotion) {
    return { duration: 0, ease: 'linear' };
  }
  return normalTransition;
}

/**
 * Get animation properties with reduced motion support
 */
export function getAnimateProps(
  prefersReducedMotion: boolean,
  normalProps: Record<string, any>
): Record<string, any> {
  if (prefersReducedMotion) {
    // Remove positional/scale animations, keep opacity only
    return {
      opacity: normalProps.opacity ?? 1,
    };
  }
  return normalProps;
}
