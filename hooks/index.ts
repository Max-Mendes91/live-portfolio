/**
 * Custom Hooks
 *
 * Reusable hooks for common functionality.
 */

// Parallax scroll animation
export { useParallax, useSimpleParallax } from './useParallax';

// Media query / responsive
export {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsShortHeight,
  usePrefersReducedMotion,
} from './useMediaQuery';

// Scroll-triggered CSS animations
export { useScrollAnimation, useScrollAnimationGroup } from './useScrollAnimation';
