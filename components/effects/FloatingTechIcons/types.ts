/**
 * FloatingTechIcons Type Definitions
 *
 * Comprehensive types for the parallax floating icons system.
 * Used across About, Projects, and FAQ pages.
 */

// Available icons (tech + FAQ/communication)
export type TechIconId =
  // Tech icons
  | 'react'
  | 'nextjs'
  | 'typescript'
  | 'postgresql'
  | 'tailwind'
  | 'framer'
  | 'github'
  | 'vercel'
  | 'prisma'
  | 'supabase'
  | 'figma'
  | 'git'
  | 'docker'
  // FAQ/Communication icons
  | 'document'
  | 'workflow'
  | 'invoice'
  | 'lightbulb'
  | 'checkmark'
  | 'message'
  | 'question'
  | 'help'
  | 'search'
  // Contact icons
  | 'send'
  // Achievement/Projects icons
  | 'rocket'
  | 'users'
  | 'star'
  | 'target'
  // Service category icons
  | 'building'
  | 'cart'
  | 'layers'
  | 'sparkles'
  | 'codeWindow'
  | 'globe'
  // Full-stack development icons
  | 'server'
  | 'api'
  // SaaS-specific icons
  | 'cycle'
  | 'lock'
  | 'dashboard'
  | 'creditCard'
  | 'bell'
  | 'settings';

// Parallax speed multipliers (0.1 = slow, 1.0 = match scroll speed)
export type ParallaxSpeed = 0.15 | 0.2 | 0.3 | 0.35 | 0.4 | 0.45 | 0.5 | 0.6 | 0.7;

// Geometric shape types for background decoration
export type GeometricShapeType = 'circle' | 'square' | 'triangle';

// Position as percentage of container (0-100)
export interface Position {
  x: number;
  y: number;
}

// Movement offset in pixels
export interface Movement {
  x: number;
  y: number;
}

// Configuration for a single floating tech icon
export interface FloatingIconConfig {
  id: TechIconId;
  // Starting position (percentage of container: 0-100)
  initialPosition: Position;
  // Movement direction and distance as scroll progresses (pixels)
  movement: Movement;
  // Speed multiplier for parallax effect
  parallaxSpeed: ParallaxSpeed;
  // Icon size in pixels (recommended: 60-120)
  size: number;
  // Base opacity (recommended: 0.4-0.7)
  opacity: number;
  // Scroll progress (0-1) when icon starts fading in
  fadeInAt: number;
  // Scroll progress (0-1) when icon starts fading out
  fadeOutAt: number;
  // Optional initial rotation in degrees
  rotation?: number;
  // Optional z-index for layering
  zIndex?: number;
}

// Configuration for a geometric background shape
export interface GeometricShapeConfig {
  type: GeometricShapeType;
  // Position as percentage of container
  position: Position;
  // Size in pixels
  size: number;
  // Parallax speed (should be slower than icons)
  parallaxSpeed: ParallaxSpeed;
  // Opacity (recommended: 0.04-0.08 for subtle effect)
  opacity: number;
  // Optional rotation
  rotation?: number;
}

// Mobile-specific overrides
export interface MobileConfig {
  // Maximum number of icons to show on mobile
  maxIcons: number;
  // Maximum number of shapes to show on mobile
  maxShapes: number;
  // Size multiplier (0.7 = 70% of desktop size)
  sizeMultiplier: number;
}

// Complete preset configuration for a page
export interface FloatingIconsPreset {
  name: string;
  // Array of floating icon configurations
  icons: FloatingIconConfig[];
  // Array of geometric shape configurations
  shapes: GeometricShapeConfig[];
  // Mobile-specific overrides
  mobile: MobileConfig;
}

// Available preset names
export type PresetName = 'about' | 'projects' | 'faq' | 'services' | 'contact' | 'web-development' | 'saas' | 'ecommerce' | 'seo';

// Main component props
export interface FloatingTechIconsProps {
  // Use a predefined preset
  preset?: PresetName;
  // Or provide custom configuration (overrides preset)
  customConfig?: Partial<FloatingIconsPreset>;
  // Additional class names for the container
  className?: string;
  // Whether to show geometric shapes (default: true)
  showShapes?: boolean;
  // Global opacity multiplier (default: 1)
  opacityMultiplier?: number;
}

// Individual FloatingIcon component props
export interface FloatingIconProps {
  config: FloatingIconConfig;
  containerRef: React.RefObject<HTMLElement | null>;
  isMobile: boolean;
  sizeMultiplier: number;
  opacityMultiplier: number;
}

// GeometricShape component props
export interface GeometricShapeProps {
  config: GeometricShapeConfig;
  containerRef: React.RefObject<HTMLElement | null>;
  isMobile: boolean;
  sizeMultiplier: number;
}

// useParallax hook options
export interface UseParallaxOptions {
  containerRef: React.RefObject<HTMLElement | null>;
  speed: number;
  movement: Movement;
  fadeInAt: number;
  fadeOutAt: number;
}

// useParallax hook return type
export interface UseParallaxReturn {
  x: import('framer-motion').MotionValue<number>;
  y: import('framer-motion').MotionValue<number>;
  opacity: import('framer-motion').MotionValue<number>;
  isInView: boolean;
}
