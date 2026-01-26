/**
 * FloatingTechIcons Presets
 *
 * Pre-configured settings for different pages.
 * Each preset defines icon positions, parallax speeds, and responsive behavior.
 *
 * Responsive Strategy (from DEVICE_BREAKPOINTS.md):
 * - XS Mobile (< 640px): 2 icons max, smallest sizes, tight positioning
 * - Mobile/Tablet (640px+): 3 icons, medium sizes
 * - Desktop (1024px+): Full experience, 4+ icons
 */

import type {
  FloatingIconsPreset,
  FloatingIconConfig,
  GeometricShapeConfig,
  PresetName,
} from './types';

// ============================================
// ABOUT PAGE PRESET
// Icons distributed across full page, visible in left/right margins
// Sequential reveal: icons fade in and out as you scroll
// More gaps between sections for cleaner transitions
// ============================================
const aboutIcons: FloatingIconConfig[] = [
  // === SECTION 1: Hero Area (scroll 3-17%) ===
  {
    id: 'react',
    initialPosition: { x: 88, y: 8 },
    movement: { x: -15, y: 80 },
    parallaxSpeed: 0.3,
    size: 90,
    opacity: 0.55,
    fadeInAt: 0.03,
    fadeOutAt: 0.16,
    rotation: -8,
    zIndex: 10,
  },
  {
    id: 'git',
    initialPosition: { x: 4, y: 15 },
    movement: { x: 12, y: 60 },
    parallaxSpeed: 0.35,
    size: 75,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.17,
    rotation: 6,
    zIndex: 9,
  },
  // === GAP: 17-22% ===
  // === SECTION 2: Bio Area (scroll 22-36%) ===
  {
    id: 'nextjs',
    initialPosition: { x: 91, y: 22 },
    movement: { x: -20, y: 70 },
    parallaxSpeed: 0.4,
    size: 85,
    opacity: 0.5,
    fadeInAt: 0.22,
    fadeOutAt: 0.34,
    rotation: 10,
    zIndex: 8,
  },
  {
    id: 'typescript',
    initialPosition: { x: 3, y: 30 },
    movement: { x: 15, y: 55 },
    parallaxSpeed: 0.45,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.24,
    fadeOutAt: 0.36,
    rotation: -5,
    zIndex: 12,
  },
  // === GAP: 36-42% ===
  // === SECTION 3: Tech Stack Area (scroll 42-54%) ===
  {
    id: 'tailwind',
    initialPosition: { x: 89, y: 38 },
    movement: { x: -18, y: 50 },
    parallaxSpeed: 0.35,
    size: 72,
    opacity: 0.48,
    fadeInAt: 0.42,
    fadeOutAt: 0.52,
    rotation: 8,
    zIndex: 11,
  },
  {
    id: 'postgresql',
    initialPosition: { x: 5, y: 45 },
    movement: { x: 14, y: 45 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.45,
    fadeInAt: 0.44,
    fadeOutAt: 0.54,
    rotation: -10,
    zIndex: 10,
  },
  // === GAP: 54-60% ===
  // === SECTION 4: Experience Area (scroll 60-72%) ===
  {
    id: 'docker',
    initialPosition: { x: 90, y: 52 },
    movement: { x: -12, y: 40 },
    parallaxSpeed: 0.3,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.60,
    fadeOutAt: 0.70,
    rotation: 12,
    zIndex: 9,
  },
  {
    id: 'github',
    initialPosition: { x: 4, y: 60 },
    movement: { x: 10, y: 35 },
    parallaxSpeed: 0.35,
    size: 62,
    opacity: 0.42,
    fadeInAt: 0.62,
    fadeOutAt: 0.68,
    rotation: -6,
    zIndex: 8,
  },
  // === GAP: 68-74% ===
  // === SECTION 5: CTA Area (scroll 74-78%) - Fade WELL before footer ===
  {
    id: 'vercel',
    initialPosition: { x: 87, y: 68 },
    movement: { x: -10, y: 30 },
    parallaxSpeed: 0.3,
    size: 60,
    opacity: 0.42,
    fadeInAt: 0.72,
    fadeOutAt: 0.76,
    rotation: 5,
    zIndex: 11,
  },
  {
    id: 'figma',
    initialPosition: { x: 6, y: 72 },
    movement: { x: 8, y: 25 },
    parallaxSpeed: 0.35,
    size: 55,
    opacity: 0.4,
    fadeInAt: 0.74,
    fadeOutAt: 0.78,
    rotation: -8,
    zIndex: 10,
  },
];

const aboutShapes: GeometricShapeConfig[] = [
  {
    type: 'circle',
    position: { x: 90, y: 18 },
    size: 200,
    parallaxSpeed: 0.15,
    opacity: 0.04,
  },
  {
    type: 'square',
    position: { x: 5, y: 45 },
    size: 150,
    parallaxSpeed: 0.2,
    opacity: 0.035,
    rotation: 15,
  },
  {
    type: 'circle',
    position: { x: 88, y: 70 },
    size: 160,
    parallaxSpeed: 0.15,
    opacity: 0.035,
  },
];

// ============================================
// PROJECTS PAGE PRESET
// Achievement-themed icons for portfolio showcase
// Smaller page - fewer icons, optimized positioning
// ============================================
const projectsIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-35%) ===
  {
    id: 'rocket',
    initialPosition: { x: 88, y: 12 },
    movement: { x: -15, y: 60 },
    parallaxSpeed: 0.35,
    size: 75,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.35,
    rotation: -12,
    zIndex: 10,
  },
  {
    id: 'users',
    initialPosition: { x: 5, y: 18 },
    movement: { x: 12, y: 50 },
    parallaxSpeed: 0.4,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.05,
    fadeOutAt: 0.38,
    rotation: 8,
    zIndex: 9,
  },
  // === PROJECTS GRID SECTION (scroll 30-65%) ===
  {
    id: 'star',
    initialPosition: { x: 90, y: 38 },
    movement: { x: -12, y: 45 },
    parallaxSpeed: 0.3,
    size: 65,
    opacity: 0.45,
    fadeInAt: 0.28,
    fadeOutAt: 0.60,
    rotation: 15,
    zIndex: 8,
  },
  {
    id: 'target',
    initialPosition: { x: 4, y: 48 },
    movement: { x: 10, y: 40 },
    parallaxSpeed: 0.35,
    size: 60,
    opacity: 0.42,
    fadeInAt: 0.38,
    fadeOutAt: 0.68,
    rotation: -6,
    zIndex: 11,
  },
];

