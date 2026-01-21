'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ============================================
   CARD COMPONENT SYSTEM
   Flexible card with variants and animations
   ============================================ */

// ============================================
// TYPES
// ============================================
type CardVariant = 'default' | 'elevated' | 'outline' | 'ghost';
type CardSize = 'sm' | 'md' | 'lg';

interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  size?: CardSize;
  interactive?: boolean;
  href?: string;
  animate?: boolean;
  animationDelay?: number;
}

type CardProps = CardBaseProps & Omit<HTMLMotionProps<'div'>, keyof CardBaseProps>;

// ============================================
// STYLES
// ============================================
const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface border border-border',
  elevated: 'bg-surface-hover border border-border shadow-elevation-md',
  outline: 'bg-transparent border border-border',
  ghost: 'bg-transparent border border-transparent',
};

const sizeStyles: Record<CardSize, string> = {
  sm: 'p-4 rounded-xl',
  md: 'p-6 rounded-2xl',
  lg: 'p-8 rounded-2xl',
};

const interactiveStyles = `
  cursor-pointer
  hover:border-border-hover
  hover:bg-surface-hover
  transition-all
  duration-normal
  ease-smooth
`;

// ============================================
// ANIMATION VARIANTS
// ============================================
const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// ============================================
// CARD COMPONENT
// ============================================
export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  interactive = false,
  href,
  animate = false,
  animationDelay = 0,
  ...props
}) => {
  const cardClasses = cn(
    variantStyles[variant],
    sizeStyles[size],
    interactive && interactiveStyles,
    'group',
    className
  );

  // If href provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="block h-full">
        <motion.div
          className={cardClasses}
          initial={animate ? 'hidden' : undefined}
          whileInView={animate ? 'visible' : undefined}
          viewport={animate ? { once: true } : undefined}
          custom={animationDelay}
          variants={animate ? cardAnimation : undefined}
          {...props}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      initial={animate ? 'hidden' : undefined}
      whileInView={animate ? 'visible' : undefined}
      viewport={animate ? { once: true } : undefined}
      custom={animationDelay}
      variants={animate ? cardAnimation : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// CARD HEADER
// ============================================
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

// ============================================
// CARD CONTENT
// ============================================
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
};

// ============================================
// CARD FOOTER
// ============================================
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mt-6 pt-4 border-t border-border-subtle', className)}>
      {children}
    </div>
  );
};

// ============================================
// CARD ICON (Icon container for cards)
// ============================================
interface CardIconProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const iconSizes: Record<string, string> = {
  sm: 'w-10 h-10 rounded-lg',
  md: 'w-14 h-14 rounded-xl',
  lg: 'w-16 h-16 rounded-xl',
};

export const CardIcon: React.FC<CardIconProps> = ({
  children,
  className,
  size = 'md',
}) => {
  return (
    <div
      className={cn(
        iconSizes[size],
        'bg-white/5 flex items-center justify-center',
        'text-text-muted group-hover:text-text-primary',
        'transition-colors duration-normal',
        className
      )}
    >
      {children}
    </div>
  );
};

// ============================================
// SERVICE CARD (Specialized for services page)
// ============================================
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href: string;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  href,
  index = 0,
}) => {
  return (
    <Card
      href={href}
      variant="default"
      size="lg"
      interactive
      animate
      animationDelay={index * 0.1}
    >
      <CardIcon size="md" className="mb-6">
        {icon}
      </CardIcon>

      <h2 className="text-heading-md text-text-primary mb-4 group-hover:text-white/90 transition-colors">
        {title}
      </h2>

      <p className="text-body-sm text-text-secondary font-light leading-relaxed mb-6">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="text-body-sm text-text-muted font-light flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-text-subtle" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <span className="inline-flex items-center gap-2 text-text-secondary group-hover:text-text-primary transition-colors text-body-sm">
        Learn more
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </Card>
  );
};

export default Card;
