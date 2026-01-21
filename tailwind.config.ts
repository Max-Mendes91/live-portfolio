import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================
      // FONT FAMILY
      // ============================================
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },

      // ============================================
      // COLOR PALETTE
      // Semantic color tokens for the dark theme
      // ============================================
      colors: {
        // Background colors
        background: {
          DEFAULT: '#050505',
          alt: '#000000',
          elevated: '#080808',
          subtle: '#0a0a0a',
        },
        // Surface colors (cards, modals, etc.)
        surface: {
          DEFAULT: '#080808',
          hover: '#0c0c0c',
          active: '#101010',
          muted: '#0a0a0a',
        },
        // Border colors
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.10)',
          subtle: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.20)',
          active: 'rgba(255, 255, 255, 0.30)',
        },
        // Text colors
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa', // zinc-400
          muted: '#71717a', // zinc-500
          subtle: '#52525b', // zinc-600
        },
        // Accent color (for highlights, focus states)
        accent: {
          DEFAULT: '#ffffff',
          muted: 'rgba(255, 255, 255, 0.60)',
          subtle: 'rgba(255, 255, 255, 0.30)',
        },
        // Glow colors (for effects)
        glow: {
          white: 'rgba(255, 255, 255, 0.5)',
          soft: 'rgba(255, 255, 255, 0.3)',
        },
      },

      // ============================================
      // SPACING SCALE
      // Extended spacing for consistent layouts
      // ============================================
      spacing: {
        // Section spacing
        'section-sm': '3rem', // 48px
        'section-md': '5rem', // 80px
        'section-lg': '7.5rem', // 120px
        'section-xl': '10rem', // 160px
        // Container padding
        'container-x': '1.5rem', // 24px (mobile)
        'container-x-md': '2rem', // 32px (tablet)
        'container-x-lg': '3rem', // 48px (desktop)
        // Component spacing
        'component-xs': '0.5rem', // 8px
        'component-sm': '1rem', // 16px
        'component-md': '1.5rem', // 24px
        'component-lg': '2rem', // 32px
        'component-xl': '3rem', // 48px
      },

      // ============================================
      // TYPOGRAPHY SCALE
      // Font sizes with line-heights
      // ============================================
      fontSize: {
        // Display (hero headlines)
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '400' }], // 80px
        'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '400' }], // 72px
        'display-md': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '400' }], // 60px
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }], // 48px
        // Headings
        'heading-xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '400' }], // 40px
        'heading-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '400' }], // 32px
        'heading-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '400' }], // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '400' }], // 20px
        // Body
        'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '300' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '300' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '300' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '300' }], // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '300' }], // 12px
        // Labels & UI
        'label-lg': ['0.875rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
        'label-md': ['0.75rem', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '500' }],
        'label-sm': ['0.625rem', { lineHeight: '1', letterSpacing: '0.25em', fontWeight: '500' }], // 10px - buttons
      },

      // ============================================
      // BORDER RADIUS
      // Consistent corner rounding
      // ============================================
      borderRadius: {
        'none': '0',
        'sm': '0.25rem', // 4px - small elements
        'md': '0.5rem', // 8px - buttons, inputs
        'lg': '0.75rem', // 12px - cards small
        'xl': '1rem', // 16px - cards medium
        '2xl': '1.25rem', // 20px - cards large
        '3xl': '1.5rem', // 24px - modals, large cards
        'full': '9999px', // pills, avatars
      },

      // ============================================
      // BOX SHADOWS
      // Elevation & glow effects
      // ============================================
      boxShadow: {
        // Elevation shadows (subtle for dark theme)
        'elevation-sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'elevation-md': '0 4px 8px rgba(0, 0, 0, 0.5)',
        'elevation-lg': '0 8px 24px rgba(0, 0, 0, 0.6)',
        'elevation-xl': '0 16px 48px rgba(0, 0, 0, 0.7)',
        // Glow shadows
        'glow-sm': '0 0 10px rgba(255, 255, 255, 0.3)',
        'glow-md': '0 0 20px rgba(255, 255, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.5)',
        'glow-white': '0 0 10px rgba(255, 255, 255, 0.5)',
        // Inner shadows
        'inner-subtle': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },

      // ============================================
      // BACKDROP BLUR
      // ============================================
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },

      // ============================================
      // ANIMATIONS
      // Reusable animation patterns
      // ============================================
      animation: {
        // Marquee
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        // Spin
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 8s linear infinite',
        // Pulse
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        // Float
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        // Fade
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // ============================================
      // TRANSITIONS
      // Consistent timing functions
      // ============================================
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'snappy': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '800ms',
      },

      // ============================================
      // MAX WIDTH (Containers)
      // ============================================
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1152px', // 6xl equivalent
        'container-2xl': '1280px',
        'prose': '65ch',
      },
    },
  },
  plugins: [],
};

export default config;