const projectsShapes: GeometricShapeConfig[] = [
  {
    type: 'square',
    position: { x: 82, y: 30 },
    size: 200,
    parallaxSpeed: 0.15,
    opacity: 0.045,
    rotation: 45,
  },
  {
    type: 'circle',
    position: { x: 10, y: 70 },
    size: 150,
    parallaxSpeed: 0.2,
    opacity: 0.04,
  },
  {
    type: 'triangle',
    position: { x: 60, y: 85 },
    size: 140,
    parallaxSpeed: 0.15,
    opacity: 0.035,
    rotation: 20,
  },
];

// ============================================
// SERVICES PAGE PRESET
// Icons in Hero + CTA only, hidden during sticky scroll section
// Service category icons representing what you deliver
// ============================================
const servicesIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 2-10%) - Fade out BEFORE sticky services starts ===
  {
    id: 'building',
    initialPosition: { x: 88, y: 10 },
    movement: { x: -12, y: 40 },
    parallaxSpeed: 0.35,
    size: 70,
    opacity: 0.5,
    fadeInAt: 0.02,
    fadeOutAt: 0.08,
    rotation: -10,
    zIndex: 10,
  },
  {
    id: 'layers',
    initialPosition: { x: 5, y: 15 },
    movement: { x: 10, y: 35 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.45,
    fadeInAt: 0.02,
    fadeOutAt: 0.09,
    rotation: 8,
    zIndex: 9,
  },
  // === CTA SECTION (scroll 78-86%) - Appear AFTER sticky services, fade BEFORE footer ===
  {
    id: 'sparkles',
    initialPosition: { x: 90, y: 62 },
    movement: { x: -8, y: 20 },
    parallaxSpeed: 0.3,
    size: 65,
    opacity: 0.48,
    fadeInAt: 0.78,
    fadeOutAt: 0.85,
    rotation: 12,
    zIndex: 10,
  },
  {
    id: 'globe',
    initialPosition: { x: 4, y: 72 },
    movement: { x: 8, y: 18 },
    parallaxSpeed: 0.35,
    size: 60,
    opacity: 0.45,
    fadeInAt: 0.79,
    fadeOutAt: 0.86,
    rotation: -6,
    zIndex: 9,
  },
  {
    id: 'codeWindow',
    initialPosition: { x: 88, y: 82 },
    movement: { x: -6, y: 12 },
    parallaxSpeed: 0.3,
    size: 55,
    opacity: 0.42,
    fadeInAt: 0.80,
    fadeOutAt: 0.87,
    rotation: 5,
    zIndex: 8,
  },
];

