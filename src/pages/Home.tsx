import { Link } from 'react-router-dom'
import {
  Shield, Star, CheckCircle, ArrowRight, ChevronRight,
  Home as HomeIcon, BookOpen, Baby, Heart, FileText, Users,
  MapPin, Sparkles,
} from 'lucide-react'
import { testimonials } from '../data/caregivers'
import CaregiverCard from '../components/CaregiverCard'
import { caregivers } from '../data/caregivers'

const services = [
  {
    icon: HomeIcon,
    title: 'Premium Housing',
    desc: 'Curated luxury rentals and property search across Zurich, Geneva, Basel and beyond — matched to your lifestyle.',
    color: 'bg-sage-light',
    iconColor: 'text-primary-dark',
  },
  {
    icon: BookOpen,
    title: 'International Schools',
    desc: 'Expert placement in top English, French, and bilingual schools. We navigate applications so your children start strong.',
    color: 'bg-gold-light',
    iconColor: 'text-gold',
  },
  {
    icon: Baby,
    title: 'Childcare & Nannies',
    desc: 'Vetted, multilingual nannies and babysitters who understand your culture and care for your children like family.',
    color: 'bg-beige',
    iconColor: 'text-amber',
  },
  {
    icon: Heart,
    title: 'Healthcare Navigation',
    desc: 'Access to top private doctors, specialists, and family clinics — with guidance in your language.',
    color: 'bg-sage-light',
    iconColor: 'text-primary',
  },
  {
    icon: FileText,
    title: 'Admin & Legal Support',
    desc: 'Residence permits, Swiss bank accounts, insurance, and contracts — handled precisely so nothing falls through the cracks.',
    color: 'bg-gold-light',
    iconColor: 'text-gold',
  },
  {
    icon: Users,
    title: 'Community & Lifestyle',
    desc: 'Connect with vibrant expat networks, cultural clubs, and social events. Switzerland becomes home faster together.',
    color: 'bg-beige',
    iconColor: 'text-primary-dark',
  },
]

