'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Terminal, CodeXml, Cloud, Database, Search, LineChart, ShoppingCart, CreditCard,
  Braces, Server, Globe, Lock, TrendingUp, FileSearch, Truck, Wallet,
  Bot, Zap, MessageSquare, Cpu,
  LucideIcon
} from 'lucide-react';
import ServiceContent from './ServiceContent';
import ServiceVisuals from './ServiceVisuals';
import ProgressDots from './ProgressDots';
import { cn } from '@/lib/utils';

// Icon mapping
const ICONS: Record<string, LucideIcon> = {
  Terminal,
  CodeXml,
  Cloud,
  Database,
  Search,
  LineChart,
  ShoppingCart,
  CreditCard,
  Braces,
  Server,
  Globe,
  Lock,
  TrendingUp,
  FileSearch,
  Truck,
  Wallet,
  Bot,
  Zap,
  MessageSquare,
  Cpu,
};

export interface ScrollServiceItem {
  id: string;
  icon1: string;
  icon2: string;
  iconCenter1: string; // From bottom-left, meets in middle
  iconCenter2: string; // From top-right, meets in middle
  badge: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

interface ScrollServicesProps {
  services?: ScrollServiceItem[];
  className?: string;
}

// Default services for English version
const DEFAULT_SERVICES: ScrollServiceItem[] = [
  {
    id: 'full-stack',
    icon1: 'Terminal',
    icon2: 'CodeXml',
    iconCenter1: 'Braces',
    iconCenter2: 'Server',
    badge: 'Development',
    title: 'Full-Stack Web Development',
    description: 'Business websites should feel solid, fast, and easy to grow—not fragile or locked into shortcuts. Projects here are treated like real products, with clean structure and long-term use in mind. Everything runs on a modern stack using React, Next.js, and TypeScript, so performance and speed are built in from day one.',
    features: [
      'Custom business website or web solution',
      'Clean, maintainable codebase',
      'SEO-friendly structure and fast loading',
      'Responsive layout for all screen sizes',
      'Deployment and launch setup',
    ],
    href: '/en/services/web-development',
  },
  {
    id: 'saas',
    icon1: 'Cloud',
    icon2: 'Database',
    iconCenter1: 'Globe',
    iconCenter2: 'Lock',
    badge: 'SaaS',
    title: 'SaaS & Web Applications',
    description: 'When a website isn\'t enough, you\'re usually dealing with software. User accounts, dashboards, permissions, subscriptions—these projects need clear logic and room to evolve. The goal is a system that works today and doesn\'t fall apart when features are added later.',
    features: [
      'Custom web app or SaaS platform',
      'User authentication and access control',
      'Dashboards and application workflows',
      'Payment handling and subscriptions',
      'Production-ready deployment',
    ],
    href: '/en/services/saas-web-apps',
  },
  {
    id: 'ecommerce',
    icon1: 'ShoppingCart',
    icon2: 'CreditCard',
    iconCenter1: 'Truck',
    iconCenter2: 'Wallet',
    badge: 'E-commerce',
    title: 'E-Commerce Development',
    description: 'Online stores need to be simple to use and easy to manage behind the scenes. Whether it\'s a Shopify-based store or a fully custom setup, the focus is on smooth checkout, clear product structure, and a store that can scale with sales.',
    features: [
      'Online store setup (Shopify or custom)',
      'Product and category structure',
      'Checkout and payment configuration',
      'Optimized product pages',
      'Launch support and adjustments',
    ],
    href: '/en/services/ecommerce-development',
  },
  {
    id: 'seo',
    icon1: 'Search',
    icon2: 'LineChart',
    iconCenter1: 'FileSearch',
    iconCenter2: 'TrendingUp',
    badge: 'SEO',
    title: 'SEO & Performance Optimization',
    description: 'Slow pages and messy structure quietly hurt results. This work is about making sites load faster, feel smoother, and make more sense to search engines. You end up with better visibility, better user experience, and fewer technical issues down the road.',
    features: [
      'Technical SEO review and fixes',
      'Page speed and performance improvements',
      'Image optimization and cleanup',
      'Metadata and indexing improvements',
      'Clear recommendations for next steps',
    ],
    href: '/en/services/seo-performance-optimization',
  },
];

const ScrollServices: React.FC<ScrollServicesProps> = ({
  services = DEFAULT_SERVICES,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSettled, setIsSettled] = useState(true);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress (0-1) to service index (0-3)
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const serviceCount = services.length;
    const newIndex = Math.min(
      Math.floor(progress * serviceCount),
      serviceCount - 1
    );

    if (newIndex !== activeIndex) {
      setIsSettled(false);
      setActiveIndex(newIndex);
      // Reset settled state after animation completes
      setTimeout(() => setIsSettled(true), 800);
    }
  });

  const activeService = services[activeIndex];

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative bg-background',
        className
      )}
      style={{ height: `${services.length * 100}vh` }}
    >
      {/* Decorative rounded top edge - NOT sticky, visual separator */}
      <div className="relative z-20">
        <div className="w-full h-24 bg-background rounded-t-[4rem] border-t border-border shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Desktop: Sticky split view - NOT inside overflow-hidden */}
      <div className="sticky top-0 h-screen w-full hidden lg:flex items-center z-10 -mt-24">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Text content */}
            <ServiceContent
              service={activeService}
              isSettled={isSettled}
            />

            {/* Right: 2 Large icons */}
            <ServiceVisuals
              service={activeService}
              activeIndex={activeIndex}
              isSettled={isSettled}
              icons={ICONS}
            />
          </div>
        </div>

        {/* Progress indicator */}
        <ProgressDots
          activeIndex={activeIndex}
          total={services.length}
        />
      </div>

      {/* Mobile: Stacked sections with whileInView */}
      <div className="lg:hidden">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-screen py-20 px-6 flex flex-col items-center justify-center"
          >
            {/* Single icon on mobile */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              {React.createElement(ICONS[service.icon1], {
                className: 'w-24 h-24 text-text-primary drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]',
              })}
            </motion.div>

            {/* Text content */}
            <ServiceContent
              service={service}
              isSettled={true}
              mobile
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrollServices;
export { DEFAULT_SERVICES };
