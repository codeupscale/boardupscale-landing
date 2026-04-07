import type { Metadata } from 'next'
import Link from 'next/link'
import { ScanSearch, ArrowRight, ChevronRight, CheckCircle2, Sparkles, GitMerge, Brain, Clock } from 'lucide-react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { FAQ, FAQSchema, type FAQItem } from '../../components/FAQ'

const faqs: FAQItem[] = [
  {
    q: 'How does semantic scanning differ from keyword matching?',
    a: 'Keyword matching only finds duplicates when titles share the same words. Semantic scanning understands the meaning behind the text — so it catches duplicates even when they are worded completely differently, like "Login button broken" and "Sign-in CTA not working."',
  },
  {
    q: 'What happens to comments and attachments when I merge issues?',
    a: 'When you merge a duplicate into the existing issue, all comments, attachments, and votes transfer automatically. The merged issue is closed with a link to the original, preserving a full audit trail.',
  },
  {
    q: 'Can I run duplicate detection on an existing backlog?',
    a: 'Yes. The bulk duplicate review mode scans your entire backlog and surfaces clusters of similar issues. You can review and merge them in batch — ideal for cleaning up legacy projects.',
  },
  {
    q: 'How does the model learn from my team\'s decisions?',
    a: 'Every time your team confirms or dismisses a duplicate suggestion, that signal is used to fine-tune the similarity model for your project\'s specific language and conventions. Detection accuracy improves over time.',
  },
  {
    q: 'Can I access duplicate detection via the API?',
    a: 'Yes. The duplicate detection endpoint is available in the REST API. You can submit an issue title and get back a list of similar issues with confidence scores — useful for integrations and automated workflows.',
  },
]

export const metadata: Metadata = {
  title: 'AI Duplicate Detection',
  description:
    'Boardupscale AI scans your backlog in real time as you type and surfaces duplicate issues before they are created — saving hours of wasted effort.',
  alternates: { canonical: '/features/ai-duplicate-detection' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const capabilities = [
  {
    icon: Brain,
    title: 'Real-time semantic scanning',
    description: 'As you type an issue title, AI compares it against your entire backlog using semantic similarity — not just keyword matching — so it catches paraphrased duplicates too.',
  },
  {
    icon: Sparkles,
    title: 'Confidence scoring',
    description: 'Each suggested duplicate gets a similarity score. High-confidence matches (90%+) are highlighted in red; probable matches in amber — so you can triage at a glance.',
  },
  {
    icon: GitMerge,
    title: 'One-click merge',
    description: 'Confirmed a duplicate? Merge it into the existing issue with one click. Comments, attachments, and votes transfer automatically.',
  },
  {
    icon: Clock,
    title: 'Learns over time',
    description: 'Every merge decision you make trains the model on your project\'s language and conventions. Detection gets sharper the more you use it.',
  },
]

const benefits = [
  'Works across all projects in your organisation, not just the current one',
  'Detects duplicates even when titles are worded completely differently',
  'Bulk duplicate review mode for cleaning up legacy backlogs',
  'Audit log of every merge action with before/after state',
  'Configurable similarity threshold — set how aggressive detection should be',
  'Available in the issue creation dialog and via the API',
]

export default function AiDuplicateDetectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Breadcrumb + Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900">AI Duplicate Detection</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium mb-6">
              <ScanSearch className="h-3.5 w-3.5" />
              AI-Powered
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Stop creating the same issue twice
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Every backlog accumulates duplicates. Boardupscale&apos;s AI catches them the moment a new
              issue is typed — before it&apos;s created, before anyone starts working on it, and before
              your team wastes another hour on a problem that&apos;s already been solved.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors gap-2"
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

      {/* Mock UI */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">Create Issue</span>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Title</label>
                <div className="h-10 rounded-lg border border-purple-300 bg-purple-50 flex items-center px-3 text-sm text-gray-700 ring-2 ring-purple-100">
                  Fix login button not responding on mobile
                </div>
              </div>
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">AI found 2 similar issues</span>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { id: 'BS-142', title: 'Mobile login button unresponsive after iOS 17 update', score: 97, color: 'bg-red-100 text-red-600' },
                    { id: 'BS-89', title: 'Login CTA broken on Safari mobile viewport', score: 81, color: 'bg-yellow-100 text-yellow-700' },
                  ].map(({ id, title, score, color }) => (
                    <div key={id} className="flex items-center gap-3 bg-white rounded-lg border border-purple-100 p-3">
                      <span className="text-xs font-mono text-purple-500 flex-shrink-0">{id}</span>
                      <span className="text-xs text-gray-600 flex-1 truncate">{title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${color}`}>{score}%</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 h-8 rounded-lg bg-purple-600 text-white text-xs font-medium">View duplicate</button>
                  <button className="flex-1 h-8 rounded-lg bg-white border border-purple-200 text-purple-700 text-xs font-medium">Create anyway</button>
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
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">How it works</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">Semantic AI, not keyword search. It understands what issues mean, not just what they say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-purple-600" />
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
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Frequently asked questions</h2>
          <FAQ items={faqs} />
          <FAQSchema items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Stop the duplicate spiral</h2>
          <p className="mt-4 text-purple-100 text-lg">Available on Pro and Enterprise. Try free for 14 days.</p>
          <div className="mt-8">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-purple-600 bg-white rounded-xl hover:bg-purple-50 transition-colors gap-2"
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
