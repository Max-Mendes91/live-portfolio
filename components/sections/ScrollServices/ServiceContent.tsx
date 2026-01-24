'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ScrollServiceItem } from './index';

interface ServiceContentProps {
  service: ScrollServiceItem;
  isSettled: boolean;
  mobile?: boolean;
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  service,
  isSettled,
  mobile = false,
}) => {
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 60,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div className={cn('relative', mobile && 'text-center')}>
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Badge - PulseBadge style */}
          <motion.div variants={itemVariants} className={cn('mb-4 sm:mb-5 md:mb-6', mobile && 'flex justify-center')}>
            <div
              className={cn(
                'inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full',
                'border border-border bg-white/5 backdrop-blur-sm',
                'shadow-[0_0_15px_rgba(255,255,255,0.05)]',
                'transition-all duration-500'
              )}
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span
                  className={cn(
                    'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                    isSettled ? 'bg-white' : 'bg-text-muted'
                  )}
                />
                <span
                  className={cn(
                    'relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2',
                    isSettled
                      ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                      : 'bg-text-muted shadow-none'
                  )}
                />
              </span>
              <span
                className={cn(
                  'text-[9px] sm:text-[10px] md:text-label-sm uppercase tracking-[0.2em] sm:tracking-[0.25em]',
                  isSettled ? 'text-white opacity-80' : 'text-text-muted opacity-60',
                  'transition-all duration-500'
                )}
              >
                {service.badge}
              </span>
            </div>
          </motion.div>

          {/* Title - smaller on mobile to fit Polish text */}
          <motion.h2
            variants={itemVariants}
            className={cn(
              'text-2xl sm:text-3xl md:text-display-sm lg:text-display-md mb-3 sm:mb-4 md:mb-6',
              'tracking-tight sm:tracking-tighter',
              isSettled ? 'text-text-primary' : 'text-text-muted',
              'transition-colors duration-500'
            )}
          >
            {service.title}
          </motion.h2>

          {/* Description - no max-width on mobile to prevent text cutoff */}
          <motion.p
            variants={itemVariants}
            className={cn(
              'text-sm sm:text-base md:text-body-lg lg:text-body-xl mb-5 sm:mb-6 md:mb-8',
              'leading-relaxed',
              isSettled ? 'text-text-secondary' : 'text-text-muted',
              'transition-colors duration-500',
              mobile ? 'max-w-none sm:max-w-lg md:max-w-xl mx-auto' : 'max-w-xl'
            )}
          >
            {service.description}
          </motion.p>

          {/* Features - responsive spacing and text sizes */}
          <motion.ul
            variants={itemVariants}
            className={cn(
              'space-y-2 sm:space-y-2.5 md:space-y-3 mb-6 sm:mb-8 md:mb-10',
              mobile && 'inline-block text-left'
            )}
          >
            {service.features.map((feature) => (
              <motion.li
                key={feature}
                variants={itemVariants}
                className="flex items-start sm:items-center gap-2 sm:gap-3"
              >
                <span
                  className={cn(
                    'flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mt-0.5 sm:mt-0',
                    'border border-border',
                    isSettled ? 'bg-white/10 text-text-primary' : 'bg-transparent text-text-muted',
                    'transition-all duration-500'
                  )}
                >
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
                <span
                  className={cn(
                    'text-xs sm:text-sm md:text-body-md',
                    isSettled ? 'text-text-secondary' : 'text-text-muted',
                    'transition-colors duration-500'
                  )}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button - responsive sizing */}
          <motion.div variants={itemVariants}>
            <Link
              href={service.href}
              className={cn(
                'inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full',
                'text-xs sm:text-sm md:text-body-sm font-medium tracking-wide',
                'border border-border bg-surface',
                'hover:bg-surface-hover hover:border-border-hover',
                'transition-all duration-300',
                'group'
              )}
            >
              <span className={cn(
                isSettled ? 'text-text-primary' : 'text-text-muted',
                'transition-colors duration-500'
              )}>
                Learn More
              </span>
              <ArrowRight
                className={cn(
                  'w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform',
                  isSettled ? 'text-text-primary' : 'text-text-muted'
                )}
              />
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceContent;
