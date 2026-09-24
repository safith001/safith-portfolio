'use client';

import React, { useState, useEffect } from 'react';
import { Menu, FileDown } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { MobileNav } from '@/components/layout/MobileNav';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

/**
 * Sticky Frosted-Glass Header with Responsive Navigation
 */
export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.timeline, href: '#timeline' },
    { label: t.nav.credentials, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ];

  // Add subtle shadow and border when scrolling past 15px
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 15);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'border-b border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-2xl shadow-lg'
            : 'border-b border-transparent bg-transparent backdrop-blur-md'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] rounded-xl p-1"
            aria-label="Mohammed Safith Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary)] flex items-center justify-center font-black text-white text-base shadow-md group-hover:scale-105 transition-transform duration-200">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-[var(--text-primary)] text-base leading-tight">
                SAFITH
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[var(--text-muted)]">
                B.IT Graduate
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Language, Theme & Download CV Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />

            {/* Direct Verified CV Download CTA */}
            <a
              href="/cv/Mohammed_Safith_CV.pdf"
              download="Mohammed_Safith_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 ms-1 px-4 py-2 rounded-xl text-sm font-semibold bg-[var(--accent-primary)] hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              title="Download Mohammed Safith's Verified Curriculum Vitae (PDF)"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.resume}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] cursor-pointer"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer for Mobile Screens */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
