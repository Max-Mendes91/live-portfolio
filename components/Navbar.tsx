'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { PanelRight, X } from 'lucide-react';
import { SupportedLocale } from '@/types/i18n';
import { NavDict } from '@/types/i18n';
import { getRouteFromPathname, getLocalizedUrl } from '@/lib/i18n/routes';

interface NavbarProps {
  locale?: SupportedLocale;
  dictionary?: NavDict;
}

const Navbar: React.FC<NavbarProps> = ({ locale, dictionary }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Determine locale from props or fallback to pathname detection
  const currentLocale = locale ?? (pathname?.startsWith('/pl') ? 'pl' : 'en');
  const isPolish = currentLocale === 'pl';

  // Fallback labels for backward compatibility
  const labels = {
    about: dictionary?.about ?? (isPolish ? 'O mnie' : 'About'),
    services: dictionary?.services ?? (isPolish ? 'Usługi' : 'Services'),
    projects: dictionary?.projects ?? (isPolish ? 'Projekty' : 'Projects'),
    faq: dictionary?.faq ?? (isPolish ? 'Pytania' : 'FAQ'),
    contact: dictionary?.contact ?? (isPolish ? 'Kontakt' : 'Contact'),
  };

  // Navigation items with locale-specific slugs for SEO
  // Order: About — Services — Projects — FAQ — Contact
  const navItems = isPolish
    ? [
        { label: labels.about, href: '/pl/o-mnie' },
        { label: labels.services, href: '/pl/uslugi' },
        { label: labels.projects, href: '/pl/projekty' },
        { label: labels.faq, href: '/pl/pytania' },
        { label: labels.contact, href: '/pl/kontakt' },
      ]
    : [
        { label: labels.about, href: '/en/about' },
        { label: labels.services, href: '/en/services' },
        { label: labels.projects, href: '/en/projects' },
        { label: labels.faq, href: '/en/faq' },
        { label: labels.contact, href: '/en/contact' },
      ];

  const homeHref = isPolish ? '/pl' : '/en';
  const alternateLang: SupportedLocale = isPolish ? 'en' : 'pl';
  const alternateLabel = isPolish ? 'EN' : 'PL';

  // Get the equivalent page URL in the alternate language
  const getAlternateHref = (): string => {
    if (!pathname) return `/${alternateLang}`;

    const routeKey = getRouteFromPathname(pathname);
    if (routeKey) {
      return getLocalizedUrl(alternateLang, routeKey);
    }

    // Fallback to home if route not found
    return `/${alternateLang}`;
  };

  // Navbar always visible when mobile menu is open
  const navbarVisible = isVisible || isMobileMenuOpen;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Scroll-based navbar show/hide
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Stagger animation variants for mobile menu items
  const menuContainerVariants = {
    open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 30 },
    open: { opacity: 1, y: 0 },
  };

  const menuItemTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] px-6 py-8 transition-transform duration-300 ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href={homeHref} className="group">
            {/* Mobile: icon only | sm+: full logo */}
            <Image
              src="/favicon.svg"
              alt={dictionary?.logoAlt ?? 'Max Mendes - Web Developer'}
              width={32}
              height={32}
              className="h-7 w-7 sm:hidden group-hover:opacity-80 transition-opacity"
              priority
            />
            <Image
              src="/navbar-logo.png"
              alt={dictionary?.logoAlt ?? 'Max Mendes - Web Developer'}
              width={266}
              height={53}
              className="hidden sm:block h-8 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          <div className="flex items-center gap-10">
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors pb-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              ))}
            </div>

            {/* Language Switcher — desktop only */}
            <Link
              href={getAlternateHref()}
              className="hidden md:inline-flex text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors px-3 py-1.5 border border-white/10 rounded-full hover:border-white/30"
            >
              {alternateLabel}
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-text-secondary hover:text-text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <PanelRight size={22} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay — rendered outside <nav> to avoid translate-y inheritance */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="flex flex-col items-center justify-center h-full gap-7"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuContainerVariants}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={menuItemVariants}
                  transition={menuItemTransition}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-light tracking-wide transition-colors duration-300 ${
                      pathname === item.href || pathname?.startsWith(item.href + '/')
                        ? 'text-text-primary'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                className="w-12 h-[1px] bg-border my-1"
                variants={{
                  closed: { opacity: 0, scaleX: 0 },
                  open: { opacity: 1, scaleX: 1 },
                }}
                transition={menuItemTransition}
              />

              {/* Language Switcher */}
              <motion.div
                variants={menuItemVariants}
                transition={menuItemTransition}
              >
                <Link
                  href={getAlternateHref()}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted hover:text-text-primary transition-colors px-4 py-2 border border-border rounded-full hover:border-white/30"
                >
                  {alternateLabel}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