export default function Home() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative bg-beige overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-sage opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white shadow-sm border border-gold/30 rounded-full px-4 py-1.5 text-sm text-gold font-semibold mb-8">
                <Sparkles size={13} className="text-gold" />
                Switzerland's Premier Family Concierge
              </span>

              <h1 className="text-5xl md:text-[3.5rem] font-extrabold text-ink leading-[1.08] tracking-tight mb-6">
                Your Swiss Chapter,{' '}
                <span className="text-primary">Guided With Care</span>
              </h1>

              <p className="text-lg text-sub leading-relaxed mb-10 max-w-lg">
                We connect high-net families relocating to Switzerland with premium housing, trusted childcare,
                international schools, and everything in between — in one seamless service.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  to="/post-job"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-4 rounded-2xl transition-colors shadow-md text-sm"
                >
                  Book a Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/#services"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-sage text-ink font-semibold px-7 py-4 rounded-2xl hover:border-primary transition-colors text-sm"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-sub">
                {[
                  'Trusted by 500+ families',
                  '6 full-service categories',
                  'Across 5+ Swiss cities',
                ].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-primary" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image card */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=680&fit=crop&crop=center"
                  alt="Premium family home"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { n: '500+', l: 'Families Settled' },
                      { n: '4.9★', l: 'Average Rating' },
                      { n: '6', l: 'Service Areas' },
                    ].map(({ n, l }) => (
                      <div key={l} className="text-center">
                        <p className="text-xl font-bold text-primary">{n}</p>
                        <p className="text-xs text-muted leading-tight">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-gold text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                🇨🇭 Swiss Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin tag bar ── */}
      <section className="bg-ink py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Serving families from</span>
          {['🇳🇬 Nigeria', '🇰🇪 Kenya', '🇬🇭 Ghana', '🇿🇦 South Africa', '🇨🇲 Cameroon', '🇨🇮 Côte d\'Ivoire', '🇸🇳 Senegal', '& more'].map(c => (
            <span key={c} className="text-xs text-gray-300 bg-panel px-3 py-1 rounded-full">{c}</span>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="text-4xl font-bold text-ink mb-4">Everything You Need to Settle Into Swiss Life</h2>
          <p className="text-sub max-w-lg mx-auto leading-relaxed">
            From your first apartment to your children's school — we handle every detail so you can focus on your family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color, iconColor }, i) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-sage/30 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                <Icon size={22} className={iconColor} />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-sub leading-relaxed flex-1">{desc}</p>
              <Link
                to="/premium"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
              >
                Learn more <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="text-4xl font-bold text-ink mb-4">White-Glove Service, Start to Finish</h2>
            <p className="text-sub max-w-md mx-auto leading-relaxed">
              Three steps to make Switzerland feel like home — guided by a dedicated advisor who understands your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Share Your Vision',
                desc: 'Tell us about your family, arrival city, timeline, and priorities. A 15-minute call is all it takes to get started.',
              },
              {
                step: '02',
                title: 'Meet Your Concierge',
                desc: 'We assign a dedicated advisor who speaks your language — culturally and literally — and knows Switzerland inside out.',
              },
              {
                step: '03',
                title: 'Settle With Confidence',
                desc: 'Your advisor handles every introduction, booking, and follow-up. You arrive and feel at home from day one.',
              },
            ].map(({ step, title, desc }, i) => (
              <div
                key={step}
                className="relative p-8 bg-white rounded-2xl border border-sage/30 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-md">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-ink mb-3">{title}</h3>
                <p className="text-sub text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/post-job"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-2xl transition-colors shadow-md text-sm"
            >
              Book Your Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Caregivers ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Childcare Service</p>
            <h2 className="text-4xl font-bold text-ink">Meet Our Caregivers</h2>
            <p className="text-sub mt-2 max-w-md">Multilingual, vetted professionals who feel like part of the family.</p>
          </div>
          <Link to="/caregivers" className="hidden md:flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
            View all caregivers <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caregivers.slice(0, 3).map((c, i) => (
            <CaregiverCard key={c.id} caregiver={c} index={i} />
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Family Stories</p>
            <h2 className="text-4xl font-bold text-ink">What Families Say</h2>
            <p className="text-sub mt-3 max-w-md mx-auto">From Lagos to Zurich, Cape Town to Geneva — real stories from families we've guided home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-8 border border-sage/30 shadow-sm animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber fill-amber" />
                  ))}
                </div>
                <p className="text-sub leading-relaxed mb-6 text-sm flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-sage" />
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-primary font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust / Stats ── */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Families Choose Us</p>
              <h2 className="text-4xl font-bold text-white mb-6">We Understand Your Journey</h2>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Relocating your family to a new country is one of the most significant decisions you'll make.
                We've built Little Nest specifically for high-net families from Africa and beyond — understanding the cultural nuances,
                the priorities, and the high standards you expect.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Culturally Aware', desc: 'Advisors who understand your background, values, and expectations' },
                  { title: 'Fully Vetted Network', desc: 'Every provider — from nannies to landlords — is carefully screened' },
                  { title: 'One Point of Contact', desc: "Your dedicated concierge handles everything so you don't have to" },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '500+', label: 'Families Settled' },
                { number: '20+', label: 'Countries Served' },
                { number: '4.9★', label: 'Client Satisfaction' },
                { number: '6', label: 'Service Categories' },
              ].map(stat => (
                <div key={stat.label} className="bg-panel rounded-2xl p-6 text-center border border-white/5">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* City badges */}
          <div className="mt-16 pt-12 border-t border-panel">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm text-gray-400 mr-2">Currently serving:</span>
              {['Zurich', 'Geneva', 'Basel', 'Bern', 'Lausanne', 'Lugano'].map(city => (
                <div key={city} className="flex items-center gap-1.5 bg-panel px-4 py-2 rounded-full border border-white/5">
                  <MapPin size={12} className="text-primary" />
                  <span className="text-xs text-gray-300 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-white text-xs font-semibold mb-6">
            <Shield size={12} /> Free, no-obligation consultation
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Begin Your Swiss Journey?
          </h2>
          <p className="text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
            Book a free 20-minute call with one of our family concierges today. We'll map out your arrival,
            understand your needs, and show you exactly how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/post-job"
              className="bg-white text-primary-dark font-bold px-8 py-4 rounded-2xl hover:bg-cream transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/caregivers"
              className="bg-white/15 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/25 transition-colors"
            >
              Browse Caregivers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
