'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function NewsletterForm({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
        <Check className="h-4 w-4" />
        You&apos;re on the list! We&apos;ll be in touch.
      </div>
    )
  }

  const isDark = variant === 'dark'

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={`flex-1 h-10 px-4 text-sm rounded-lg border outline-none transition-colors ${
          isDark
            ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500'
            : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
        }`}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors gap-1.5 whitespace-nowrap"
      >
        Subscribe
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </form>
  )
}
