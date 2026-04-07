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
  AlertTriangle,
  Lock,
  DollarSign,
  Terminal,
  Upload,
  Rocket,
  Users,
  GitPullRequest,
} from 'lucide-react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { FAQ, FAQSchema, type FAQItem } from './components/FAQ'
import { NewsletterForm } from './components/NewsletterForm'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const heroFeatures = [
  {
    icon: ScanSearch,
    title: 'AI Duplicate Detection',
    description:
      'Catches duplicate issues in real time before your team wastes hours on work that already exists. Included free — not behind a paywall.',
    href: '/features/ai-duplicate-detection',
    color: 'purple',
  },
  {
    icon: Github,
    title: 'GitHub Integration',
    description:
      'PRs, commits, and branches linked to issues automatically. Close the loop between code and project tracking without switching tabs.',
    href: '/features/github-integration',
    color: 'gray',
  },
]

const supportingFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Kanban & Scrum Boards',
    description: 'Flexible boards with WIP limits, swimlanes, and real-time collaboration.',
    href: '/features/kanban-scrum',
  },
  {
    icon: Calendar,
    title: 'Sprint Planning',
    description: 'AI-powered velocity predictions and burndown charts.',
    href: '/features/sprint-planning',
  },
  {
    icon: Workflow,
    title: 'Smart Automation',
    description: 'Event-driven rules to automate repetitive workflows.',
    href: '/features/automation',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SAML SSO, RBAC, audit trails, and encryption at rest.',
    href: '/features/enterprise-security',
  },
]

const plans = [
  {
    name: 'Free',
    price: 0,
    period: '/month',
    description: 'For individuals and small teams getting started',
    features: ['Up to 5 users', '1 GB storage', 'Kanban & Scrum boards', 'Basic reporting', 'Email support'],
    cta: 'Start Free — No Credit Card',
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
    cta: 'Try Pro Free for 14 Days',
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
    cta: 'Talk to Us',
    href: 'mailto:sales@boardupscale.com',
    popular: false,
  },
]

