'use client';

import { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from '@/types';
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES, isValidTheme } from '@/lib/themes';

/**
 * Custom hook to manage the 4-theme design system.
 *
 * Socratic Note (React State vs LocalStorage):
 * React state (`theme`) keeps our UI synchronized during the browser session,
 * while `localStorage` acts as permanent browser storage so Safith's visitor
 * doesn't lose their chosen theme when they refresh or revisit the page.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(DEFAULT_THEME);
  const [mounted, setMounted] = useState<boolean>(false);

  // Sync with current DOM and localStorage on initial client mount
  useEffect(() => {
    try {
      // Clear legacy theme key if present from earlier versions
      const legacyTheme = localStorage.getItem('safith_portfolio_theme');
      if (legacyTheme) {
        localStorage.removeItem('safith_portfolio_theme');
      }

      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      const currentDomTheme = document.documentElement.getAttribute('data-theme');

      if (savedTheme && isValidTheme(savedTheme)) {
        setThemeState(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (currentDomTheme && isValidTheme(currentDomTheme)) {
        setThemeState(currentDomTheme as ThemeMode);
      } else {
        setThemeState(DEFAULT_THEME);
        document.documentElement.setAttribute('data-theme', DEFAULT_THEME);
      }
    } catch {
      // Graceful fallback if localStorage is disabled or restricted
      document.documentElement.setAttribute('data-theme', DEFAULT_THEME);
    } finally {
      setMounted(true);
    }
  }, []);

  /**
   * Switch the active theme, update DOM attribute, and persist in localStorage
   */
  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Continue even if localStorage is inaccessible
    }
  }, []);

  return {
    theme,
    setTheme,
    mounted,
    themes: THEMES,
  };
}
