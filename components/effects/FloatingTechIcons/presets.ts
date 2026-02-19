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
// Icons in HERO only, then reappear in CTA section (after cards)
// Cards section (20-65%) is kept clean - no icons overlapping
// ============================================
const projectsIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-18%) - Fade out BEFORE cards start ===
  {
    id: 'rocket',
    initialPosition: { x: 88, y: 10 },
    movement: { x: -12, y: 50 },
    parallaxSpeed: 0.35,
    size: 75,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.16,
    rotation: -12,
    zIndex: 10,
  },
  {
    id: 'users',
    initialPosition: { x: 5, y: 15 },
    movement: { x: 10, y: 45 },
    parallaxSpeed: 0.4,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.04,
    fadeOutAt: 0.18,
    rotation: 8,
    zIndex: 9,
  },
  // === GAP: 18-50% - Cards section, no icons ===
  // === CTA PAIR 1 (scroll 50-62%) - First pair right after cards ===
  {
    id: 'target',
    initialPosition: { x: 5, y: 38 },
    movement: { x: 4, y: 25 },
    parallaxSpeed: 0.35,
    size: 60,
    opacity: 0.5,
    fadeInAt: 0.50,
    fadeOutAt: 0.62,
    rotation: 6,
    zIndex: 10,
  },
  {
    id: 'lightbulb',
    initialPosition: { x: 93, y: 40 },
    movement: { x: -4, y: 22 },
    parallaxSpeed: 0.3,
    size: 58,
    opacity: 0.48,
    fadeInAt: 0.52,
    fadeOutAt: 0.64,
    rotation: -8,
    zIndex: 9,
  },
  // === GAP: 62-68% ===
  // === CTA PAIR 2 (scroll 68-76%) - Second pair near CTA text ===
  {
    id: 'checkmark',
    initialPosition: { x: 5, y: 55 },
    movement: { x: 3, y: 15 },
    parallaxSpeed: 0.3,
    size: 55,
    opacity: 0.45,
    fadeInAt: 0.68,
    fadeOutAt: 0.76,
    rotation: -5,
    zIndex: 8,
  },
  {
    id: 'star',
    initialPosition: { x: 93, y: 57 },
    movement: { x: -3, y: 12 },
    parallaxSpeed: 0.35,
    size: 52,
    opacity: 0.42,
    fadeInAt: 0.70,
    fadeOutAt: 0.78,
    rotation: 12,
    zIndex: 8,
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
  // === HERO SECTION (scroll 3-14%) - Both icons together ===
  {
    id: 'help',
    initialPosition: { x: 88, y: 8 },
    movement: { x: -15, y: 70 },
    parallaxSpeed: 0.3,
    size: 75,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.14,
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
    fadeOutAt: 0.14,
    rotation: 6,
    zIndex: 9,
  },
  // === SERVICES & APPROACH (scroll 16-24%) - RIGHT side ===
  {
    id: 'document',
    initialPosition: { x: 90, y: 22 },
    movement: { x: -18, y: 60 },
    parallaxSpeed: 0.35,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.16,
    fadeOutAt: 0.24,
    rotation: 10,
    zIndex: 8,
  },
  // === PROCESS & TIMELINE (scroll 26-34%) - LEFT side ===
  {
    id: 'workflow',
    initialPosition: { x: 5, y: 35 },
    movement: { x: 14, y: 50 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.42,
    fadeInAt: 0.26,
    fadeOutAt: 0.34,
    rotation: -5,
    zIndex: 11,
  },
  // === PRICING & PAYMENT (scroll 36-44%) - RIGHT side ===
  {
    id: 'invoice',
    initialPosition: { x: 89, y: 45 },
    movement: { x: -15, y: 45 },
    parallaxSpeed: 0.35,
    size: 62,
    opacity: 0.4,
    fadeInAt: 0.36,
    fadeOutAt: 0.44,
    rotation: 8,
    zIndex: 10,
  },
  // === TECHNICAL DETAILS (scroll 46-54%) - LEFT side ===
  {
    id: 'lightbulb',
    initialPosition: { x: 6, y: 55 },
    movement: { x: 12, y: 40 },
    parallaxSpeed: 0.35,
    size: 60,
    opacity: 0.4,
    fadeInAt: 0.46,
    fadeOutAt: 0.54,
    rotation: -6,
    zIndex: 9,
  },
  // === AI INTEGRATION (scroll 56-64%) - RIGHT side only ===
  {
    id: 'bot',
    initialPosition: { x: 89, y: 58 },
    movement: { x: -14, y: 42 },
    parallaxSpeed: 0.35,
    size: 64,
    opacity: 0.42,
    fadeInAt: 0.56,
    fadeOutAt: 0.64,
    rotation: 8,
    zIndex: 10,
  },
  // === POST-LAUNCH (scroll 68-74%) - LEFT side (swapped for alternating pattern) ===
  {
    id: 'checkmark',
    initialPosition: { x: 6, y: 68 },
    movement: { x: 10, y: 28 },
    parallaxSpeed: 0.3,
    size: 58,
    opacity: 0.38,
    fadeInAt: 0.68,
    fadeOutAt: 0.74,
    rotation: -5,
    zIndex: 8,
  },
  // === CTA SECTION (scroll 76-80%) - RIGHT side, fades before footer reveal ===
  {
    id: 'message',
    initialPosition: { x: 88, y: 74 },
    movement: { x: -8, y: 22 },
    parallaxSpeed: 0.3,
    size: 55,
    opacity: 0.35,
    fadeInAt: 0.76,
    fadeOutAt: 0.80,
    rotation: 4,
    zIndex: 11,
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
// SAAS SERVICE PAGE PRESET
// SaaS concept icons: subscription cycle, multi-tenancy, auth, dashboard, billing, notifications
// Distributed across hero, content sections, tech stack, and CTA
// ============================================
const saasIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-14%) - Subscription & multi-tenancy ===
  {
    id: 'cycle',
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
    id: 'users',
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
  // === CONTENT SECTIONS (scroll 20-34%) - Auth & Dashboard ===
  {
    id: 'lock',
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
    id: 'dashboard',
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
  // === CONTENT SECTIONS (scroll 40-52%) - Billing & Notifications ===
  {
    id: 'creditCard',
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
    id: 'bell',
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
  // === TECH STACK SECTION (scroll 58-68%) - API & Settings ===
  {
    id: 'api',
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
    id: 'settings',
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
    id: 'layers',
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
    id: 'server',
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

const saasShapes: GeometricShapeConfig[] = [];

// ============================================
// E-COMMERCE SERVICE PAGE PRESET
// E-commerce concept icons: cart, payments, search, global, orders, security
// Distributed across hero, content sections, tech stack, and CTA
// ============================================
const ecommerceIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-14%) - Shopping & payments ===
  {
    id: 'cart',
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
    id: 'creditCard',
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
  // === CONTENT SECTIONS (scroll 20-34%) - Search & global reach ===
  {
    id: 'search',
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
    id: 'globe',
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
  // === CONTENT SECTIONS (scroll 40-52%) - Orders & security ===
  {
    id: 'invoice',
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
    id: 'lock',
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
  // === TECH STACK SECTION (scroll 58-68%) - Database & server ===
  {
    id: 'postgresql',
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
    id: 'server',
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
    id: 'checkmark',
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
    id: 'users',
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

const ecommerceShapes: GeometricShapeConfig[] = [];

// ============================================
// SEO & PERFORMANCE OPTIMIZATION SERVICE PAGE PRESET
// SEO concept icons: search, speed, rankings, analytics, optimization
// Distributed across hero, content sections, tech stack, and CTA
// ============================================
const seoIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-14%) - Search & optimization ===
  {
    id: 'search',
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
    id: 'rocket',
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
  // === CONTENT SECTIONS (scroll 20-34%) - Performance & rankings ===
  {
    id: 'target',
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
    id: 'star',
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
  // === CONTENT SECTIONS (scroll 40-52%) - Technical & validation ===
  {
    id: 'document',
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
    id: 'checkmark',
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
  // === TECH STACK SECTION (scroll 58-68%) - Insights & global ===
  {
    id: 'lightbulb',
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
    id: 'globe',
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
    id: 'sparkles',
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
    id: 'settings',
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

const seoShapes: GeometricShapeConfig[] = [];

// ============================================
// AI INTEGRATION SERVICE PAGE PRESET
// Same layout as web-development, AI-themed icon IDs
// ============================================
const aiIntegrationIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-14%) - AI concept ===
  {
    id: 'bot',
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
    id: 'sparkles',
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
  // === CONTENT SECTIONS (scroll 20-34%) - Business value / features ===
  {
    id: 'lightbulb',
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
    id: 'search',
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
  // === CONTENT SECTIONS (scroll 40-52%) - Technical / use cases ===
  {
    id: 'api',
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
    id: 'workflow',
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
  // === TECH STACK SECTION (scroll 58-68%) - Config / monitoring ===
  {
    id: 'settings',
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
    id: 'target',
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
    id: 'globe',
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
    id: 'message',
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

const aiIntegrationShapes: GeometricShapeConfig[] = [];

// ============================================
// CASE STUDY PAGE PRESET
// Extended scroll coverage for long-form case study pages
// Icons span from hero through all content sections to CTA
// Fades out before footer reveal spacer (at ~85%)
// ============================================
const caseStudyIcons: FloatingIconConfig[] = [
  // === HERO SECTION (scroll 3-12%) - Project overview ===
  {
    id: 'rocket',
    initialPosition: { x: 89, y: 8 },
    movement: { x: -15, y: 75 },
    parallaxSpeed: 0.3,
    size: 80,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.12,
    rotation: -10,
    zIndex: 10,
  },
  {
    id: 'lightbulb',
    initialPosition: { x: 4, y: 14 },
    movement: { x: 12, y: 60 },
    parallaxSpeed: 0.35,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.03,
    fadeOutAt: 0.13,
    rotation: 8,
    zIndex: 9,
  },
  // === GAP: 13-18% ===
  // === CONTENT SECTION 1 (scroll 18-28%) - Problem/Challenge ===
  {
    id: 'target',
    initialPosition: { x: 90, y: 20 },
    movement: { x: -18, y: 65 },
    parallaxSpeed: 0.4,
    size: 75,
    opacity: 0.48,
    fadeInAt: 0.18,
    fadeOutAt: 0.28,
    rotation: 6,
    zIndex: 8,
  },
  {
    id: 'search',
    initialPosition: { x: 3, y: 26 },
    movement: { x: 14, y: 50 },
    parallaxSpeed: 0.45,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.20,
    fadeOutAt: 0.30,
    rotation: -7,
    zIndex: 12,
  },
  // === GAP: 30-35% ===
  // === CONTENT SECTION 2 (scroll 35-45%) - Solution/Approach ===
  {
    id: 'layers',
    initialPosition: { x: 88, y: 36 },
    movement: { x: -15, y: 50 },
    parallaxSpeed: 0.35,
    size: 72,
    opacity: 0.45,
    fadeInAt: 0.35,
    fadeOutAt: 0.45,
    rotation: 10,
    zIndex: 11,
  },
  {
    id: 'workflow',
    initialPosition: { x: 5, y: 42 },
    movement: { x: 12, y: 42 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.42,
    fadeInAt: 0.37,
    fadeOutAt: 0.47,
    rotation: -5,
    zIndex: 10,
  },
  // === GAP: 47-52% ===
  // === CONTENT SECTION 3 (scroll 52-62%) - Implementation/Technical ===
  {
    id: 'api',
    initialPosition: { x: 90, y: 50 },
    movement: { x: -12, y: 40 },
    parallaxSpeed: 0.3,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.52,
    fadeOutAt: 0.62,
    rotation: -8,
    zIndex: 9,
  },
  {
    id: 'server',
    initialPosition: { x: 4, y: 56 },
    movement: { x: 10, y: 35 },
    parallaxSpeed: 0.35,
    size: 62,
    opacity: 0.42,
    fadeInAt: 0.54,
    fadeOutAt: 0.64,
    rotation: 6,
    zIndex: 8,
  },
  // === GAP: 64-68% ===
  // === TECH STACK SECTION (scroll 68-76%) ===
  {
    id: 'react',
    initialPosition: { x: 87, y: 64 },
    movement: { x: -10, y: 30 },
    parallaxSpeed: 0.3,
    size: 65,
    opacity: 0.42,
    fadeInAt: 0.68,
    fadeOutAt: 0.76,
    rotation: 5,
    zIndex: 11,
  },
  {
    id: 'typescript',
    initialPosition: { x: 6, y: 70 },
    movement: { x: 8, y: 25 },
    parallaxSpeed: 0.35,
    size: 58,
    opacity: 0.4,
    fadeInAt: 0.70,
    fadeOutAt: 0.78,
    rotation: -6,
    zIndex: 10,
  },
  // === GAP: 78-80% ===
  // === CTA SECTION (scroll 80-86%) - Final icons before footer ===
  {
    id: 'checkmark',
    initialPosition: { x: 88, y: 76 },
    movement: { x: -8, y: 18 },
    parallaxSpeed: 0.3,
    size: 55,
    opacity: 0.38,
    fadeInAt: 0.80,
    fadeOutAt: 0.86,
    rotation: 4,
    zIndex: 9,
  },
  {
    id: 'star',
    initialPosition: { x: 5, y: 80 },
    movement: { x: 6, y: 15 },
    parallaxSpeed: 0.3,
    size: 52,
    opacity: 0.36,
    fadeInAt: 0.82,
    fadeOutAt: 0.88,
    rotation: -4,
    zIndex: 8,
  },
];

const caseStudyShapes: GeometricShapeConfig[] = [];

// ============================================
// BLOG ARTICLE PAGE PRESET
// AI/automation themed icons for blog posts about AI workflows
// Sections: Hero → Article body (3 sections) → CTA
// Icons: bot, sparkles, search, workflow, target, globe, send, lightbulb, rocket, users
// ============================================
const blogArticleIcons: FloatingIconConfig[] = [
  // === HERO / INTRO (scroll 3-14%) - AI & automation concept ===
  {
    id: 'bot',
    initialPosition: { x: 89, y: 8 },
    movement: { x: -15, y: 75 },
    parallaxSpeed: 0.3,
    size: 82,
    opacity: 0.5,
    fadeInAt: 0.03,
    fadeOutAt: 0.14,
    rotation: -10,
    zIndex: 10,
  },
  {
    id: 'sparkles',
    initialPosition: { x: 4, y: 14 },
    movement: { x: 12, y: 60 },
    parallaxSpeed: 0.35,
    size: 70,
    opacity: 0.45,
    fadeInAt: 0.03,
    fadeOutAt: 0.15,
    rotation: 8,
    zIndex: 9,
  },
  // === GAP: 15-20% ===
  // === ARTICLE BODY 1 (scroll 20-32%) - Research & discovery ===
  {
    id: 'search',
    initialPosition: { x: 90, y: 22 },
    movement: { x: -18, y: 65 },
    parallaxSpeed: 0.4,
    size: 75,
    opacity: 0.48,
    fadeInAt: 0.20,
    fadeOutAt: 0.32,
    rotation: 6,
    zIndex: 8,
  },
  {
    id: 'target',
    initialPosition: { x: 3, y: 28 },
    movement: { x: 14, y: 50 },
    parallaxSpeed: 0.45,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.22,
    fadeOutAt: 0.34,
    rotation: -7,
    zIndex: 12,
  },
  // === GAP: 34-40% ===
  // === ARTICLE BODY 2 (scroll 40-52%) - Workflow & outreach ===
  {
    id: 'workflow',
    initialPosition: { x: 88, y: 40 },
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
    id: 'send',
    initialPosition: { x: 5, y: 46 },
    movement: { x: 12, y: 42 },
    parallaxSpeed: 0.4,
    size: 65,
    opacity: 0.42,
    fadeInAt: 0.42,
    fadeOutAt: 0.54,
    rotation: -5,
    zIndex: 10,
  },
  // === GAP: 54-60% ===
  // === ARTICLE BODY 3 (scroll 60-72%) - Results & global reach ===
  {
    id: 'globe',
    initialPosition: { x: 90, y: 58 },
    movement: { x: -12, y: 35 },
    parallaxSpeed: 0.3,
    size: 68,
    opacity: 0.45,
    fadeInAt: 0.60,
    fadeOutAt: 0.70,
    rotation: -8,
    zIndex: 9,
  },
  {
    id: 'users',
    initialPosition: { x: 4, y: 64 },
    movement: { x: 10, y: 30 },
    parallaxSpeed: 0.35,
    size: 62,
    opacity: 0.42,
    fadeInAt: 0.62,
    fadeOutAt: 0.72,
    rotation: 6,
    zIndex: 8,
  },
  // === GAP: 72-76% ===
  // === CTA SECTION (scroll 76-82%) - Fade before footer ===
  {
    id: 'rocket',
    initialPosition: { x: 87, y: 72 },
    movement: { x: -8, y: 22 },
    parallaxSpeed: 0.3,
    size: 60,
    opacity: 0.4,
    fadeInAt: 0.74,
    fadeOutAt: 0.80,
    rotation: 5,
    zIndex: 11,
  },
  {
    id: 'lightbulb',
    initialPosition: { x: 6, y: 76 },
    movement: { x: 8, y: 18 },
    parallaxSpeed: 0.35,
    size: 55,
    opacity: 0.38,
    fadeInAt: 0.76,
    fadeOutAt: 0.82,
    rotation: -6,
    zIndex: 10,
  },
];

const blogArticleShapes: GeometricShapeConfig[] = [
  {
    type: 'circle',
    position: { x: 88, y: 20 },
    size: 160,
    parallaxSpeed: 0.15,
    opacity: 0.035,
  },
  {
    type: 'square',
    position: { x: 6, y: 55 },
    size: 140,
    parallaxSpeed: 0.2,
    opacity: 0.03,
    rotation: 20,
  },
];

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
  saas: {
    name: 'saas',
    icons: saasIcons,
    shapes: saasShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  ecommerce: {
    name: 'ecommerce',
    icons: ecommerceIcons,
    shapes: ecommerceShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  seo: {
    name: 'seo',
    icons: seoIcons,
    shapes: seoShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  'ai-integration': {
    name: 'ai-integration',
    icons: aiIntegrationIcons,
    shapes: aiIntegrationShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  'case-study': {
    name: 'case-study',
    icons: caseStudyIcons,
    shapes: caseStudyShapes,
    // Mobile: Show first 4 icons for sequential reveal coverage
    mobile: {
      maxIcons: 4,
      maxShapes: 0,
      sizeMultiplier: 0.6,
    },
  },
  'blog-article': {
    name: 'blog-article',
    icons: blogArticleIcons,
    shapes: blogArticleShapes,
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
