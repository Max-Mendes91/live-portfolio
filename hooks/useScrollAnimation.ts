'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseScrollAnimationOptions {
  /** Trigger animation only once (default: true) */
  once?: boolean;
  /** Root margin for IntersectionObserver (default: '0px 0px -50px 0px') */
  rootMargin?: string;
  /** Visibility threshold (default: 0.1) */
  threshold?: number;
}

/**
 * Hook to trigger CSS animations when element enters viewport
 * Returns a ref to attach to the element and a boolean indicating visibility
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
  const { once = true, rootMargin = '0px 0px -50px 0px', threshold = 0.1 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [once, rootMargin, threshold]);

  return [ref, isVisible];
}

/**
 * Hook to observe multiple children and add 'is-visible' class
 * Attach returned ref to parent container
 */
export function useScrollAnimationGroup(
  options: UseScrollAnimationOptions = {}
): RefObject<HTMLDivElement> {
  const { once = true, rootMargin = '0px 0px -50px 0px', threshold = 0.1 } = options;
  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      container.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { rootMargin, threshold }
    );

    // Observe all children with animate-on-scroll class
    container.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return containerRef;
}

export default useScrollAnimation;
