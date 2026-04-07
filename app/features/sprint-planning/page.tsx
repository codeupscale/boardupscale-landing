import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, ChevronRight, CheckCircle2, TrendingUp, BarChart2, Flame, Brain } from 'lucide-react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { FAQ, FAQSchema, type FAQItem } from '../../components/FAQ'

const faqs: FAQItem[] = [
  {
    q: 'How does the AI predict sprint velocity?',
    a: 'The AI analyses your team\'s historical velocity data across past sprints — completed story points, carry-over rates, and team capacity — to forecast how much work the team can realistically complete in the upcoming sprint.',
  },
  {
    q: 'What is the difference between cycle time and lead time?',
    a: 'Cycle time measures how long an issue takes from when work starts (e.g. moved to In Progress) to when it\'s done. Lead time measures the total time from when an issue is created to when it\'s completed — including time spent in the backlog.',
  },
  {
    q: 'Can I export sprint reports?',
    a: 'Yes. Sprint reports can be exported as PDF for stakeholders or as CSV/JSON for further analysis. Reports include completed work, carried-over issues, velocity trends, and team throughput metrics.',
  },
  {
    q: 'How are carried-over issues handled between sprints?',
    a: 'Issues not completed in a sprint are automatically flagged as carry-overs. You can choose to move them to the next sprint or return them to the backlog. Carry-over tracking is included in sprint reports so the team can identify recurring patterns.',
  },
  {
    q: 'Does the burndown chart update in real time?',
    a: 'Yes. The burndown chart updates live as issues are completed or their estimates change. The ideal burn line is calculated from the sprint goal so you can see at a glance whether the team is ahead or behind.',
  },
]

export const metadata: Metadata = {
  title: 'Sprint Planning',
  description:
    'AI-powered sprint planning with velocity predictions, burndown charts, backlog grooming, and sprint reports. Run tighter agile cycles with Boardupscale.',
  alternates: { canonical: '/features/sprint-planning' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const capabilities = [
  {
    icon: Brain,
    title: 'AI velocity predictions',
    description: 'The AI analyses your team\'s historical velocity and flags sprints at risk of not completing — before the sprint starts.',
  },
  {
    icon: BarChart2,
    title: 'Burndown & velocity charts',
    description: 'Live burndown charts update as work is completed. Velocity charts help you set realistic sprint goals based on past data.',
  },
  {
    icon: Flame,
    title: 'Backlog grooming tools',
    description: 'Drag to reprioritise, bulk-update story points, and split epics into stories — all from the backlog view without opening each issue.',
  },
  {
    icon: TrendingUp,
    title: 'Sprint reports & retrospectives',
    description: 'Auto-generated sprint reports show completed work, carried-over issues, and team throughput. Export as PDF for stakeholders.',
  },
]

const benefits = [
  'One-click sprint creation from the prioritised backlog',
  'Story point estimation with team-level capacity planning',
  'Cycle time and lead time analytics per sprint',
  'Cumulative flow diagrams to visualise throughput trends',
  'Carry-over tracking: issues pushed between sprints are flagged',
  'Integration with GitHub PRs to auto-update issue progress',
]

export default function SprintPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Breadcrumb + Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900">Sprint Planning</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <Calendar className="h-3.5 w-3.5" />
              Sprint Planning
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Plan sprints with AI at your side
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Boardupscale&apos;s sprint planning combines smart backlog tools, AI velocity forecasting,
              and live burndown charts — so your team commits to the right amount of work every cycle
              and actually finishes it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors gap-2"
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

      {/* Mock sprint UI */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">Sprint 14 · 8 days remaining</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Burndown */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Burndown</p>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 h-36 flex items-end gap-1.5">
                  {[38, 35, 31, 28, 26, 22, 19, 16, 14, 11].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t bg-indigo-400"
                        style={{ height: `${(v / 40) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>Day 1</span>
                  <span>Today</span>
                </div>
              </div>
              {/* AI prediction */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">AI Forecast</p>
                <div className="bg-green-50 rounded-xl border border-green-200 p-4 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">On track to complete</span>
                  </div>
                  <p className="text-xs text-green-700">
                    Based on current velocity, the team will complete 38/40 points. 2 low-priority issues may carry over.
                  </p>
                </div>
                <div className="space-y-2">
                  {['Velocity this sprint', 'Avg velocity (last 5)', 'Completion rate'].map((label, i) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{label}</span>
                      <span className="text-xs font-semibold text-gray-800">{['38 pts', '36 pts', '94%'][i]}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sprint tools that actually help</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">Less spreadsheet wrangling, more shipping.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-indigo-600" />
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
                <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Run your best sprint yet</h2>
          <p className="mt-4 text-indigo-100 text-lg">Free forever for small teams. No credit card required.</p>
          <div className="mt-8">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-indigo-600 bg-white rounded-xl hover:bg-indigo-50 transition-colors gap-2"
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
