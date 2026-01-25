/**
 * useParallax Hook
 *
 * Custom hook for scroll-based parallax animations with viewport detection.
 * Optimized for performance - pauses animations when element is off-screen.
 *
 * @example
 * const { x, y, opacity, isInView } = useParallax({
 *   containerRef,
 *   speed: 0.5,
 *   movement: { x: 100, y: 200 },
 *   fadeInAt: 0.1,
 *   fadeOutAt: 0.9,
 * });
 */

'use client';

import { useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
import { useMemo } from 'react';

interface Movement {
  x: number;
  y: number;
}

interface UseParallaxOptions {
  // Reference to the scroll container element
  containerRef: React.RefObject<HTMLElement | null>;
  // Parallax speed multiplier (0.1 = slow, 1.0 = match scroll speed)
  speed: number;
  // Movement direction and distance in pixels
  movement: Movement;
  // Scroll progress (0-1) when element starts fading in
  fadeInAt: number;
  // Scroll progress (0-1) when element starts fading out
  fadeOutAt: number;
}

interface UseParallaxReturn {
  // Horizontal transform value
  x: MotionValue<number>;
  // Vertical transform value
  y: MotionValue<number>;
  // Opacity value based on scroll position
  opacity: MotionValue<number>;
  // Whether the element is currently in viewport
  isInView: boolean;
  // Raw scroll progress (0-1) through the container
  scrollProgress: MotionValue<number>;
}

export function useParallax({
  containerRef,
  speed,
  movement,
  fadeInAt,
  fadeOutAt,
}: UseParallaxOptions): UseParallaxReturn {
  // Check if container is in view with a margin for early trigger
  // This prevents janky appearance when scrolling fast
  const isInView = useInView(containerRef, {
    margin: '100px 0px 100px 0px', // Trigger 100px before entering viewport
    once: false, // Keep tracking, don't stop after first view
  });

  // Track scroll progress through the container
  // offset: ['start end', 'end start'] means:
  // - 0 when container top reaches viewport bottom
  // - 1 when container bottom reaches viewport top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to horizontal movement
  // Movement is scaled by speed and only uses movement.x
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, movement.x * speed]
  );

  // Transform scroll progress to vertical movement
  // Movement is scaled by speed and only uses movement.y
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, movement.y * speed]
  );

  // Calculate opacity based on scroll position
  // Creates fade-in and fade-out effects at specified thresholds
  // Using longer fade duration (0.12) for smoother, slow-motion transitions
  const opacityKeyframes = useMemo(() => {
    const input: number[] = [];
    const output: number[] = [];

    // Fade duration - longer = smoother, more gradual transitions
    const fadeDuration = 0.12;

    // Handle fade-in
    if (fadeInAt <= 0) {
      // No fade-in, start at full opacity
      input.push(0);
      output.push(1);
    } else {
      // Gradual fade in from 0 to 1
      input.push(0, fadeInAt, fadeInAt + fadeDuration);
      output.push(0, 0, 1);
    }

    // Handle fade-out
    if (fadeOutAt >= 1) {
      // No fade-out, stay at full opacity
      input.push(1);
      output.push(1);
    } else {
      // Gradual fade out from 1 to 0
      input.push(fadeOutAt - fadeDuration, fadeOutAt, 1);
      output.push(1, 0, 0);
    }

    return { input, output };
  }, [fadeInAt, fadeOutAt]);

  const opacity = useTransform(
    scrollYProgress,
    opacityKeyframes.input,
    opacityKeyframes.output
  );

  return {
    x,
    y,
    opacity,
    isInView,
    scrollProgress: scrollYProgress,
  };
}

/**
 * useSimpleParallax Hook
 *
 * Simplified version for geometric shapes that only need
 * position transforms, no fade effects.
 */
interface UseSimpleParallaxOptions {
  containerRef: React.RefObject<HTMLElement | null>;
  speed: number;
  movement: Movement;
}

interface UseSimpleParallaxReturn {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isInView: boolean;
}

export function useSimpleParallax({
  containerRef,
  speed,
  movement,
}: UseSimpleParallaxOptions): UseSimpleParallaxReturn {
  const isInView = useInView(containerRef, {
    margin: '200px 0px 200px 0px',
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, movement.x * speed]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, movement.y * speed]
  );

  return {
    x,
    y,
    isInView,
  };
}

export default useParallax;
