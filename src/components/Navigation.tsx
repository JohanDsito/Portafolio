'use client'

import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: "#sobre-mi", label: "SOBRE MI" },
  { href: "#mis-proyectos", label: "MIS PROYECTOS" },
  { href: "#experiencia", label: "EXPERIENCIA" },
  { href: "#experiencias", label: "MIS EXPERIENCIAS" },
  { href: "#contacto", label: "CONTÁCTAME" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-teal-700/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-mono text-white hover:text-teal-100 transition-colors"
          >
            Johan D3 {'{code}'} = innovation();
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-teal-100 hover:text-white hover:bg-teal-600 px-3 py-2 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-teal-100 hover:text-white hover:bg-teal-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}