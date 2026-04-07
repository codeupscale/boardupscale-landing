import type { Metadata } from 'next'
import Link from 'next/link'
import { Workflow, ArrowRight, ChevronRight, CheckCircle2, Zap, Bell, GitBranch, Repeat2 } from 'lucide-react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { FAQ, FAQSchema, type FAQItem } from '../../components/FAQ'

const faqs: FAQItem[] = [
  {
    q: 'What events can trigger an automation rule?',
    a: 'Rules can be triggered when issues are created, updated, transitioned between statuses, commented on, or assigned. Sprint events (started, ended) and scheduled cron triggers are also supported.',
  },
  {
    q: 'Can one trigger fire multiple actions in sequence?',
    a: 'Yes. A single trigger can kick off a chain of actions — for example, change the status, assign a user, add a label, send a notification, and fire a webhook, all in one rule execution.',
  },
  {
    q: 'How do I add conditional logic to a rule?',
    a: 'The visual rule builder supports if/else conditions. You can scope rules to specific projects, priorities, labels, assignees, or issue types. For example, "If priority is Critical AND label is bug, then assign to on-call engineer."',
  },
  {
    q: 'Can I schedule rules to run at specific times?',
    a: 'Yes. Cron-based scheduled rules let you run automations on a recurring schedule — for example, a daily rule that sends reminders for stale issues or a weekly rule that archives completed sprints.',
  },
  {
    q: 'Is there a way to test a rule before enabling it?',
    a: 'Yes. The automation run history shows pass/fail logs for every rule execution, including the trigger event, conditions evaluated, and actions taken. You can also clone rules to experiment without affecting production workflows.',
  },
]

export const metadata: Metadata = {
  title: 'Smart Automation',
  description:
    'Build no-code automation rules in Boardupscale. Trigger actions on events, auto-assign issues, fire webhooks, and eliminate repetitive manual work.',
  alternates: { canonical: '/features/automation' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const capabilities = [
  {
    icon: Zap,
    title: 'Event-driven triggers',
    description: 'Fire rules when issues are created, updated, transitioned, commented on, or when a sprint starts or ends. No polling, no delays.',
  },
  {
    icon: Repeat2,
    title: 'Chainable actions',
    description: 'One trigger can kick off multiple actions in sequence — change status, assign a user, add a label, send a notification, and call a webhook, all at once.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description: 'Notify the right people at the right time via in-app alerts, email digests, or Slack (via webhook). No more missed updates.',
  },
  {
    icon: GitBranch,
    title: 'Conditional logic',
    description: 'Add if/else conditions to rules — trigger only when priority is Critical, only for issues in a specific project, or only during business hours.',
  },
]

const exampleRules = [
  { trigger: 'Issue created', condition: 'Label = "bug"', action: 'Assign to on-call engineer + set Priority = High' },
  { trigger: 'Issue transitioned to "In Review"', condition: 'Any', action: 'Post webhook to Slack #engineering' },
  { trigger: 'Sprint started', condition: 'Any', action: 'Move all "To Do" issues to "In Progress" and notify assignees' },
  { trigger: 'Issue priority → Critical', condition: 'Any', action: 'Send email to project lead + create subtask "Hotfix deploy"' },
]

const benefits = [
  'Unlimited automation rules on Pro and Enterprise',
  'Visual rule builder — no code required',
  'Webhook actions for integrating with any external service',
  'Automation run history with pass/fail logs',
  'Clone and share rules across projects',
  'Cron-based scheduled rules (e.g. daily stale issue reminders)',
]

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Breadcrumb + Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900">Smart Automation</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Workflow className="h-3.5 w-3.5" />
              Automation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Let rules do the repetitive work
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Every team has the same busywork: reassigning issues, changing statuses, firing
              notifications, calling webhooks. Boardupscale&apos;s no-code automation builder handles all
              of it — so your team spends time shipping, not clicking.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors gap-2"
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

      {/* Example rules */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Example rules</p>
          <div className="space-y-3">
            {exampleRules.map((rule) => (
              <div key={rule.trigger} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-md px-2 py-1">WHEN</span>
                  <span className="text-sm text-gray-700">{rule.trigger}</span>
                </div>
                {rule.condition !== 'Any' && (
                  <>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 flex-shrink-0 hidden sm:block" />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-md px-2 py-1">IF</span>
                      <span className="text-sm text-gray-700">{rule.condition}</span>
                    </div>
                  </>
                )}
                <ArrowRight className="h-3.5 w-3.5 text-gray-300 flex-shrink-0 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-100 rounded-md px-2 py-1">THEN</span>
                  <span className="text-sm text-gray-700">{rule.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Built for real workflows</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">Powerful enough for complex multi-step automations, simple enough to build in minutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-orange-500" />
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
                <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Automate the boring stuff</h2>
          <p className="mt-4 text-orange-100 text-lg">Available on Pro and Enterprise. Try free for 14 days.</p>
          <div className="mt-8">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-orange-600 bg-white rounded-xl hover:bg-orange-50 transition-colors gap-2"
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
