'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Locale } from '@/types';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageOption {
  code: Locale;
  label: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', direction: 'ltr' },
  { code: 'ur', label: 'Urdu', nativeName: 'اردو', direction: 'rtl' },
];

/**
 * Interactive Language Selector Dropdown
 * Connects to LanguageContext to toggle English, Tamil, and Urdu RTL
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale: currentLocale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLang = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  const handleSelectLanguage = (lang: LanguageOption) => {
    setLocale(lang.code);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative inline-block text-start', className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border border-[var(--border-card)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 text-[var(--accent-primary)]" />
        <span className="font-semibold uppercase text-xs">{selectedLang.code}</span>
        <ChevronDown className={cn('w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute end-0 mt-2 w-48 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-primary)] p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-card)] mb-1">
            Language / மொழி
          </div>

          <div className="space-y-1">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLocale;

              return (
                <button
                  key={lang.code}
                  type="button"
                  role="menuitem"
                  onClick={() => handleSelectLanguage(lang)}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2 rounded-xl text-start text-sm transition-all duration-150 cursor-pointer',
                    isSelected
                      ? 'bg-[var(--badge-bg)] text-[var(--accent-primary)] font-semibold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'
                  )}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className="text-xs text-[var(--text-muted)]">{lang.label}</span>
                  </div>

                  {isSelected && <Check className="w-4 h-4 text-[var(--accent-primary)] shrink-0 ms-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
