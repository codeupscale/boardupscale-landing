import Link from 'next/link'
import { Zap, Github, Star } from 'lucide-react'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + newsletter */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center h-7 w-7 bg-blue-600 rounded-lg">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Boardupscale</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-sm">
              The free, open-source Jira alternative. Built for teams that ship fast.
            </p>
            <div className="pt-2">
              <p className="text-xs font-medium text-gray-700 mb-2">Get product updates</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/codeupscale/boardupscale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <Star className="h-3.5 w-3.5" />
                  Star on GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Boardupscale. All rights reserved.
          </p>
          <a
            href="https://github.com/codeupscale/boardupscale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors"
          >
            <Github className="h-4 w-4" />
            Open source on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
