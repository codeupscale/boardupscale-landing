import type { Metadata } from 'next'
import Link from 'next/link'
import { LayoutDashboard, ArrowRight, ChevronRight, CheckCircle2, Columns2, Layers, SlidersHorizontal } from 'lucide-react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Kanban & Scrum Boards',
  description:
    'Flexible Kanban and Scrum boards that adapt to any workflow. WIP limits, swimlanes, custom columns, and drag-and-drop issue management.',
  alternates: { canonical: '/features/kanban-scrum' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const capabilities = [
  {
    icon: Columns2,
    title: 'Custom columns & statuses',
    description: 'Create any number of columns to match your exact workflow — To Do, In Progress, In Review, Blocked, Done, or anything in between.',
  },
  {
    icon: Layers,
    title: 'Swimlanes',
    description: 'Group cards by assignee, priority, epic, or any custom field. See the full picture across your team at a glance.',
  },
  {
    icon: SlidersHorizontal,
    title: 'WIP limits',
    description: 'Set work-in-progress limits on any column. Boards highlight overloaded columns so bottlenecks are impossible to miss.',
  },
  {
    icon: LayoutDashboard,
    title: 'Scrum & Kanban in one',
    description: 'Switch between a sprint-driven Scrum board and a continuous Kanban flow without migrating data or changing tools.',
  },
]

const benefits = [
  'Drag-and-drop cards between any columns',
  'Bulk edit: reassign, reprioritise, or move multiple issues at once',
  'Quick filters by assignee, label, priority, or sprint',
  'Card cover images and rich descriptions with markdown',
  'Real-time updates — everyone sees changes instantly via WebSocket',
  'Board-level and project-level views side by side',
]

export default function KanbanScrumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Breadcrumb + Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900">Kanban & Scrum Boards</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <LayoutDashboard className="h-3.5 w-3.5" />
              Boards
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Boards that move as fast as your team
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Whether you run Scrum sprints or a continuous Kanban flow, Boardupscale gives you
              fully customisable boards with the power features your team actually needs — WIP limits,
              swimlanes, bulk edits, and real-time collaboration baked in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors gap-2"
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

      {/* Mock board */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">Project · Board</span>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white overflow-x-auto">
              <div className="flex gap-4 min-w-max">
                {[
                  { name: 'Backlog', count: 12, color: 'bg-gray-200', wip: null },
                  { name: 'To Do', count: 4, color: 'bg-blue-200', wip: 5 },
                  { name: 'In Progress', count: 3, color: 'bg-yellow-200', wip: 3 },
                  { name: 'In Review', count: 2, color: 'bg-purple-200', wip: null },
                  { name: 'Done', count: 8, color: 'bg-green-200', wip: null },
                ].map((col) => (
                  <div key={col.name} className="w-48 flex-shrink-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{col.name}</span>
                        <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">{col.count}</span>
                      </div>
                      {col.wip && (
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${col.count >= col.wip ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                          /{col.wip}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {Array.from({ length: Math.min(col.count, 3) }).map((_, i) => (
                        <div key={i} className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                          <div className={`h-1.5 w-full rounded-full ${col.color} mb-2`} />
                          <div className="h-2 w-4/5 bg-gray-200 rounded mb-1.5" />
                          <div className="h-2 w-3/5 bg-gray-100 rounded mb-3" />
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 font-mono">BS-{100 + i + col.count}</span>
                            <div className="h-5 w-5 rounded-full bg-blue-100" />
                          </div>
                        </div>
                      ))}
                      {col.count > 3 && (
                        <div className="text-xs text-gray-400 text-center py-1">+{col.count - 3} more</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Everything boards should do</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">Powerful enough for large engineering teams, simple enough that everyone actually uses it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-blue-600" />
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

      {/* Benefits list */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">What's included</h2>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Ready to build better boards?</h2>
          <p className="mt-4 text-blue-100 text-lg">Free forever for small teams. No credit card required.</p>
          <div className="mt-8">
            <a
              href={`${APP_URL}/register`}
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
