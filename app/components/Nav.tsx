'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Menu, X } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 bg-blue-600 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">Boardupscale</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <a href={`${APP_URL}/login`} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </a>
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/features"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
            >
              Pricing
            </Link>
            <a
              href={`${APP_URL}/login`}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
            >
              Sign In
            </a>
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center w-full h-10 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