const servicesShapes: GeometricShapeConfig[] = [];

// ============================================
// FAQ PAGE PRESET
// Communication/help themed icons mapped to FAQ sections
// ============================================
const faqIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-25%) ===
  {
    id: 'help',
    initialPosition: { x: 88, y: 8 },
    movement: { x: -15, y: 70 },
    parallaxSpeed: 0.3,
    size: 75,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.25,
    rotation: -8,
    zIndex: 10,
  },
  {
    id: 'search',
    initialPosition: { x: 4, y: 15 },
    movement: { x: 12, y: 55 },
    parallaxSpeed: 0.35,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.03,
    fadeOutAt: 0.28,
    rotation: 6,
    zIndex: 9,
  },
  // === SERVICES & APPROACH (scroll 20-42%) ===
  {
    id: 'document',
    initialPosition: { x: 90, y: 22 },
    movement: { x: -18, y: 60 },
    parallaxSpeed: 0.35,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.18,
    fadeOutAt: 0.42,
    rotation: 10,
    zIndex: 8,
  },
  // === PROCESS & TIMELINE (scroll 35-55%) ===
  {
    id: 'workflow',
    initialPosition: { x: 5, y: 35 },
    movement: { x: 14, y: 50 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.42,
    fadeInAt: 0.32,
    fadeOutAt: 0.55,
    rotation: -5,
    zIndex: 11,
  },
  // === PRICING & PAYMENT (scroll 48-68%) ===
  {
    id: 'invoice',
    initialPosition: { x: 89, y: 45 },
    movement: { x: -15, y: 45 },
    parallaxSpeed: 0.35,
    size: 62,
    opacity: 0.4,
    fadeInAt: 0.45,
    fadeOutAt: 0.65,
    rotation: 8,
    zIndex: 10,
  },
  // === TECHNICAL DETAILS (scroll 55-65%) ===
  {
    id: 'lightbulb',
    initialPosition: { x: 6, y: 55 },
    movement: { x: 12, y: 40 },
    parallaxSpeed: 0.35,
    size: 60,
    opacity: 0.4,
    fadeInAt: 0.55,
    fadeOutAt: 0.65,
    rotation: -6,
    zIndex: 9,
  },
  // === POST-LAUNCH (scroll 62-70%) ===
  {
    id: 'checkmark',
    initialPosition: { x: 88, y: 62 },
    movement: { x: -10, y: 35 },
    parallaxSpeed: 0.3,
    size: 58,
    opacity: 0.38,
    fadeInAt: 0.62,
    fadeOutAt: 0.70,
    rotation: 5,
    zIndex: 8,
  },
  // === GAP: 65-72% / 70-74% ===
  // === CTA SECTION (scroll 72-78%) - Fade WELL before footer ===
  {
    id: 'message',
    initialPosition: { x: 5, y: 70 },
    movement: { x: 8, y: 25 },
    parallaxSpeed: 0.3,
    size: 55,
    opacity: 0.35,
    fadeInAt: 0.72,
    fadeOutAt: 0.78,
    rotation: -4,
    zIndex: 11,
  },
  {
    id: 'question',
    initialPosition: { x: 87, y: 72 },
    movement: { x: -6, y: 20 },
    parallaxSpeed: 0.3,
    size: 52,
    opacity: 0.35,
    fadeInAt: 0.74,
    fadeOutAt: 0.80,
    rotation: 4,
    zIndex: 10,
  },
];

