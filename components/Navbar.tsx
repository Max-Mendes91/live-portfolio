'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SupportedLocale } from '@/types/i18n';
import { NavDict } from '@/types/i18n';

interface NavbarProps {
  locale?: SupportedLocale;
  dictionary?: NavDict;
}

const Navbar: React.FC<NavbarProps> = ({ locale, dictionary }) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Determine locale from props or fallback to pathname detection
  const currentLocale = locale ?? (pathname?.startsWith('/pl') ? 'pl' : 'en');
  const isPolish = currentLocale === 'pl';

  // Fallback labels for backward compatibility
  const labels = {
    services: dictionary?.services ?? (isPolish ? 'Usługi' : 'Services'),
    portfolio: dictionary?.portfolio ?? (isPolish ? 'Projekty' : 'Projects'),
    contact: dictionary?.contact ?? (isPolish ? 'Kontakt' : 'Contact'),
  };

  // Navigation items with localized hrefs
  const navItems = isPolish
    ? [
        { label: labels.services, href: '/pl/uslugi/web-development' },
        { label: labels.portfolio, href: '/pl/projekty' },
        { label: labels.contact, href: '/pl/kontakt' },
      ]
    : [
        { label: labels.services, href: '/en/services/web-development' },
        { label: labels.portfolio, href: '/en/projects' },
        { label: labels.contact, href: '/en/contact' },
      ];

  const homeHref = isPolish ? '/pl' : '/en';
  const alternateLang = isPolish ? 'en' : 'pl';
  const alternateLabel = isPolish ? 'EN' : 'PL';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[60] px-6 py-8 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform">
            <div className="w-4 h-4 bg-black rounded-[1px]" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Max Mendes</span>
        </Link>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors pb-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <Link
            href={`/${alternateLang}`}
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors px-3 py-1.5 border border-white/10 rounded-full hover:border-white/30"
          >
            {alternateLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
