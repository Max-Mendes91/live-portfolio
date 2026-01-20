'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/seo/config';

const Footer: React.FC = () => {
  const { owner } = SITE_CONFIG;
  const pathname = usePathname();
  const isPolish = pathname?.startsWith('/pl');

  // Localized content
  const content = {
    tagline: isPolish
      ? 'Programista full-stack specjalizujący się w React & Next.js. Tworzenie nowoczesnych stron i aplikacji webowych.'
      : 'Full-stack web developer specializing in React & Next.js. Creating modern websites and web applications.',
    location: isPolish
      ? `${owner.address.city}, ${owner.address.country} · Klienci z UK, US & Europy`
      : `Based in ${owner.address.city}, ${owner.address.country} · Serving UK, US & Europe`,
    servicesTitle: isPolish ? 'Usługi' : 'Services',
    contactTitle: isPolish ? 'Kontakt' : 'Contact',
    freeQuote: isPolish ? 'Bezpłatna Wycena' : 'Free Quote',
    services: isPolish
      ? [
          { href: '/pl/uslugi/web-development', label: 'Tworzenie Stron' },
          { href: '/pl/uslugi/web-design', label: 'Projektowanie WWW' },
          { href: '/pl/uslugi/seo', label: 'Pozycjonowanie SEO' },
          { href: '/pl/uslugi/ecommerce', label: 'Sklepy Internetowe' },
        ]
      : [
          { href: '/services/web-development', label: 'Web Development' },
          { href: '/services/web-design', label: 'Web Design' },
          { href: '/services/seo', label: 'SEO Optimization' },
          { href: '/services/ecommerce', label: 'E-commerce' },
        ],
    contactLink: isPolish ? '/pl/kontakt' : '/contact',
  };

  return (
    <footer className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">{SITE_CONFIG.name}</h2>
          <p className="text-zinc-500 mb-4">{content.tagline}</p>
          {/* Location keywords for SEO */}
          <p className="text-zinc-600 text-sm mb-8">{content.location}</p>
          <div className="flex gap-6">
            <a href={owner.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">GitHub</a>
            <a href={owner.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">LinkedIn</a>
            <a href={owner.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Twitter</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">{content.servicesTitle}</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              {content.services.map((service) => (
                <li key={service.href}>
                  <a href={service.href} className="hover:text-white transition-colors">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">{content.contactTitle}</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href={`mailto:${owner.email}`} className="hover:text-white transition-colors">{owner.email}</a></li>
              <li><a href={`tel:${owner.phone}`} className="hover:text-white transition-colors">{owner.phone}</a></li>
              <li><a href={content.contactLink} className="hover:text-white transition-colors">{content.freeQuote}</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO: Service area keywords */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <p className="text-[10px] text-zinc-700 tracking-wide">
          Web Developer Czestochowa · Programista Krakow · Tworzenie Stron Warszawa · React Developer Poland · Next.js Developer Europe
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-medium gap-4">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
        <span>{owner.address.city}, {owner.address.country}</span>
      </div>
    </footer>
  );
};

export default Footer;
