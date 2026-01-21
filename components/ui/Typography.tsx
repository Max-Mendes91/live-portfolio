import React from 'react';
import { cn } from '@/lib/utils';

/* ============================================
   TYPOGRAPHY COMPONENT SYSTEM
   Consistent text styling across the app
   ============================================ */

// ============================================
// TYPES
// ============================================
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElement = 'p' | 'span' | 'div' | 'label';

interface BaseTypographyProps {
  children: React.ReactNode;
  className?: string;
}

// ============================================
// DISPLAY (Hero headlines)
// ============================================
interface DisplayProps extends BaseTypographyProps {
  as?: HeadingLevel;
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

const displaySizes = {
  xl: 'text-display-sm md:text-display-lg lg:text-display-xl', // 48px -> 72px -> 80px
  lg: 'text-display-sm md:text-display-md lg:text-display-lg', // 48px -> 60px -> 72px
  md: 'text-heading-xl md:text-display-sm lg:text-display-md', // 40px -> 48px -> 60px
  sm: 'text-heading-lg md:text-heading-xl lg:text-display-sm', // 32px -> 40px -> 48px
};

export const Display: React.FC<DisplayProps> = ({
  children,
  as: Component = 'h1',
  size = 'lg',
  className,
}) => {
  return (
    <Component
      className={cn(
        displaySizes[size],
        'text-text-primary font-normal tracking-tighter',
        className
      )}
    >
      {children}
    </Component>
  );
};

// ============================================
// HEADING
// ============================================
interface HeadingProps extends BaseTypographyProps {
  as?: HeadingLevel;
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

const headingSizes = {
  xl: 'text-heading-lg md:text-heading-xl', // 32px -> 40px
  lg: 'text-heading-md md:text-heading-lg', // 24px -> 32px
  md: 'text-heading-sm md:text-heading-md', // 20px -> 24px
  sm: 'text-body-lg md:text-heading-sm', // 18px -> 20px
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  as: Component = 'h2',
  size = 'lg',
  className,
}) => {
  return (
    <Component
      className={cn(
        headingSizes[size],
        'text-text-primary font-normal tracking-tight',
        className
      )}
    >
      {children}
    </Component>
  );
};

// ============================================
// TEXT (Body copy)
// ============================================
interface TextProps extends BaseTypographyProps {
  as?: TextElement;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  color?: 'primary' | 'secondary' | 'muted' | 'subtle';
  weight?: 'light' | 'normal' | 'medium';
}

const textSizes = {
  xl: 'text-body-lg md:text-body-xl', // 18px -> 20px
  lg: 'text-body-md md:text-body-lg', // 16px -> 18px
  md: 'text-body-sm md:text-body-md', // 14px -> 16px
  sm: 'text-body-sm', // 14px
  xs: 'text-body-xs', // 12px
};

const textColors = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  muted: 'text-text-muted',
  subtle: 'text-text-subtle',
};

const textWeights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
};

export const Text: React.FC<TextProps> = ({
  children,
  as: Component = 'p',
  size = 'md',
  color = 'secondary',
  weight = 'light',
  className,
}) => {
  return (
    <Component
      className={cn(
        textSizes[size],
        textColors[color],
        textWeights[weight],
        'leading-relaxed',
        className
      )}
    >
      {children}
    </Component>
  );
};

// ============================================
// LABEL (UI labels, buttons, badges)
// ============================================
interface LabelProps extends BaseTypographyProps {
  as?: TextElement;
  size?: 'lg' | 'md' | 'sm';
  color?: 'primary' | 'secondary' | 'muted';
  uppercase?: boolean;
}

const labelSizes = {
  lg: 'text-label-lg',
  md: 'text-label-md',
  sm: 'text-label-sm',
};

export const Label: React.FC<LabelProps> = ({
  children,
  as: Component = 'span',
  size = 'md',
  color = 'primary',
  uppercase = true,
  className,
}) => {
  return (
    <Component
      className={cn(
        labelSizes[size],
        textColors[color],
        uppercase && 'uppercase',
        className
      )}
    >
      {children}
    </Component>
  );
};

// ============================================
// PROSE (Long-form content)
// ============================================
interface ProseProps extends BaseTypographyProps {
  size?: 'lg' | 'md' | 'sm';
}

export const Prose: React.FC<ProseProps> = ({
  children,
  size = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-prose',
        textSizes[size],
        'text-text-secondary font-light leading-relaxed',
        // Prose styles for nested elements
        '[&>p]:mb-4 [&>p:last-child]:mb-0',
        '[&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4',
        '[&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4',
        '[&>li]:mb-2',
        '[&>a]:text-text-primary [&>a]:underline [&>a]:underline-offset-4 [&>a]:hover:text-accent',
        '[&>strong]:font-medium [&>strong]:text-text-primary',
        '[&>code]:bg-surface [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-body-sm',
        className
      )}
    >
      {children}
    </div>
  );
};

// ============================================
// GRADIENT TEXT
// ============================================
interface GradientTextProps extends BaseTypographyProps {
  as?: HeadingLevel | TextElement;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  as: Component = 'span',
  className,
}) => {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Component>
  );
};
