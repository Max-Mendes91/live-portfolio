/**
 * useMediaQuery Hook
 *
 * Custom hook for responsive design that tracks media query matches.
 * SSR-safe with hydration handling.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 639px)');
 * const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 */

'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track media query matches
 *
 * @param query - CSS media query string
 * @param defaultValue - Default value for SSR (defaults to false)
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string, defaultValue: boolean = false): boolean {
  // Use default value for SSR and initial hydration
  const [matches, setMatches] = useState<boolean>(defaultValue);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') {
      return;
    }

    // Create media query list
    const mediaQueryList = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Handler for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener (use modern API with fallback)
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

/**
 * Preset breakpoint hooks following Tailwind conventions
 * See DEVICE_BREAKPOINTS.md for device targeting
 */

/** Mobile: < 640px (XS Mobile + Mobile phones) */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 639px)');
}

/** Tablet: 640px - 1023px (sm: to lg:) */
export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
}

/** Desktop: >= 1024px (lg: and above) */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)');
}

/** Short height: <= 700px (Nest Hub, landscape tablets) */
export function useIsShortHeight(): boolean {
  return useMediaQuery('(max-height: 700px)');
}

/** Prefers reduced motion */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/** Detect Safari (excludes Chromium-based browsers like Chrome, Brave, Edge) */
export function useIsSafari(): boolean {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    );
  }, []);

  return isSafari;
}
