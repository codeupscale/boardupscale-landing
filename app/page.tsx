import Link from 'next/link'
import {
  Zap,
  LayoutDashboard,
  Calendar,
  Workflow,
  Brain,
  Github,
  Shield,
  Check,
  ArrowRight,
  ScanSearch,
  Sparkles,
  GitMerge,
  Code2,
  Server,
  Unlock,
  Star,
} from 'lucide-react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Kanban & Scrum Boards',
    description: 'Flexible boards that adapt to your workflow',
  },
  {
    icon: Calendar,
    title: 'Sprint Planning',
    description: 'AI-powered sprint intelligence and predictions',
  },
  {
    icon: Workflow,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks with powerful rules',
  },
  {
    icon: ScanSearch,
    title: 'AI Duplicate Detection',
    description:
      "Automatically flags duplicate issues the moment they're created — before they waste your team's time",
  },
  {
    icon: Github,
    title: 'GitHub Integration',
    description: 'Seamless dev workflow with PR and commit tracking',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SAML SSO, RBAC, and audit trails',
  },
]

const plans = [
  {
    name: 'Free',
    price: 0,
    period: '/month',
    description: 'For individuals and small teams getting started',
    features: ['Up to 5 users', '1 GB storage', 'Kanban & Scrum boards', 'Basic reporting', 'Email support'],
    cta: 'Get Started Free',
    href: `${APP_URL}/register`,
    popular: false,
  },
  {
    name: 'Pro',
    price: 7,
    period: '/user/mo',
    description: 'For growing teams that need more power',
    features: [
      'Up to 25 users',
      '10 GB storage',
      'AI-powered features',
      'GitHub integration',
      'Advanced reporting',
      'Custom workflows',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    href: `${APP_URL}/register`,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 15,
    period: '/user/mo',
    description: 'For organizations that need full control',
    features: [
      'Unlimited users',
      '100 GB storage',
      'All AI features',
      'SAML SSO',
      'Audit trails',
      'Custom roles & permissions',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    href: '/pricing',
    popular: false,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(229 231 235) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Now with AI duplicate detection &amp; sprint intelligence
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Project management that{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              works like you think
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The modern, AI-powered Jira alternative. Built for teams that ship fast.
            Kanban, Scrum, and everything in between.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 gap-2"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all gap-2"
            >
              See Pricing
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { icon: Code2, label: 'MIT Licensed' },
              { icon: Server, label: 'Self-hostable' },
              { icon: Unlock, label: 'No vendor lock-in' },
              { icon: Star, label: 'Free forever plan' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-sm text-gray-500">
                <Icon className="h-4 w-4 text-green-500" />
                {label}
              </div>
            ))}
          </div>

          {/* Hero visual */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60 overflow-hidden">
              <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400 font-mono">boardupscale.com/board</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="grid grid-cols-4 gap-4">
                  {['To Do', 'In Progress', 'In Review', 'Done'].map((col, i) => (
                    <div key={col} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{col}</span>
                        <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                          {[3, 2, 1, 4][i]}
                        </span>
                      </div>
                      {Array.from({ length: [3, 2, 1, 4][i] }).map((_, j) => (
                        <div
                          key={j}
                          className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm"
                        >
                          <div className="h-2 w-3/4 bg-gray-200 rounded mb-2" />
                          <div className="h-2 w-1/2 bg-gray-100 rounded" />
                          <div className="flex items-center gap-2 mt-3">
                            <div
                              className={`h-1.5 w-8 rounded-full ${
                                ['bg-red-300', 'bg-yellow-300', 'bg-blue-300', 'bg-green-300'][
                                  (i + j) % 4
                                ]
                              }`}
                            />
                            <div className="h-5 w-5 rounded-full bg-gray-200 ml-auto" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Everything your team needs to ship
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From planning to deployment, Boardupscale gives your team the tools to move fast without
              breaking things.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Duplicate Detection Spotlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium mb-6">
                <Brain className="h-3.5 w-3.5" />
                AI-Powered
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Stop creating the same issue{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  twice
                </span>
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Boardupscale&apos;s AI scans your entire backlog the moment a new issue is typed. Before
                anyone hits &quot;Create&quot;, it surfaces similar and duplicate tickets — so your team never
                splits effort on the same problem.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: ScanSearch, text: 'Real-time semantic similarity scanning as you type' },
                  { icon: GitMerge, text: 'One-click merge suggestions for confirmed duplicates' },
                  { icon: Sparkles, text: "Learns from your team's past resolutions over time" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="h-3.5 w-3.5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: mock UI */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl blur-2xl opacity-60" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Window chrome */}
                <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-mono">New Issue</span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Title field */}
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">Title</label>
                    <div className="h-10 rounded-lg border border-blue-300 bg-blue-50 flex items-center px-3 text-sm text-gray-700 ring-2 ring-blue-100">
                      Fix login button not responding on mobile
                    </div>
                  </div>

                  {/* AI banner */}
                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Sparkles className="h-4 w-4 text-purple-600 flex-shrink-0" />
                      <span className="text-xs font-semibold text-purple-700">AI found 2 similar issues</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { id: 'BS-142', title: 'Mobile login button unresponsive after iOS 17', score: 97 },
                        { id: 'BS-89', title: 'Login CTA broken on Safari mobile', score: 81 },
                      ].map(({ id, title, score }) => (
                        <div key={id} className="flex items-center gap-2.5 bg-white rounded-md border border-purple-100 p-2.5">
                          <span className="text-xs font-mono text-purple-500 flex-shrink-0">{id}</span>
                          <span className="text-xs text-gray-600 flex-1 truncate">{title}</span>
                          <span
                            className={`text-xs font-semibold flex-shrink-0 px-1.5 py-0.5 rounded-full ${
                              score >= 90
                                ? 'bg-red-100 text-red-600'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {score}% match
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 h-7 rounded-md bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition-colors">
                        View duplicate
                      </button>
                      <button className="flex-1 h-7 rounded-md bg-white border border-purple-200 text-purple-700 text-xs font-medium hover:bg-purple-50 transition-colors">
                        Create anyway
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free & Open Source */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Code2 className="h-3.5 w-3.5" />
              Free &amp; Open Source
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Own your tools.{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Own your data.
              </span>
            </h2>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              Boardupscale is MIT-licensed and built in the open. Use the hosted version for free,
              or deploy it on your own infrastructure — no per-seat fees, no lock-in, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: Code2,
                title: 'MIT Licensed',
                description:
                  'The full source code is on GitHub. Read it, fork it, modify it, and contribute back. No proprietary black boxes.',
              },
              {
                icon: Server,
                title: 'Self-hostable',
                description:
                  'Run Boardupscale on your own servers with Docker Compose or Kubernetes. Full control over where your data lives.',
              },
              {
                icon: Unlock,
                title: 'No lock-in',
                description:
                  'Export all your data at any time as CSV or JSON. Move to a self-hosted instance or migrate whenever you want.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-green-500/30 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/codeupscale/boardupscale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 transition-colors gap-2"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-gray-900 bg-green-400 rounded-xl hover:bg-green-300 transition-colors gap-2"
            >
              Start for free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? 'border-blue-200 shadow-xl shadow-blue-100/50 ring-1 ring-blue-200'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              View full pricing comparison
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
