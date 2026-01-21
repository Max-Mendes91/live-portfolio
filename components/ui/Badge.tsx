'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/* ============================================
   BADGE COMPONENT SYSTEM
   Status indicators, labels, and tags
   ============================================ */

// ============================================
// TYPES
// ============================================
type BadgeVariant = 'default' | 'outline' | 'solid' | 'pulse' | 'glow';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  dot?: boolean;
  pulse?: boolean;
}

// ============================================
// STYLES
// ============================================
const baseStyles = `
  inline-flex items-center justify-center
  font-medium uppercase tracking-widest
  rounded-full whitespace-nowrap
`;

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/5 border border-border text-text-secondary',
  outline: 'bg-transparent border border-border text-text-secondary',
  solid: 'bg-white/10 text-text-primary',
  pulse: 'bg-white/5 border border-border text-text-primary backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]',
  glow: 'bg-white/5 border border-border text-text-primary shadow-glow-sm',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'h-6 px-3 text-[9px] gap-1.5',
  md: 'h-8 px-4 text-[10px] gap-2',
  lg: 'h-10 px-5 text-label-sm gap-2.5',
};

// ============================================
// PULSE DOT
// ============================================
interface PulseDotProps {
  size?: BadgeSize;
  pulse?: boolean;
}

const dotSizes: Record<BadgeSize, string> = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2 w-2',
  lg: 'h-2.5 w-2.5',
};

const PulseDot: React.FC<PulseDotProps> = ({ size = 'md', pulse = true }) => (
  <span className={cn('relative flex', dotSizes[size])}>
    {pulse && (
      <span
        className={cn(
          'animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'
        )}
      />
    )}
    <span
      className={cn(
        'relative inline-flex rounded-full bg-white shadow-glow-sm',
        dotSizes[size]
      )}
    />
  </span>
);

// ============================================
// BADGE COMPONENT
// ============================================
export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  icon,
  dot = false,
  pulse = false,
}) => {
  // Pulse variant always shows pulsing dot
  const showPulse = variant === 'pulse' || pulse;
  const showDot = dot || showPulse;

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {showDot && <PulseDot size={size} pulse={showPulse} />}
      {!showDot && icon && <span className="flex-shrink-0">{icon}</span>}
      <span className={showPulse ? 'opacity-90' : ''}>{children}</span>
    </span>
  );
};

// ============================================
// STATUS BADGE (Semantic status indicators)
// ============================================
type StatusType = 'active' | 'inactive' | 'pending' | 'success' | 'warning' | 'error';

interface StatusBadgeProps {
  status: StatusType;
  children?: React.ReactNode;
  size?: BadgeSize;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; dotColor: string }> = {
  active: { label: 'Active', dotColor: 'bg-green-400' },
  inactive: { label: 'Inactive', dotColor: 'bg-zinc-500' },
  pending: { label: 'Pending', dotColor: 'bg-yellow-400' },
  success: { label: 'Success', dotColor: 'bg-green-400' },
  warning: { label: 'Warning', dotColor: 'bg-yellow-400' },
  error: { label: 'Error', dotColor: 'bg-red-400' },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  children,
  size = 'md',
  className,
}) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        baseStyles,
        'bg-white/5 border border-border text-text-secondary',
        sizeStyles[size],
        className
      )}
    >
      <span className={cn('relative flex', dotSizes[size])}>
        <span
          className={cn(
            'animate-pulse absolute inline-flex h-full w-full rounded-full opacity-75',
            config.dotColor
          )}
        />
        <span
          className={cn(
            'relative inline-flex rounded-full',
            dotSizes[size],
            config.dotColor
          )}
        />
      </span>
      <span>{children || config.label}</span>
    </span>
  );
};

// ============================================
// TAG BADGE (For categories, tech stack, etc.)
// ============================================
interface TagBadgeProps {
  children: React.ReactNode;
  className?: string;
  size?: BadgeSize;
  removable?: boolean;
  onRemove?: () => void;
}

export const TagBadge: React.FC<TagBadgeProps> = ({
  children,
  className,
  size = 'sm',
  removable = false,
  onRemove,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        'bg-surface border border-border text-text-secondary',
        'rounded-lg font-normal normal-case tracking-normal',
        size === 'sm' && 'h-6 px-2.5 text-body-xs gap-1.5',
        size === 'md' && 'h-7 px-3 text-body-sm gap-2',
        size === 'lg' && 'h-8 px-3.5 text-body-sm gap-2',
        className
      )}
    >
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-0.5 hover:text-text-primary transition-colors"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

// ============================================
// BADGE GROUP
// ============================================
interface BadgeGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const BadgeGroup: React.FC<BadgeGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {children}
    </div>
  );
};

export default Badge;
