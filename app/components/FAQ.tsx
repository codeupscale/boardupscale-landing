'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface FAQItem {
  q: string
  a: string
}

export function FAQ({ items, id }: { items: FAQItem[]; id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div id={id} className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">{faq.q}</span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0 ml-4" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