const faqShapes: GeometricShapeConfig[] = [
  {
    type: 'circle',
    position: { x: 75, y: 35 },
    size: 140,
    parallaxSpeed: 0.15,
    opacity: 0.035,
  },
];

// ============================================
// CONTACT PAGE PRESET
// Communication-themed icons: message, send, checkmark
// Shorter page - 3 icons spread across hero + content
// ============================================
const contactIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-30%) - Message bubble, top right ===
  {
    id: 'message',
    initialPosition: { x: 89, y: 10 },
    movement: { x: -12, y: 60 },
    parallaxSpeed: 0.35,
    size: 75,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.30,
    rotation: -8,
    zIndex: 10,
  },
  // === CONTENT SECTION (scroll 25-55%) - Send arrow, left middle ===
  {
    id: 'send',
    initialPosition: { x: 4, y: 35 },
    movement: { x: 12, y: 50 },
    parallaxSpeed: 0.4,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.25,
    fadeOutAt: 0.55,
    rotation: 6,
    zIndex: 9,
  },
  // === BOTTOM SECTION (scroll 45-72%) - Checkmark, right bottom ===
  {
    id: 'checkmark',
    initialPosition: { x: 90, y: 55 },
    movement: { x: -10, y: 40 },
    parallaxSpeed: 0.3,
    size: 65,
    opacity: 0.45,
    fadeInAt: 0.45,
    fadeOutAt: 0.72,
    rotation: 5,
    zIndex: 8,
  },
];

const contactShapes: GeometricShapeConfig[] = [
  {
    type: 'circle',
    position: { x: 85, y: 30 },
    size: 160,
    parallaxSpeed: 0.15,
    opacity: 0.035,
  },
];

