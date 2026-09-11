'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="
        relative flex items-center justify-center
        w-9 h-9 rounded-full
        border border-gold-500/30
        text-gold-400 dark:text-gold-400
        hover:border-gold-500/70 hover:text-gold-500
        transition-all duration-200
        cursor-pointer
      "
    >
      {theme === 'dark' ? (
        <Sun size={16} className="transition-transform duration-200" />
      ) : (
        <Moon size={16} className="transition-transform duration-200" />
      )}
    </button>
  );
}
