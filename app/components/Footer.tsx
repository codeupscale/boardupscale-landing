import Link from 'next/link'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-7 w-7 bg-blue-600 rounded-lg">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Boardupscale</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <a href="/#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a
              href="https://github.com/codeupscale/boardupscale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                Cookies
              </Link>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Boardupscale
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
