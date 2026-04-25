import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const CARE_TYPES = ['Babysitting', 'Nanny (Part-Time)', 'Nanny (Full-Time)', 'Au Pair', 'After-School Care', 'Overnight Care']
const SCHEDULES = ['Weekday mornings', 'Weekday afternoons', 'Evenings', 'Weekends', 'Flexible', 'Full time']
const LOCATIONS = ['Zurich', 'Geneva', 'Basel', 'Bern', 'Lausanne', 'Other']

export default function PostJob() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    location: '', careType: '', schedule: '', budget: '',
    childrenCount: '1', ages: '', description: '', name: '', email: '',
  })

  const set = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }))

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-sage flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-primary-dark" />
        </div>
        <h1 className="text-3xl font-bold text-ink mb-3">Your job is live!</h1>
        <p className="text-sub mb-8 leading-relaxed">
          Caregivers available in {form.location || 'your area'} have been notified.
          You'll start receiving applications within a few hours.
        </p>
        <p className="text-sm text-muted mb-6">Confirmation sent to {form.email || 'your email'}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/caregivers" className="bg-primary text-white font-semibold px-6 py-3 rounded-xl">
            Browse Caregivers
          </Link>
          <Link to="/" className="border border-border-soft text-sub font-medium px-6 py-3 rounded-xl">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const btnClass = (active: boolean) =>
    `py-2.5 px-4 rounded-xl text-sm border transition-colors text-left ${
      active ? 'bg-primary text-white border-primary' : 'border-border-soft text-sub hover:border-primary'
    }`

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink mb-2">Post a Job</h1>
        <p className="text-sub">Tell us what you need — it's free and takes 2 minutes.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              s < step ? 'bg-primary text-white' : s === step ? 'bg-ink text-white' : 'bg-border-soft text-muted'
            }`}>
              {s < step ? <CheckCircle size={16} /> : s}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${s === step ? 'text-ink' : 'text-muted'}`}>
              {s === 1 ? 'Care Details' : s === 2 ? 'Your Children' : 'Contact Info'}
            </span>
            {s < 3 && <div className="w-8 h-px bg-border-soft mx-1" />}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-border-soft p-8 shadow-sm">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-ink">Care Details</h2>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Location</label>
              <div className="grid grid-cols-3 gap-2">
                {LOCATIONS.map(l => (
                  <button key={l} onClick={() => set('location', l)} className={btnClass(form.location === l)}>{l}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Type of Care</label>
              <div className="grid grid-cols-2 gap-2">
                {CARE_TYPES.map(t => (
                  <button key={t} onClick={() => set('careType', t)} className={btnClass(form.careType === t)}>{t}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Schedule</label>
              <div className="grid grid-cols-2 gap-2">
                {SCHEDULES.map(s => (
                  <button key={s} onClick={() => set('schedule', s)} className={btnClass(form.schedule === s)}>{s}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Budget (CHF/hr)</label>
              <input
                type="text" placeholder="e.g. CHF 20–25/hr" value={form.budget}
                onChange={e => set('budget', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!form.location || !form.careType || !form.schedule}
              className="w-full flex items-center justify-center gap-2 bg-primary disabled:opacity-40 hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-ink">Your Children</h2>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Number of children</label>
              <div className="flex gap-2">
                {['1', '2', '3', '4+'].map(n => (
                  <button key={n} onClick={() => set('childrenCount', n)} className={`w-16 py-2.5 rounded-xl text-sm border font-medium transition-colors ${
                    form.childrenCount === n ? 'bg-primary text-white border-primary' : 'border-border-soft text-sub hover:border-primary'
                  }`}>{n}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Children's ages</label>
              <input
                type="text" placeholder="e.g. 2 years, 5 years" value={form.ages}
                onChange={e => set('ages', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Anything else? (optional)</label>
              <textarea
                rows={4} placeholder="Any special requirements, languages, allergies, activities..."
                value={form.description} onChange={e => set('description', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 border border-border-soft text-sub font-medium py-3 rounded-xl">Back</button>
              <button onClick={() => setStep(3)} className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors">
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-ink">Contact Information</h2>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Full Name</label>
              <input
                type="text" placeholder="Your name" value={form.name}
                onChange={e => set('name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Email Address</label>
              <input
                type="email" placeholder="you@example.com" value={form.email}
                onChange={e => set('email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="bg-beige rounded-xl p-4 text-sm text-sub">
              By posting, caregivers in your area will be able to view your job and apply.
              Your contact details are only shared once you approve an application.
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 border border-border-soft text-sub font-medium py-3 rounded-xl">Back</button>
              <button
                onClick={() => setSubmitted(true)}
                disabled={!form.name || !form.email}
                className="flex-1 bg-primary disabled:opacity-40 hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Post Job
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
