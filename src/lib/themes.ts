import { ThemeMode, ThemeOption } from '@/types';

/**
 * Metadata and configuration for the 5 design themes
 */
export const THEMES: ThemeOption[] = [
  {
    id: 'midnight',
    name: 'Midnight Gold',
    tagline: 'Signature deep purple + Islamic gold',
    accentColor: '#fcb045', // Islamic Gold
    iconName: 'Moon',
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    tagline: 'Futuristic frosted dark mode',
    accentColor: '#6366f1', // Indigo
    iconName: 'Sparkles',
  },
  {
    id: 'minimal',
    name: 'Minimal Light',
    tagline: 'Clean corporate recruiter mode',
    accentColor: '#2563eb', // Blue
    iconName: 'Sun',
  },
  {
    id: 'warm',
    name: 'Warm Earthy',
    tagline: 'Organic editorial craftsmanship',
    accentColor: '#c2684e', // Terracotta
    iconName: 'Flame',
  },
  {
    id: 'terminal',
    name: 'Terminal Hacker',
    tagline: 'Cyberpunk monospace CLI mode',
    accentColor: '#00ff41', // Matrix Green
    iconName: 'Terminal',
  },
];

export const DEFAULT_THEME: ThemeMode = 'midnight';
export const THEME_STORAGE_KEY = 'safith_portfolio_theme_v2';

/**
 * Type guard to check if an unknown string is a valid ThemeMode
 */
export function isValidTheme(theme: string): theme is ThemeMode {
  return THEMES.some((t) => t.id === theme);
}
