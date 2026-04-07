import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'https://boardupscale.com'
const DEFAULT_DESCRIPTION =
  'The free, open-source alternative to Jira. Kanban, Scrum, AI duplicate detection, sprint planning, GitHub integration and more — self-hosted or in the cloud.'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Boardupscale — Free, Open-Source Jira Alternative',
    template: '%s — Boardupscale',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'jira alternative',
    'project management',
    'kanban',
    'scrum',
    'agile',
    'open source',
    'self-hosted',
    'issue tracker',
    'sprint planning',
    'AI duplicate detection',
  ],
  authors: [{ name: 'Boardupscale', url: BASE_URL }],
  creator: 'Boardupscale',
  openGraph: {
    type: 'website',
    siteName: 'Boardupscale',
    title: 'Boardupscale — Free, Open-Source Jira Alternative',
    description: DEFAULT_DESCRIPTION,
    url: BASE_URL,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@boardupscale',
    title: 'Boardupscale — Free, Open-Source Jira Alternative',
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.svg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${BASE_URL}/#organization`,
                  name: 'Boardupscale',
                  url: BASE_URL,
                  logo: { '@type': 'ImageObject', url: `${BASE_URL}/favicon.svg` },
                  sameAs: ['https://github.com/codeupscale/boardupscale'],
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': `${BASE_URL}/#app`,
                  name: 'Boardupscale',
                  url: BASE_URL,
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  description: DEFAULT_DESCRIPTION,
                  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                  publisher: { '@id': `${BASE_URL}/#organization` },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: 'Boardupscale',
                  publisher: { '@id': `${BASE_URL}/#organization` },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
