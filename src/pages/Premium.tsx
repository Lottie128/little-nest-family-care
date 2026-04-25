import { CheckCircle, Star, Shield, MessageCircle, Eye, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic', price: 'Free', period: '',
    desc: 'Browse and discover caregivers',
    features: ['Browse all caregiver profiles', 'View photos, ratings & tags', 'Post up to 1 job', 'Receive applications'],
    locked: ['Send messages', 'View full contact details', 'Priority listing'],
    cta: 'Current Plan', highlight: false,
  },
  {
    name: 'Premium', price: 'CHF 19', period: '/month',
    desc: 'Everything you need to hire with confidence',
    features: ['Everything in Basic', 'Unlimited messaging', 'View full contact details', 'Post unlimited jobs', 'Priority caregiver matching', 'Background check badges', 'Email & SMS notifications'],
    locked: [],
    cta: 'Start Free Trial', highlight: true,
  },
  {
    name: 'Family', price: 'CHF 39', period: '/month',
    desc: 'For families with ongoing care needs',
    features: ['Everything in Premium', 'Up to 3 family profiles', 'Dedicated account support', 'Caregiver scheduling tools', 'Payment tracking', 'Priority support'],
    locked: [],
    cta: 'Get Family Plan', highlight: false,
  },
]

export default function Premium() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Simple Pricing</p>
        <h1 className="text-5xl font-bold text-ink mb-4">Find Care With Full Confidence</h1>
        <p className="text-sub max-w-xl mx-auto text-lg">
          Upgrade to unlock messaging and connect directly with the caregivers you love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 flex flex-col transition-shadow ${
              plan.highlight
                ? 'bg-primary-dark border-primary-dark shadow-xl shadow-primary/20 scale-105'
                : 'bg-white border-border-soft'
            }`}
          >
            {plan.highlight && (
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                <Star size={11} className="fill-white" /> Most Popular
              </div>
            )}

            <h2 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-ink'}`}>{plan.name}</h2>
            <p className={`text-sm mb-5 ${plan.highlight ? 'text-white/70' : 'text-muted'}`}>{plan.desc}</p>

            <div className="flex items-end gap-1 mb-6">
              <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-ink'}`}>{plan.price}</span>
              <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/70' : 'text-muted'}`}>{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {plan.features.map(f => (
                <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-white' : 'text-sub'}`}>
                  <CheckCircle size={15} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-white/70' : 'text-primary'}`} />
                  {f}
                </li>
              ))}
              {plan.locked.map(f => (
                <li key={f} className={`flex items-start gap-2.5 text-sm opacity-40 ${plan.highlight ? 'text-white' : 'text-muted'}`}>
                  <CheckCircle size={15} className="shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>

            <Link
              to="/caregivers"
              className={`block text-center font-semibold py-3.5 rounded-xl transition-colors ${
                plan.highlight
                  ? 'bg-white text-primary-dark hover:bg-cream'
                  : plan.name === 'Basic'
                  ? 'bg-beige text-sub cursor-default'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="bg-white rounded-2xl border border-border-soft p-10">
        <h2 className="text-2xl font-bold text-ink text-center mb-10">What You Unlock With Premium</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: MessageCircle, title: 'Unlimited Messaging', desc: 'Message any caregiver directly. No limits, no delays.' },
            { icon: Eye, title: 'Full Profile Access', desc: 'View complete bios, contact details, and availability.' },
            { icon: Shield, title: 'Verified Badge', desc: 'Get the verified family badge to attract top caregivers.' },
            { icon: Zap, title: 'Priority Matching', desc: 'Your job posts are shown first to the best caregivers.' },
            { icon: Star, title: 'Saved Caregivers', desc: 'Build a shortlist and compare your favourites.' },
            { icon: CheckCircle, title: 'Secure Payments', desc: 'Pay safely through the platform with full protection.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-ink text-sm mb-1">{title}</p>
                <p className="text-sm text-sub leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sub text-sm">
          Questions? <span className="text-primary font-medium cursor-pointer hover:underline">Contact us</span> — we're happy to help.
        </p>
      </div>
    </div>
  )
}
