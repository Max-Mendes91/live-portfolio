/**
 * FloatingTechIcons Module
 *
 * Scroll-based parallax system with floating tech icons.
 * Reusable across About, Projects, and FAQ pages.
 *
 * @example
 * import { FloatingTechIcons } from '@/components/effects/FloatingTechIcons';
 *
 * // In your page section:
 * <section className="relative overflow-hidden">
 *   <FloatingTechIcons preset="about" />
 *   {/* Your content *\/}
 * </section>
 */

// Main component
export { default as FloatingTechIcons } from './FloatingTechIcons';

// Sub-components (for advanced usage)
export { default as FloatingIcon } from './FloatingIcon';
export { default as GeometricShape } from './GeometricShape';

// Icons (for custom implementations)
export { TechIcon } from './icons';

// Presets and utilities
export { PRESETS, getPreset, mergeWithPreset } from './presets';

// Types
export type {
  TechIconId,
  ParallaxSpeed,
  GeometricShapeType,
  Position,
  Movement,
  FloatingIconConfig,
  GeometricShapeConfig,
  MobileConfig,
  FloatingIconsPreset,
  PresetName,
  FloatingTechIconsProps,
  FloatingIconProps,
  GeometricShapeProps,
  UseParallaxOptions,
  UseParallaxReturn,
} from './types';
