/**
 * Portfolio Color System
 * 
 * This file defines the color palette used throughout the portfolio.
 * To change colors, update the CSS variables in globals.css or use these utilities.
 */

export const colors = {
  // Primary colors
  primary: {
    DEFAULT: '#37D299',
    foreground: '#ffffff',
  },
  
  // Secondary colors (Main & ContactMe background)
  secondary: {
    DEFAULT: '#F1FAEE',
    foreground: '#111827',
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#37D299',
    foreground: '#ffffff',
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#f8fafc',
    foreground: '#64748b',
  },
  
  // Card colors
  card: {
    DEFAULT: '#ffffff',
    foreground: '#111827',
  },
  
  // Projects section (dark background)
  projects: {
    DEFAULT: '#0f172a',
    foreground: '#f1f5f9',
  },
  
  // Border color
  border: '#37D299',
} as const;

// Helper functions for getting colors
export const getColor = (colorPath: string) => {
  const keys = colorPath.split('.');
  let current: any = colors;
  
  for (const key of keys) {
    current = current[key];
    if (current === undefined) return undefined;
  }
  
  return current;
};

// Tailwind class utilities
export const colorClasses = {
  primary: {
    bg: 'bg-primary',
    text: 'text-primary',
    border: 'border-primary',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-secondary',
    border: 'border-secondary',
  },
  accent: {
    bg: 'bg-accent',
    text: 'text-accent',
    border: 'border-accent',
  },
  muted: {
    bg: 'bg-muted',
    text: 'text-muted',
    border: 'border-muted',
  },
  card: {
    bg: 'bg-card',
    text: 'text-card',
    border: 'border-card',
  },
  projects: {
    bg: 'bg-projects',
    text: 'text-projects',
    border: 'border-projects',
  },
} as const;

export type ColorKey = keyof typeof colorClasses;
export type ColorVariant = keyof typeof colorClasses.primary;
