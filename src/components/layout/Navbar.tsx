'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Connect', href: '#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-ink-50/80 dark:bg-ink-900/80 backdrop-blur-md border-b border-gold-500/10 shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[4.25rem] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-semibold text-lg tracking-tight text-gold-500 hover:text-gold-400 transition-colors"
          aria-label="Back to top"
        >
          ThadDev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  text-sm font-medium
                  text-ink-700 dark:text-white/60
                  hover:text-ink-900 dark:hover:text-white
                  transition-colors duration-150
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            className="
              hidden sm:flex items-center gap-1.5
              text-sm font-medium px-4 py-1.5 rounded-full
              border border-gold-500/40
              text-gold-600 dark:text-gold-400
              hover:bg-gold-500 hover:text-ink-900 hover:border-gold-500
              transition-all duration-200
            "
            aria-label="Download CV"
          >
            <Download size={14} />
            CV
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink-50 dark:bg-ink-900 border-t border-gold-500/10 px-5 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-base font-medium text-ink-700 dark:text-white/70 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                download
                onClick={closeMenu}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400"
              >
                <Download size={14} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
