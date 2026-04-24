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
    location: '',
    careType: '',
    schedule: '',
    budget: '',
    childrenCount: '1',
    ages: '',
    description: '',
    name: '',
    email: '',
  })

  const set = (key: string, value: string) =>
    setForm(f => ({ ...f, [key]: value }))

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-[#B5D5C5] flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-[#4A8C7A]" />
        </div>
        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-3">Your job is live!</h1>
        <p className="text-[#5A5A5A] mb-8 leading-relaxed">
          Caregivers available in {form.location || 'your area'} have been notified.
          You'll start receiving applications within a few hours.
        </p>
        <p className="text-sm text-[#8A8A8A] mb-6">Confirmation sent to {form.email || 'your email'}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/caregivers"
            className="bg-[#7BAE9E] text-white font-semibold px-6 py-3 rounded-xl"
          >
            Browse Caregivers
          </Link>
          <Link
            to="/"
            className="border border-[#E8E0D6] text-[#5A5A5A] font-medium px-6 py-3 rounded-xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#2D2D2D] mb-2">Post a Job</h1>
        <p className="text-[#5A5A5A]">Tell us what you need — it's free and takes 2 minutes.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                s < step
                  ? 'bg-[#7BAE9E] text-white'
                  : s === step
                  ? 'bg-[#2D2D2D] text-white'
                  : 'bg-[#E8E0D6] text-[#8A8A8A]'
              }`}
            >
              {s < step ? <CheckCircle size={16} /> : s}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${s === step ? 'text-[#2D2D2D]' : 'text-[#8A8A8A]'}`}>
              {s === 1 ? 'Care Details' : s === 2 ? 'Your Children' : 'Contact Info'}
            </span>
            {s < 3 && <div className="w-8 h-px bg-[#E8E0D6] mx-1" />}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E0D6] p-8 shadow-sm">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#2D2D2D]">Care Details</h2>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Location</label>
              <div className="grid grid-cols-3 gap-2">
                {LOCATIONS.map(l => (
                  <button
                    key={l}
                    onClick={() => set('location', l)}
                    className={`py-2.5 px-3 rounded-xl text-sm border transition-colors ${
                      form.location === l
                        ? 'bg-[#7BAE9E] text-white border-[#7BAE9E]'
                        : 'border-[#E8E0D6] text-[#5A5A5A] hover:border-[#7BAE9E]'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Type of Care</label>
              <div className="grid grid-cols-2 gap-2">
                {CARE_TYPES.map(t => (
                  <button
                    key={t}
                    onClick={() => set('careType', t)}
                    className={`py-2.5 px-4 rounded-xl text-sm border transition-colors text-left ${
                      form.careType === t
                        ? 'bg-[#7BAE9E] text-white border-[#7BAE9E]'
                        : 'border-[#E8E0D6] text-[#5A5A5A] hover:border-[#7BAE9E]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Schedule</label>
              <div className="grid grid-cols-2 gap-2">
                {SCHEDULES.map(s => (
                  <button
                    key={s}
                    onClick={() => set('schedule', s)}
                    className={`py-2.5 px-4 rounded-xl text-sm border transition-colors text-left ${
                      form.schedule === s
                        ? 'bg-[#7BAE9E] text-white border-[#7BAE9E]'
                        : 'border-[#E8E0D6] text-[#5A5A5A] hover:border-[#7BAE9E]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Budget (CHF/hr)
              </label>
              <input
                type="text"
                placeholder="e.g. CHF 20–25/hr"
                value={form.budget}
                onChange={e => set('budget', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D6] text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!form.location || !form.careType || !form.schedule}
              className="w-full flex items-center justify-center gap-2 bg-[#7BAE9E] disabled:opacity-40 hover:bg-[#4A8C7A] text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#2D2D2D]">Your Children</h2>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Number of children</label>
              <div className="flex gap-2">
                {['1', '2', '3', '4+'].map(n => (
                  <button
                    key={n}
                    onClick={() => set('childrenCount', n)}
                    className={`w-16 py-2.5 rounded-xl text-sm border transition-colors font-medium ${
                      form.childrenCount === n
                        ? 'bg-[#7BAE9E] text-white border-[#7BAE9E]'
                        : 'border-[#E8E0D6] text-[#5A5A5A] hover:border-[#7BAE9E]'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Children's ages</label>
              <input
                type="text"
                placeholder="e.g. 2 years, 5 years"
                value={form.ages}
                onChange={e => set('ages', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D6] text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Anything else? (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Any special requirements, languages, allergies, activities..."
                value={form.description}
                onChange={e => set('description', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D6] text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-[#E8E0D6] text-[#5A5A5A] font-medium py-3 rounded-xl"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 flex items-center justify-center gap-2 bg-[#7BAE9E] hover:bg-[#4A8C7A] text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#2D2D2D]">Contact Information</h2>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D6] text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D6] text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40"
              />
            </div>

            <div className="bg-[#F5EFE6] rounded-xl p-4 text-sm text-[#5A5A5A]">
              By posting, caregivers in your area will be able to view your job and apply. Your contact details are only shared once you approve an application.
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-[#E8E0D6] text-[#5A5A5A] font-medium py-3 rounded-xl"
              >
                Back
              </button>
              <button
                onClick={() => setSubmitted(true)}
                disabled={!form.name || !form.email}
                className="flex-1 bg-[#7BAE9E] disabled:opacity-40 hover:bg-[#4A8C7A] text-white font-semibold py-3 rounded-xl transition-colors"
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
