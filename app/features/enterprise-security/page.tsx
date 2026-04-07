import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowRight, ChevronRight, CheckCircle2, Lock, Users, ScrollText, Fingerprint } from 'lucide-react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { FAQ, FAQSchema, type FAQItem } from '../../components/FAQ'

const faqs: FAQItem[] = [
  {
    q: 'Which identity providers are supported for SAML SSO?',
    a: 'Boardupscale supports any SAML 2.0 compliant identity provider, including Okta, Azure Active Directory, Google Workspace, OneLogin, and PingIdentity. SSO can be enforced for the entire organisation with a single toggle.',
  },
  {
    q: 'Can I create custom roles beyond the built-in ones?',
    a: 'Yes. In addition to the four built-in roles (Admin, Manager, Member, Viewer), Enterprise plans support fully custom roles. You can set permissions at the organisation, project, board, and individual issue level.',
  },
  {
    q: 'How long are audit logs retained?',
    a: 'Audit logs are retained for 2 years on Enterprise plans. Every action is logged with a timestamp, user, IP address, and before/after state. Logs are immutable and cannot be modified or deleted.',
  },
  {
    q: 'How is data encrypted at rest and in transit?',
    a: 'All data in transit is encrypted with TLS 1.3. Data at rest is encrypted with AES-256. Passwords are hashed with bcrypt, and JWT access tokens expire after 15 minutes to minimise the window of exposure.',
  },
  {
    q: 'Can I restrict access to specific IP ranges?',
    a: 'Yes. IP allowlisting lets you restrict access to your corporate network or VPN. Any login attempt from an IP outside the allowlist is blocked. This is available on Enterprise plans.',
  },
]

export const metadata: Metadata = {
  title: 'Enterprise Security',
  description:
    'SAML 2.0 SSO, granular RBAC, IP allowlisting, immutable audit trails, and TLS/AES-256 encryption. Enterprise-grade security built into every Boardupscale plan.',
  alternates: { canonical: '/features/enterprise-security' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.boardupscale.com'

const capabilities = [
  {
    icon: Fingerprint,
    title: 'SAML 2.0 SSO',
    description: 'Connect Boardupscale to Okta, Azure AD, Google Workspace, or any SAML 2.0 identity provider. Enforce SSO for your entire organisation with one toggle.',
  },
  {
    icon: Users,
    title: 'Granular RBAC',
    description: 'Four built-in roles (Admin, Manager, Member, Viewer) plus fully custom roles. Set permissions at the organisation, project, board, and issue level.',
  },
  {
    icon: ScrollText,
    title: 'Immutable audit trail',
    description: 'Every action taken in Boardupscale is logged with a timestamp, user, and before/after state. Logs are retained for 2 years and cannot be modified or deleted.',
  },
  {
    icon: Lock,
    title: 'Encryption everywhere',
    description: 'All data encrypted in transit with TLS 1.3 and at rest with AES-256. Passwords stored with bcrypt. JWT access tokens expire after 15 minutes.',
  },
]

const certifications = [
  { label: 'TLS 1.3 in transit' },
  { label: 'AES-256 at rest' },
  { label: 'SAML 2.0 SSO' },
  { label: 'bcrypt password hashing' },
  { label: '15-min JWT expiry' },
  { label: 'IP allowlisting' },
  { label: '2-year audit retention' },
  { label: 'Custom RBAC roles' },
]

const benefits = [
  'IP allowlisting — restrict access to your corporate network or VPN',
  'Session management — admins can terminate any active session',
  'Brute-force protection and account lockout policies',
  'Webhook signing with HMAC-SHA256 to verify payload authenticity',
  'Data export for compliance — export all org data as JSON',
  'Self-hosted deployment option for complete data sovereignty',
]

export default function EnterpriseSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Breadcrumb + Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900">Enterprise Security</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6">
              <Shield className="h-3.5 w-3.5" />
              Enterprise Security
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Security you can stake your business on
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Boardupscale is built with security as a first-class concern. SAML SSO, granular role-based
              access, immutable audit logs, and end-to-end encryption come standard — not as add-ons.
              For teams that can&apos;t afford to compromise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors gap-2"
              >
                Start free
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                View Enterprise pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security badge grid */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-6">Security standards</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {certifications.map(({ label }) => (
              <div key={label} className="flex items-center gap-2 bg-green-50 rounded-lg border border-green-100 px-3 py-2.5">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-medium text-green-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock audit log */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Audit log</p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">Admin · Audit Log</span>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { time: '09:41:22', user: 'alice@acme.com', action: 'Role changed', detail: 'bob@acme.com: Member → Manager in project WEB-APP' },
                { time: '09:38:05', user: 'bob@acme.com', action: 'Issue deleted', detail: 'BS-199 "Remove deprecated API endpoint" soft-deleted' },
                { time: '09:31:17', user: 'alice@acme.com', action: 'SSO enabled', detail: 'SAML 2.0 connected to Okta IdP for organisation acme' },
                { time: '09:12:44', user: 'system', action: 'Login failed', detail: '5 failed attempts for charlie@acme.com — account locked' },
              ].map((entry) => (
                <div key={entry.time} className="grid grid-cols-[80px_160px_1fr] gap-4 px-4 py-3 text-xs hover:bg-gray-50 transition-colors">
                  <span className="text-gray-400 font-mono">{entry.time}</span>
                  <span className="text-gray-600 truncate">{entry.user}</span>
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">{entry.action}</span> · {entry.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Security built in, not bolted on</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">Every layer of the stack is secured so you can focus on shipping.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-green-600" />
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
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-green-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Enterprise-ready from day one</h2>
          <p className="mt-4 text-green-100 text-lg">SAML SSO and advanced security are available on Enterprise. Try free for 14 days.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-green-600 bg-white rounded-xl hover:bg-green-50 transition-colors gap-2"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-white border border-white/40 rounded-xl hover:bg-white/10 transition-colors"
            >
              View Enterprise plan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
