import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, ArrowRight, ChevronRight, CheckCircle2, GitPullRequest, GitCommit, GitBranch, Webhook } from 'lucide-react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'GitHub Integration',
  description:
    'Link PRs, commits, and branches to Boardupscale issues. Auto-transition tickets when PRs merge and get full dev workflow visibility without leaving your board.',
  alternates: { canonical: '/features/github-integration' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const capabilities = [
  {
    icon: GitPullRequest,
    title: 'PR ↔ issue linking',
    description: 'Reference an issue key in a PR title or description (e.g. BS-123) and the PR automatically appears on the issue. Open, merged, and closed states are synced in real time.',
  },
  {
    icon: GitCommit,
    title: 'Commit tracking',
    description: 'Every commit mentioning an issue key is logged on the issue timeline. See exactly what code changes relate to which work item without leaving the board.',
  },
  {
    icon: GitBranch,
    title: 'Branch visibility',
    description: 'Create a branch for an issue directly from Boardupscale — pre-named with the issue key. See all open branches on the issue card.',
  },
  {
    icon: Webhook,
    title: 'Auto-transitions',
    description: 'Merge a PR and the linked issue transitions automatically (e.g. In Review → Done). Configure the transition rules per project in minutes.',
  },
]

const benefits = [
  'Install with one click from the GitHub Marketplace',
  'Works with GitHub.com and GitHub Enterprise Server',
  'Supports mono-repos — link multiple issues from one PR',
  'PR review status shown on the issue (approved / changes requested)',
  'CI/CD status badges on issue cards (passing / failing)',
  'No GitHub API token stored — uses a secure GitHub App installation',
]

export default function GithubIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Breadcrumb + Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900">GitHub Integration</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium mb-6">
              <Github className="h-3.5 w-3.5" />
              GitHub Integration
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Close the loop between code and work
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Boardupscale connects directly to GitHub so your team can track PRs, commits, and
              branches right on the issue — and automatically move tickets when code ships. No more
              context-switching between your board and your repos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors gap-2"
              >
                Start free
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mock issue with linked PR */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">BS-204 · Fix login button on mobile</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-md">In Review</span>
                <span className="text-xs text-gray-400">Assigned to Sarah K.</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Linked pull requests</p>
                <div className="space-y-2">
                  {[
                    { number: '#318', title: 'fix(auth): resolve mobile login button tap target [BS-204]', status: 'merged', checks: 'passing' },
                    { number: '#321', title: 'test(auth): add mobile regression tests [BS-204]', status: 'open', checks: 'passing' },
                  ].map((pr) => (
                    <div key={pr.number} className="flex items-center gap-3 bg-gray-50 rounded-lg border border-gray-200 p-3">
                      <GitPullRequest className={`h-4 w-4 flex-shrink-0 ${pr.status === 'merged' ? 'text-purple-500' : 'text-green-500'}`} />
                      <span className="text-xs text-gray-500 font-mono flex-shrink-0">{pr.number}</span>
                      <span className="text-xs text-gray-700 flex-1 truncate">{pr.title}</span>
                      <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 ${pr.status === 'merged' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                        {pr.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Recent commits</p>
                <div className="space-y-1.5">
                  {[
                    'fix(auth): increase tap target on mobile login button',
                    'style: adjust button padding for iOS safe area',
                  ].map((msg) => (
                    <div key={msg} className="flex items-center gap-2">
                      <GitCommit className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-xs text-gray-600 truncate">{msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Full dev workflow visibility</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">From first commit to merge — every step is tracked on the issue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">What&apos;s included</h2>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Ship code and close tickets simultaneously</h2>
          <p className="mt-4 text-gray-400 text-lg">Available on Pro and Enterprise. Try free for 14 days.</p>
          <div className="mt-8">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-colors gap-2"
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
