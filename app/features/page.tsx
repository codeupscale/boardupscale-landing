import type { Metadata } from 'next'
import Link from 'next/link'
import {
  LayoutDashboard,
  Calendar,
  Workflow,
  ScanSearch,
  Github,
  Shield,
  ArrowRight,
  Zap,
} from 'lucide-react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore every feature in Boardupscale — Kanban & Scrum boards, AI duplicate detection, sprint planning, smart automation, GitHub integration, and enterprise security.',
  alternates: { canonical: '/features' },
}

const features = [
  {
    slug: 'kanban-scrum',
    icon: LayoutDashboard,
    title: 'Kanban & Scrum Boards',
    tagline: 'Visualise and move work your way',
    description:
      'Flexible drag-and-drop boards that support Kanban, Scrum, and hybrid workflows. WIP limits, swimlanes, and custom columns out of the box.',
    color: 'blue',
  },
  {
    slug: 'sprint-planning',
    icon: Calendar,
    title: 'Sprint Planning',
    tagline: 'Plan smarter, ship faster',
    description:
      'AI-powered velocity predictions, backlog grooming, burndown charts, and sprint reports — everything to run a tight agile cycle.',
    color: 'indigo',
  },
  {
    slug: 'ai-duplicate-detection',
    icon: ScanSearch,
    title: 'AI Duplicate Detection',
    tagline: 'Stop creating the same issue twice',
    description:
      'Real-time semantic scanning as you type surfaces similar and duplicate tickets before anyone hits "Create" — saving hours of duplicated effort.',
    color: 'purple',
  },
  {
    slug: 'automation',
    icon: Workflow,
    title: 'Smart Automation',
    tagline: 'Let rules do the repetitive work',
    description:
      'Build no-code automation rules triggered by events. Auto-assign issues, transition statuses, notify teammates, and fire webhooks.',
    color: 'orange',
  },
  {
    slug: 'github-integration',
    icon: Github,
    title: 'GitHub Integration',
    tagline: 'Dev workflow in one place',
    description:
      'Link PRs, commits, and branches directly to issues. Auto-transition tickets when PRs merge and get full visibility from code to deploy.',
    color: 'gray',
  },
  {
    slug: 'enterprise-security',
    icon: Shield,
    title: 'Enterprise Security',
    tagline: 'Security you can stake your business on',
    description:
      'SAML 2.0 SSO, granular RBAC, IP allowlisting, immutable audit trails with 2-year retention, and TLS/AES-256 encryption throughout.',
    color: 'green',
  },
]

const colorMap: Record<string, { bg: string; icon: string; badge: string; badgeText: string }> = {
  blue:   { bg: 'bg-blue-50',   icon: 'text-blue-600',   badge: 'bg-blue-50 border-blue-100',   badgeText: 'text-blue-700' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', badge: 'bg-indigo-50 border-indigo-100', badgeText: 'text-indigo-700' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-purple-50 border-purple-100', badgeText: 'text-purple-700' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', badge: 'bg-orange-50 border-orange-100', badgeText: 'text-orange-700' },
  gray:   { bg: 'bg-gray-100',  icon: 'text-gray-700',   badge: 'bg-gray-100 border-gray-200',   badgeText: 'text-gray-700' },
  green:  { bg: 'bg-green-50',  icon: 'text-green-600',  badge: 'bg-green-50 border-green-100',  badgeText: 'text-green-700' },
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5" />
            Everything you need to ship
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Built for teams that move fast
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every feature in Boardupscale is designed to reduce friction, eliminate toil, and give
            your team more time to build great software.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ slug, icon: Icon, title, tagline, description, color }) => {
              const c = colorMap[color]
              return (
                <Link
                  key={slug}
                  href={`/features/${slug}`}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  <div className={`h-12 w-12 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`h-6 w-6 ${c.icon}`} />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
                  <p className={`text-xs font-medium mb-3 ${c.icon}`}>{tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            See it all in action
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Start free — no credit card required. Full access to all features for 14 days.
          </p>
          <div className="mt-8">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-colors gap-2"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