const homeFaqs: FAQItem[] = [
  {
    q: 'Is Boardupscale production-ready?',
    a: 'Yes. Boardupscale is actively maintained and used by teams in production. The codebase is open source and available on GitHub, so you can inspect every line of code, file issues, and contribute.',
  },
  {
    q: 'Can I migrate from Jira?',
    a: 'Yes. You can import your existing Jira projects, issues, and workflows. Our import tool maps Jira fields to Boardupscale equivalents so your team can switch without losing context.',
  },
  {
    q: 'How is Boardupscale different from Linear or Plane?',
    a: 'Boardupscale is fully open source (MIT licensed) and self-hostable — your data stays on your servers. It also includes AI duplicate detection and sprint predictions out of the box, at no extra cost. Linear is closed-source and cloud-only. Plane is open source but lacks AI features.',
  },
  {
    q: 'Who is behind Boardupscale?',
    a: 'Boardupscale is built by CodeUpscale, a software development team focused on developer tools. The project is MIT licensed and accepts community contributions on GitHub.',
  },
  {
    q: 'What happens if I outgrow the free plan?',
    a: 'You can upgrade to Pro at any time. All paid plans come with a 14-day free trial, no credit card required. When you upgrade, all your existing data and projects carry over seamlessly.',
  },
  {
    q: 'Is my data safe on the cloud version?',
    a: 'Yes. All data is encrypted in transit (TLS) and at rest (AES-256). Passwords are hashed with bcrypt. Enterprise plans include SAML SSO, audit trails, and IP allowlisting. Or self-host for complete control.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-8">
            <Code2 className="h-3.5 w-3.5" />
            Open Source &middot; MIT Licensed &middot; Self-Hostable
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto text-balance">
            The Free, Open-Source Jira Alternative{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Team Actually Wants
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Boards, sprints, AI duplicate detection, and GitHub integration — without
            the $8/user/month price tag. Self-host or use our cloud. Free forever for small teams.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 gap-2"
              >
                Start Free — No Credit Card
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-gray-400 mt-2">Free forever for up to 5 users</span>
            </div>
            <a
              href="https://github.com/codeupscale/boardupscale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all gap-2"
            >
              <Github className="h-5 w-5" />
              View on GitHub
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

          {/* Hero visual — board mockup */}
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

      {/* Social Proof Bar */}
      <section className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>Open source on GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Built by CodeUpscale</span>
            </div>
            <div className="flex items-center gap-2">
              <GitPullRequest className="h-4 w-4" />
              <span>Actively maintained</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>SOC 2 &amp; GDPR ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              You Shouldn&apos;t Need Enterprise Pricing for Basic Project Management
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Legacy tools charge $8+/user/month for features most teams never use. Closed-source alternatives
              lock you in. All-in-one tools try to do everything and do none of it well.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: AlertTriangle,
                title: 'Enterprise tools are bloated',
                description: '90% of features go unused, but you still pay for all of them. Slow, complex, overbuilt.',
                color: 'red',
              },
              {
                icon: Lock,
                title: 'Vendor lock-in is real',
                description: 'Your data, their servers, their rules. Migrating away costs months of engineering time.',
                color: 'orange',
              },
              {
                icon: DollarSign,
                title: 'AI is an upsell everywhere',
                description: 'Smart features like duplicate detection and sprint predictions shouldn\'t cost extra.',
                color: 'yellow',
              },
            ].map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 ${
                  color === 'red' ? 'bg-red-50' : color === 'orange' ? 'bg-orange-50' : 'bg-yellow-50'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    color === 'red' ? 'text-red-500' : color === 'orange' ? 'text-orange-500' : 'text-yellow-500'
                  }`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Duplicate Detection Spotlight */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium mb-6">
                <Brain className="h-3.5 w-3.5" />
                Your Unfair Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                AI That Actually Saves Time:{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Duplicate Detection Built In
                </span>
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Before your team creates another &quot;Fix login button&quot; issue for the third time,
                Boardupscale catches it. Real-time semantic matching with confidence scores — included
                free, not behind a paywall.
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
              <div className="mt-8">
                <Link
                  href="/features/ai-duplicate-detection"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700 inline-flex items-center gap-1 transition-colors"
                >
                  Learn more about AI detection
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Mock UI */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl blur-2xl opacity-60" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-mono">New Issue</span>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">Title</label>
                    <div className="h-10 rounded-lg border border-blue-300 bg-blue-50 flex items-center px-3 text-sm text-gray-700 ring-2 ring-blue-100">
                      Fix login button not responding on mobile
                    </div>
                  </div>
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

      {/* Features — Hero + Supporting */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Everything You Need. Nothing You Don&apos;t.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From planning to deployment — tools that move fast without breaking things.
            </p>
          </div>

          {/* Hero features — large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {heroFeatures.map(({ icon: Icon, title, description, href, color }) => (
              <Link
                key={title}
                href={href}
                className={`group bg-white rounded-xl border p-8 transition-all duration-300 hover:shadow-lg ${
                  color === 'purple'
                    ? 'border-purple-200 hover:border-purple-300 hover:shadow-purple-50'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-gray-50'
                }`}
              >
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-5 ${
                  color === 'purple' ? 'bg-purple-50 group-hover:bg-purple-100' : 'bg-gray-100 group-hover:bg-gray-200'
                } transition-colors`}>
                  <Icon className={`h-6 w-6 ${
                    color === 'purple' ? 'text-purple-600' : 'text-gray-700'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
                <span className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${
                  color === 'purple' ? 'text-purple-600' : 'text-gray-700'
                }`}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* Supporting features — smaller grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingFeatures.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              From Zero to Shipping in Under 5 Minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              No sales calls. No onboarding meetings. Just start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                icon: Terminal,
                title: 'Deploy',
                description: 'Run docker compose up to self-host, or sign up for our cloud in 30 seconds. That\'s it.',
              },
              {
                step: '2',
                icon: Upload,
                title: 'Import',
                description: 'Bring your Jira projects, issues, and workflows automatically. No data left behind.',
              },
              {
                step: '3',
                icon: Rocket,
                title: 'Ship',
                description: 'Your team is faster when tools get out of the way. Start shipping from day one.',
              },
            ].map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-600 text-white mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Step {step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
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

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>
          <FAQ items={homeFaqs} />
          <FAQSchema items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Stop Overpaying for Project Management
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Open source. Self-hostable. AI-powered. Free forever for small teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-colors gap-2"
            >
              Start Free — No Credit Card
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm text-blue-200 mb-3">Not ready yet? Get product updates:</p>
            <div className="flex justify-center">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
