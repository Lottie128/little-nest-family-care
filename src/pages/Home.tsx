import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Shield, Star, Clock, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'
import { caregivers, testimonials } from '../data/caregivers'
import CaregiverCard from '../components/CaregiverCard'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/caregivers?q=${query}`)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#E8F0EC] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#B5D5C5]/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#E8A87C]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white border border-[#E8E0D6] rounded-full px-4 py-1.5 text-sm text-[#7BAE9E] font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7BAE9E] animate-pulse" />
              Caregivers available near you now
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-5">
              Find Trusted Childcare,{' '}
              <span className="text-[#7BAE9E]">Right When You Need It</span>
            </h1>
            <p className="text-lg text-[#5A5A5A] leading-relaxed mb-10">
              Connecting families with reliable, loving caregivers in your area.
              Verified profiles, real reviews, and secure messaging — all in one place.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                <input
                  type="text"
                  placeholder="Enter your city or postcode..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#E8E0D6] bg-white text-[#2D2D2D] placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/50 shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-[#7BAE9E] hover:bg-[#4A8C7A] text-white font-medium px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap shadow-sm"
              >
                Find a Caregiver
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#5A5A5A]">
              <Link to="/caregivers" className="flex items-center gap-1.5 hover:text-[#7BAE9E] transition-colors">
                <ChevronRight size={14} className="text-[#7BAE9E]" />
                Browse all caregivers
              </Link>
              <Link to="/post-job" className="flex items-center gap-1.5 hover:text-[#7BAE9E] transition-colors">
                <ChevronRight size={14} className="text-[#7BAE9E]" />
                Post a job for free
              </Link>
              <Link to="/caregivers" className="flex items-center gap-1.5 hover:text-[#7BAE9E] transition-colors">
                <ChevronRight size={14} className="text-[#7BAE9E]" />
                Become a caregiver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-y border-[#E8E0D6]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Verified Caregivers', sub: 'ID & background checked' },
              { icon: Star, label: 'Rated by Real Families', sub: 'Honest, moderated reviews' },
              { icon: CheckCircle, label: 'Background Checked', sub: 'Swiss federal registry' },
              { icon: Clock, label: 'Secure Messaging', sub: 'Encrypted & private' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#7BAE9E]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2D2D]">{label}</p>
                  <p className="text-xs text-[#8A8A8A]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#7BAE9E] font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">How It Works</h2>
          <p className="text-[#5A5A5A] max-w-md mx-auto">
            Finding the right caregiver is easy. Three simple steps and you're set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px border-t-2 border-dashed border-[#B5D5C5]" />

          {[
            {
              step: '01',
              title: 'Post your needs',
              desc: 'Tell us what type of care you need, your location, schedule, and budget. Takes 2 minutes.',
            },
            {
              step: '02',
              title: 'Get matched instantly',
              desc: 'Browse verified caregiver profiles matched to your criteria. View ratings, experience, and reviews.',
            },
            {
              step: '03',
              title: 'Hire with confidence',
              desc: 'Message caregivers securely, arrange interviews, and hire. Payment is protected until the job is done.',
            },
          ].map(({ step, title, desc }, i) => (
            <div
              key={step}
              className="text-center p-8 bg-white rounded-2xl border border-[#E8E0D6] animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-[#7BAE9E] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">
                {step}
              </div>
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">{title}</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Caregivers */}
      <section className="bg-[#F5EFE6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#7BAE9E] font-semibold text-sm uppercase tracking-widest mb-2">Top Caregivers</p>
              <h2 className="text-4xl font-bold text-[#2D2D2D]">Meet Our Caregivers</h2>
            </div>
            <Link
              to="/caregivers"
              className="hidden md:flex items-center gap-2 text-[#7BAE9E] font-medium hover:gap-3 transition-all text-sm"
            >
              View all caregivers <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caregivers.slice(0, 3).map((c, i) => (
              <CaregiverCard key={c.id} caregiver={c} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/caregivers"
              className="inline-flex items-center gap-2 text-[#7BAE9E] font-medium text-sm"
            >
              View all caregivers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#7BAE9E] font-semibold text-sm uppercase tracking-widest mb-2">Real Families</p>
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">What Families Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-[#E8E0D6] animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#E8A87C] fill-[#E8A87C]" />
                ))}
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-[#2D2D2D]">{t.name}</p>
                  <p className="text-xs text-[#8A8A8A]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-[#2D2D2D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#7BAE9E] font-semibold text-sm uppercase tracking-widest mb-3">Your Family's Safety</p>
              <h2 className="text-4xl font-bold mb-6">Safety Is Our Priority</h2>
              <p className="text-[#9CA3AF] leading-relaxed mb-8">
                Every caregiver on Little Nest goes through a thorough vetting process. We believe trust is earned — and we do the work so you don't have to.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Identity Verification', desc: 'Government-issued ID verified before approval' },
                  { title: 'Background Checks', desc: 'Swiss criminal registry + reference screening' },
                  { title: 'Community Reviews', desc: 'Only verified families can leave reviews' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#7BAE9E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-[#7BAE9E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-[#9CA3AF] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '500+', label: 'Verified Caregivers' },
                { number: '2,400+', label: 'Happy Families' },
                { number: '4.9★', label: 'Average Rating' },
                { number: '100%', label: 'Background Checked' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-[#404040] rounded-2xl p-6 text-center"
                >
                  <p className="text-4xl font-bold text-[#7BAE9E] mb-2">{stat.number}</p>
                  <p className="text-[#9CA3AF] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#7BAE9E] to-[#4A8C7A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Caregiver?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Start your search today — caregivers are available near you now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/caregivers"
              className="bg-white text-[#4A8C7A] font-semibold px-8 py-3.5 rounded-full hover:bg-[#FAF7F2] transition-colors"
            >
              Start your search today
            </Link>
            <Link
              to="/post-job"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors"
            >
              Join as a caregiver
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
