import React from 'react';
import { cn } from '@/lib/utils';

/* ============================================
   ICON COMPONENT SYSTEM
   Consistent icon containers and styling
   ============================================ */

// ============================================
// TYPES
// ============================================
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type IconVariant = 'default' | 'outline' | 'solid' | 'ghost';

interface IconContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: IconSize;
  variant?: IconVariant;
  interactive?: boolean;
}

// ============================================
// STYLES
// ============================================
const sizeStyles: Record<IconSize, { container: string; icon: string }> = {
  xs: { container: 'w-8 h-8 rounded-md', icon: 'w-4 h-4' },
  sm: { container: 'w-10 h-10 rounded-lg', icon: 'w-4 h-4' },
  md: { container: 'w-12 h-12 rounded-xl', icon: 'w-5 h-5' },
  lg: { container: 'w-14 h-14 rounded-xl', icon: 'w-6 h-6' },
  xl: { container: 'w-16 h-16 rounded-xl', icon: 'w-7 h-7' },
};

const variantStyles: Record<IconVariant, string> = {
  default: 'bg-white/5 text-text-muted',
  outline: 'bg-transparent border border-border text-text-muted',
  solid: 'bg-white/10 text-text-primary',
  ghost: 'bg-transparent text-text-muted',
};

const interactiveStyles = `
  group-hover:text-text-primary
  group-hover:bg-white/10
  transition-all duration-normal
`;

// ============================================
// ICON CONTAINER
// ============================================
export const IconContainer: React.FC<IconContainerProps> = ({
  children,
  className,
  size = 'md',
  variant = 'default',
  interactive = true,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizeStyles[size].container,
        variantStyles[variant],
        interactive && interactiveStyles,
        className
      )}
    >
      {/* Clone children to apply icon size */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
            className: cn(sizeStyles[size].icon, (child.props as { className?: string }).className),
          });
        }
        return child;
      })}
    </div>
  );
};

// ============================================
// ICON WRAPPER (Simple icon with consistent sizing)
// ============================================
interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: IconSize;
  color?: 'primary' | 'secondary' | 'muted' | 'subtle';
}

const colorStyles: Record<string, string> = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  muted: 'text-text-muted',
  subtle: 'text-text-subtle',
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  className,
  size = 'md',
  color = 'muted',
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        colorStyles[color],
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
            className: cn(sizeStyles[size].icon, (child.props as { className?: string }).className),
          });
        }
        return child;
      })}
    </span>
  );
};

// ============================================
// FEATURE ICON (For feature lists, benefits)
// ============================================
interface FeatureIconProps {
  icon: React.ReactNode;
  className?: string;
  size?: IconSize;
  glow?: boolean;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon,
  className,
  size = 'lg',
  glow = false,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'bg-gradient-to-br from-white/10 to-white/5',
        'border border-border',
        sizeStyles[size].container,
        'text-text-secondary',
        glow && 'shadow-glow-sm',
        className
      )}
    >
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: cn(sizeStyles[size].icon, (icon.props as { className?: string }).className),
          })
        : icon}
    </div>
  );
};

// ============================================
// LIST ICON (For bullet points)
// ============================================
interface ListIconProps {
  className?: string;
  variant?: 'dot' | 'check' | 'arrow';
}

export const ListIcon: React.FC<ListIconProps> = ({
  className,
  variant = 'dot',
}) => {
  if (variant === 'dot') {
    return (
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full bg-text-subtle flex-shrink-0',
          className
        )}
      />
    );
  }

  if (variant === 'check') {
    return (
      <svg
        className={cn('w-4 h-4 text-text-muted flex-shrink-0', className)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  }

  // Arrow variant
  return (
    <svg
      className={cn('w-4 h-4 text-text-muted flex-shrink-0', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

export default IconContainer;
