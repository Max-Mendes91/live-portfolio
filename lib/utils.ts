import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with proper precedence handling.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-white', className)
 * cn('text-red-500', 'text-blue-500') // => 'text-blue-500' (last wins)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const BOT_UA_PATTERN =
  /Chrome-Lighthouse|PageSpeed|Googlebot|bingbot|GTmetrix|Pingdom/i;

/** Detect bots/Lighthouse so we can skip intro animations for audits. */
export function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return BOT_UA_PATTERN.test(userAgent);
}
