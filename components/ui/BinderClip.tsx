'use client';

import React from 'react';

interface BinderClipProps {
  /** Position of the clip on the section */
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Size of the clip */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

/**
 * Decorative binder clip element that creates a 3D depth effect
 * Like paper clips or binder rings on section corners
 */
const BinderClip: React.FC<BinderClipProps> = ({
  position,
  size = 'md',
  className = '',
}) => {
  // Size configurations - responsive from XS mobile (344px) to desktop
  // Default: XS Mobile | sm: 640px+ | md: 768px+ | lg: 1024px+
  const sizeClasses = {
    sm: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8',
    md: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10',
    lg: 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12',
  };

  // Position configurations - tighter on mobile, more space on larger screens
  // XS Mobile needs tight positioning (Galaxy Z Fold 5 = 344px width)
  const positionClasses = {
    'top-left': 'top-0 left-2 sm:left-4 md:left-6 lg:left-8 -translate-y-1/2',
    'top-right': 'top-0 right-2 sm:right-4 md:right-6 lg:right-8 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-2 sm:left-4 md:left-6 lg:left-8 translate-y-1/2',
    'bottom-right': 'bottom-0 right-2 sm:right-4 md:right-6 lg:right-8 translate-y-1/2',
  };

  // Inner circle size (the "hole" effect) - proportional to outer size
  const innerSizeClasses = {
    sm: 'w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5',
    md: 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3',
    lg: 'w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5',
  };

  return (
    <div
      className={`
        absolute z-20
        ${positionClasses[position]}
        ${className}
      `}
    >
      {/* Outer ring - the main clip body */}
      <div
        className={`
          relative flex items-center justify-center
          ${sizeClasses[size]}
          rounded-full
          bg-surface-active
          border-t border-t-border-active
          border-l border-l-border-subtle border-r border-r-border-subtle
          border-b border-b-transparent
          shadow-elevation-md
        `}
      >
        {/* Inner hole - creates the binder ring/clip effect */}
        <div
          className={`
            ${innerSizeClasses[size]}
            rounded-full
            bg-background
            border border-border-subtle
            shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]
          `}
        />

        {/* Top glow bloom for realism - scales with size */}
        <div className="absolute -top-[0.5px] left-1/2 -translate-x-1/2 w-3 sm:w-4 h-[1px] bg-glow-soft blur-[2px]" />

        {/* Subtle inner ring highlight */}
        <div className="absolute inset-[2px] rounded-full border-t border-border-subtle" />
      </div>

      {/* Drop shadow underneath for depth */}
      <div
        className={`
          absolute top-1 left-1/2 -translate-x-1/2
          ${sizeClasses[size]}
          rounded-full
          bg-black/30
          blur-[6px]
          -z-10
        `}
      />
    </div>
  );
};

export default BinderClip;
