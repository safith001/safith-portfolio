'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, TextDirection } from '@/types';
import { TRANSLATIONS, TranslationDictionary } from '@/data/translations';

interface LanguageContextType {
  locale: Locale;
  direction: TextDirection;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = 'safith_portfolio_lang_v1';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language Provider
 * Manages active language state, persists user preference to localStorage,
 * and dynamically adjusts the HTML document's `lang` and `dir` attributes.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Synchronize with stored preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === 'en' || saved === 'ta' || saved === 'ur')) {
        setLocaleState(saved);
        const dir: TextDirection = saved === 'ur' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', saved);
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
      }
    } catch {
      // LocalStorage access fallback
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, []);

  /**
   * Switch the active locale, update the DOM direction, and persist to storage
   */
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    const dir: TextDirection = newLocale === 'ur' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.setAttribute('dir', dir);
      document.documentElement.setAttribute('lang', newLocale);
    } catch {
      // Graceful fallback if storage is restricted
    }
  }, []);

  const direction: TextDirection = locale === 'ur' ? 'rtl' : 'ltr';
  const t = TRANSLATIONS[locale] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ locale, direction, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to access internationalization dictionary and controls
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