// ============================================
// WEB DEVELOPMENT SERVICE PAGE PRESET
// Full-stack concept icons: layers, database, server, browser, API, globe
// Distributed across hero, content sections, tech stack, and CTA
// ============================================
const webDevelopmentIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-14%) - Full-stack concept ===
  {
    id: 'layers',
    initialPosition: { x: 89, y: 8 },
    movement: { x: -15, y: 75 },
    parallaxSpeed: 0.3,
    size: 85,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.14,
    rotation: -10,
    zIndex: 10,
  },
  {
    id: 'api',
    initialPosition: { x: 4, y: 14 },
    movement: { x: 12, y: 60 },
    parallaxSpeed: 0.35,
    size: 72,
    opacity: 0.45,
    fadeInAt: 0.03,
    fadeOutAt: 0.15,
    rotation: 8,
    zIndex: 9,
  },
  // === GAP: 15-20% ===
  // === CONTENT SECTIONS (scroll 20-34%) - Backend/Frontend ===
  {
    id: 'server',
    initialPosition: { x: 90, y: 22 },
    movement: { x: -18, y: 65 },
    parallaxSpeed: 0.4,
    size: 78,
    opacity: 0.48,
    fadeInAt: 0.20,
    fadeOutAt: 0.34,
    rotation: 6,
    zIndex: 8,
  },
  {
    id: 'postgresql',
    initialPosition: { x: 3, y: 30 },
    movement: { x: 14, y: 50 },
    parallaxSpeed: 0.45,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.22,
    fadeOutAt: 0.36,
    rotation: -7,
    zIndex: 12,
  },
  // === GAP: 36-40% ===
  // === CONTENT SECTIONS (scroll 40-52%) - Who/How ===
  {
    id: 'codeWindow',
    initialPosition: { x: 88, y: 42 },
    movement: { x: -15, y: 50 },
    parallaxSpeed: 0.35,
    size: 72,
    opacity: 0.45,
    fadeInAt: 0.40,
    fadeOutAt: 0.52,
    rotation: 10,
    zIndex: 11,
  },
  {
    id: 'globe',
    initialPosition: { x: 5, y: 48 },
    movement: { x: 12, y: 42 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.42,
    fadeInAt: 0.42,
    fadeOutAt: 0.54,
    rotation: -5,
    zIndex: 10,
  },
  // === GAP: 54-58% ===
  // === TECH STACK SECTION (scroll 58-68%) ===
  {
    id: 'react',
    initialPosition: { x: 90, y: 55 },
    movement: { x: -12, y: 35 },
    parallaxSpeed: 0.3,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.58,
    fadeOutAt: 0.66,
    rotation: -8,
    zIndex: 9,
  },
  {
    id: 'typescript',
    initialPosition: { x: 4, y: 60 },
    movement: { x: 10, y: 30 },
    parallaxSpeed: 0.35,
    size: 62,
    opacity: 0.42,
    fadeInAt: 0.60,
    fadeOutAt: 0.68,
    rotation: 6,
    zIndex: 8,
  },
  // === GAP: 68-72% ===
  // === CTA SECTION (scroll 72-78%) - Fade before footer ===
  {
    id: 'nextjs',
    initialPosition: { x: 87, y: 68 },
    movement: { x: -8, y: 22 },
    parallaxSpeed: 0.3,
    size: 60,
    opacity: 0.4,
    fadeInAt: 0.70,
    fadeOutAt: 0.76,
    rotation: 5,
    zIndex: 11,
  },
  {
    id: 'vercel',
    initialPosition: { x: 6, y: 72 },
    movement: { x: 8, y: 18 },
    parallaxSpeed: 0.35,
    size: 55,
    opacity: 0.38,
    fadeInAt: 0.72,
    fadeOutAt: 0.78,
    rotation: -6,
    zIndex: 10,
  },
];

const webDevelopmentShapes: GeometricShapeConfig[] = [];

// ============================================
// PRESET REGISTRY
// ============================================
export const PRESETS: Record<PresetName, FloatingIconsPreset> = {
  about: {
    name: 'about',
    icons: aboutIcons,
    shapes: aboutShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  projects: {
    name: 'projects',
    icons: projectsIcons,
    shapes: projectsShapes,
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  faq: {
    name: 'faq',
    icons: faqIcons,
    shapes: faqShapes,
    mobile: {
      maxIcons: 3,
      maxShapes: 0,
      sizeMultiplier: 0.55,
    },
  },
  services: {
    name: 'services',
    icons: servicesIcons,
    shapes: servicesShapes,
    // Mobile: Show hero icons + 2 CTA icons
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  contact: {
    name: 'contact',
    icons: contactIcons,
    shapes: contactShapes,
    // Mobile: Show all 3 icons, smaller
    mobile: {
      maxIcons: 3,
      maxShapes: 0,
      sizeMultiplier: 0.55,
    },
  },
  'web-development': {
    name: 'web-development',
    icons: webDevelopmentIcons,
    shapes: webDevelopmentShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
};

/**
 * Get a preset configuration by name
 */
export function getPreset(name: PresetName): FloatingIconsPreset {
  return PRESETS[name];
}

/**
 * Merge custom config with a preset
 */
export function mergeWithPreset(
  presetName: PresetName,
  customConfig?: Partial<FloatingIconsPreset>
): FloatingIconsPreset {
  const preset = getPreset(presetName);

  if (!customConfig) {
    return preset;
  }

  return {
    ...preset,
    ...customConfig,
    icons: customConfig.icons ?? preset.icons,
    shapes: customConfig.shapes ?? preset.shapes,
    mobile: {
      ...preset.mobile,
      ...customConfig.mobile,
    },
  };
}
