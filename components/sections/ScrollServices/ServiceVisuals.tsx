'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ScrollServiceItem } from './index';

interface ServiceVisualsProps {
  service: ScrollServiceItem;
  activeIndex?: number;
  isSettled: boolean;
  icons: Record<string, LucideIcon>;
}

const ServiceVisuals: React.FC<ServiceVisualsProps> = ({
  service,
  isSettled,
  icons,
}) => {
  const Icon1 = icons[service.icon1];
  const Icon2 = icons[service.icon2];
  const IconCenter1 = icons[service.iconCenter1];
  const IconCenter2 = icons[service.iconCenter2];

  return (
    <div className="relative h-[500px] w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon 1 - Top Left Corner (stays in corner) */}
          <motion.div
            initial={{
              x: -150,
              y: -100,
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: isSettled ? 0.4 : 0.2,
              scale: isSettled ? 1 : 0.85,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="absolute top-0 left-0"
          >
            <Icon1
              className={cn(
                'w-24 h-24 lg:w-28 lg:h-28',
                'text-white/50',
                'transition-all duration-500'
              )}
              strokeWidth={1}
            />
          </motion.div>

          {/* Icon 2 - Bottom Right Corner (stays in corner) */}
          <motion.div
            initial={{
              x: 150,
              y: 100,
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: isSettled ? 0.4 : 0.2,
              scale: isSettled ? 1 : 0.85,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
              delay: 0.1,
            }}
            className="absolute bottom-0 right-0"
          >
            <Icon2
              className={cn(
                'w-24 h-24 lg:w-28 lg:h-28',
                'text-white/50',
                'transition-all duration-500'
              )}
              strokeWidth={1}
            />
          </motion.div>

          {/* Center Icons Container - Meet in the middle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4">
              {/* IconCenter1 - Comes from bottom-left */}
              <motion.div
                initial={{
                  x: -250,
                  y: 250,
                  opacity: 0,
                  rotate: -20,
                  scale: 0.4,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: isSettled ? 1 : 0.3,
                  rotate: isSettled ? 0 : -10,
                  scale: isSettled ? 1 : 0.7,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 0.15,
                }}
              >
                <IconCenter1
                  className={cn(
                    'w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44',
                    'text-white drop-shadow-[0_0_60px_rgba(255,255,255,0.2)]',
                    'transition-all duration-500'
                  )}
                  strokeWidth={1}
                />
              </motion.div>

              {/* IconCenter2 - Comes from top-right */}
              <motion.div
                initial={{
                  x: 250,
                  y: -250,
                  opacity: 0,
                  rotate: 20,
                  scale: 0.4,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: isSettled ? 1 : 0.3,
                  rotate: isSettled ? 0 : 10,
                  scale: isSettled ? 1 : 0.7,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 0.2,
                }}
              >
                <IconCenter2
                  className={cn(
                    'w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44',
                    'text-white drop-shadow-[0_0_60px_rgba(255,255,255,0.2)]',
                    'transition-all duration-500'
                  )}
                  strokeWidth={1}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceVisuals;
