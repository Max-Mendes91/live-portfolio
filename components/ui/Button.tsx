'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ============================================
   BUTTON COMPONENT SYSTEM
   Unified button with multiple variants
   ============================================ */

// ============================================
// TYPES
// ============================================
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'corner-glow';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

type ButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps> & {
    type?: 'button' | 'submit' | 'reset';
  };

// ============================================
// STYLES
// ============================================
const baseStyles = `
  relative inline-flex items-center justify-center
  font-medium uppercase tracking-widest
  transition-all duration-normal ease-smooth
  disabled:opacity-50 disabled:cursor-not-allowed
`;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-white text-background
    hover:bg-white/90 hover:shadow-glow-sm
    active:scale-[0.98]
  `,
  secondary: `
    bg-surface border border-border text-text-primary
    hover:bg-surface-hover hover:border-border-hover
    active:scale-[0.98]
  `,
  outline: `
    bg-transparent border border-border text-text-primary
    hover:bg-white/5 hover:border-border-hover
    active:scale-[0.98]
  `,
  ghost: `
    bg-transparent text-text-secondary
    hover:text-text-primary hover:bg-white/5
    active:scale-[0.98]
  `,
  glow: `
    bg-white/5 backdrop-blur-md
    border border-border text-text-primary
    hover:bg-white/10 hover:border-border-hover
    hover:shadow-glow-md hover:scale-105
  `,
  'corner-glow': `
    bg-transparent text-text-primary
    hover:text-white/90
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-label-sm rounded-md gap-1.5',
  md: 'h-12 px-8 text-label-sm rounded-lg gap-2',
  lg: 'h-14 px-10 text-label-md rounded-lg gap-2.5',
};

// ============================================
// CORNER GLOW DECORATION
// ============================================
const CornerGlowDecoration: React.FC = () => (
  <>
    {/* Top-right corner */}
    <span className="absolute top-0 right-0 w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-glow-sm transition-all duration-slow" />
    <span className="absolute top-0 right-0 w-[1px] h-8 bg-white/30 group-hover:bg-white/60 group-hover:shadow-glow-sm transition-all duration-slow" />
    {/* Bottom-left corner */}
    <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-glow-sm transition-all duration-slow" />
    <span className="absolute bottom-0 left-0 w-[1px] h-8 bg-white/30 group-hover:bg-white/60 group-hover:shadow-glow-sm transition-all duration-slow" />
  </>
);

// ============================================
// GLOW EFFECTS
// ============================================
const GlowEffects: React.FC = () => (
  <>
    {/* Internal Shine Effect */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-slow blur-xl pointer-events-none" />
    {/* Radiant Bloom Background */}
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-slow bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />
  </>
);

// ============================================
// LOADING SPINNER
// ============================================
const LoadingSpinner: React.FC = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// ============================================
// BUTTON COMPONENT
// ============================================
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    variant === 'glow' && 'rounded-full',
    'group',
    className
  );

  const content = (
    <>
      {variant === 'corner-glow' && <CornerGlowDecoration />}
      {variant === 'glow' && <GlowEffects />}

      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </span>
    </>
  );

  // Link version
  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  // Button version
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
      className={buttonClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};

// ============================================
// ICON BUTTON
// ============================================
interface IconButtonProps extends Omit<ButtonBaseProps, 'icon' | 'iconPosition' | 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ...props
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  return (
    <motion.button
      disabled={disabled}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-lg',
        'transition-all duration-normal ease-smooth',
        sizeMap[size],
        variant === 'ghost' && 'bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary',
        variant === 'outline' && 'bg-transparent border border-border hover:border-border-hover text-text-secondary hover:text-text-primary',
        variant === 'secondary' && 'bg-surface border border-border hover:bg-surface-hover text-text-primary',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {icon}
    </motion.button>
  );
};

// ============================================
// BUTTON GROUP
// ============================================
interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  gap?: 'sm' | 'md' | 'lg';
}

const gapStyles = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  direction = 'horizontal',
  gap = 'md',
}) => {
  return (
    <div
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-col sm:flex-row' : 'flex-col',
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
