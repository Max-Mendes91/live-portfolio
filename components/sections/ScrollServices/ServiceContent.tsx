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
          <motion.div variants={itemVariants} className={cn('mb-6', mobile && 'flex justify-center')}>
            <div
              className={cn(
                'inline-flex items-center gap-3 px-5 py-2 rounded-full',
                'border border-border bg-white/5 backdrop-blur-sm',
                'shadow-[0_0_15px_rgba(255,255,255,0.05)]',
                'transition-all duration-500'
              )}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={cn(
                    'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                    isSettled ? 'bg-white' : 'bg-text-muted'
                  )}
                />
                <span
                  className={cn(
                    'relative inline-flex rounded-full h-2 w-2',
                    isSettled
                      ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                      : 'bg-text-muted shadow-none'
                  )}
                />
              </span>
              <span
                className={cn(
                  'text-label-sm uppercase',
                  isSettled ? 'text-white opacity-80' : 'text-text-muted opacity-60',
                  'transition-all duration-500'
                )}
              >
                {service.badge}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className={cn(
              'text-display-sm md:text-display-md mb-6',
              isSettled ? 'text-text-primary' : 'text-text-muted',
              'transition-colors duration-500'
            )}
          >
            {service.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={cn(
              'text-body-lg md:text-body-xl mb-8',
              isSettled ? 'text-text-secondary' : 'text-text-muted',
              'transition-colors duration-500',
              mobile ? 'max-w-lg mx-auto' : 'max-w-xl'
            )}
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.ul
            variants={itemVariants}
            className={cn(
              'space-y-3 mb-10',
              mobile && 'inline-block text-left'
            )}
          >
            {service.features.map((feature) => (
              <motion.li
                key={feature}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <span
                  className={cn(
                    'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center',
                    'border border-border',
                    isSettled ? 'bg-white/10 text-text-primary' : 'bg-transparent text-text-muted',
                    'transition-all duration-500'
                  )}
                >
                  <Check className="w-3 h-3" />
                </span>
                <span
                  className={cn(
                    'text-body-md',
                    isSettled ? 'text-text-secondary' : 'text-text-muted',
                    'transition-colors duration-500'
                  )}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              href={service.href}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-full',
                'text-body-sm font-medium tracking-wide',
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
                  'w-4 h-4 group-hover:translate-x-1 transition-transform',
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
