'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#sobre-mi', label: 'SOBRE MI' },
  { href: '#mis-proyectos', label: 'MIS PROYECTOS' },
  { href: '#experiencia', label: 'EXPERIENCIA' },
  { href: '#experiencias', label: 'MIS EXPERIENCIAS' },
  { href: '#contacto', label: 'CONTÁCTAME' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-teal-900 backdrop-blur-sm">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-mono text-teal-700 hover:text-teal-100 dark:text-teal-300 dark:hover:text-teal-100 transition-colors"
          >
            Johan_D3 {"{code}"} = innovation()
          </Link>
          <nav className="hidden md:block">
            <section className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-teal-700 hover:text-white hover:bg-teal-600 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-teal-100 px-3 py-2 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </section>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-teal-700 hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-teal-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <button
            onClick={toggleDarkMode}
            className="ml-4 text-teal-700 dark:text-teal-300 p-2 rounded-md hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 dark:hover:text-teal-100"
          >
            {isDarkMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>
        </section>
      </header>

      {isMenuOpen && (
        <nav className="md:hidden">
          <section className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-teal-700 hover:text-white hover:bg-teal-600 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-teal-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </section>
        </nav>
      )}
    </nav>
  );
}
