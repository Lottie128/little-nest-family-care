import { useParams, Link } from 'react-router-dom'
import { Star, MapPin, Clock, Globe, CheckCircle, ArrowLeft, Lock, MessageCircle, Heart, Calendar } from 'lucide-react'
import { caregivers } from '../data/caregivers'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const reviews = [
  {
    name: 'Sarah B.',
    date: 'March 2026',
    rating: 5,
    text: 'Absolutely wonderful with our two children. Punctual, warm, and so creative with activities.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Marc L.',
    date: 'February 2026',
    rating: 5,
    text: 'We found our long-term nanny through Little Nest. Could not be happier. Our kids love her.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Priya K.',
    date: 'January 2026',
    rating: 5,
    text: 'Very professional, reliable, and caring. She always goes above and beyond for our family.',
    photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=80&h=80&fit=crop&crop=face',
  },
]

export default function CaregiverProfile() {
  const { id } = useParams()
  const caregiver = caregivers.find(c => c.id === id) ?? caregivers[0]

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link
        to="/caregivers"
        className="inline-flex items-center gap-2 text-sm text-[#5A5A5A] hover:text-[#2D2D2D] mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Back to caregivers
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl border border-[#E8E0D6] overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-[#B5D5C5] to-[#7BAE9E]" />
            <div className="px-8 pb-8 -mt-16">
              <div className="flex items-end gap-5 mb-4">
                <img
                  src={caregiver.photo}
                  alt={caregiver.name}
                  className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-md"
                />
                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-[#2D2D2D]">{caregiver.name}</h1>
                    <div className="flex items-center gap-1 bg-[#F5EFE6] px-2 py-0.5 rounded-full">
                      <CheckCircle size={12} className="text-[#7BAE9E]" />
                      <span className="text-xs text-[#7BAE9E] font-medium">Verified</span>
                    </div>
                  </div>
                  <p className="text-[#7BAE9E] font-medium text-sm">{caregiver.role}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-[#8A8A8A]">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {caregiver.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {caregiver.experience} years experience
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={13} className="text-[#E8A87C] fill-[#E8A87C]" />
                      {caregiver.rating} ({caregiver.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {caregiver.tags.map(tag => (
                  <span key={tag} className="text-xs bg-[#F5EFE6] text-[#5A5A5A] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-white rounded-2xl border border-[#E8E0D6] p-7">
            <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">About {caregiver.name.split(' ')[0]}</h2>
            <p className="text-[#5A5A5A] leading-relaxed">{caregiver.bio}</p>

            <div className="mt-5 pt-5 border-t border-[#E8E0D6]">
              <div className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                <Globe size={15} className="text-[#7BAE9E]" />
                <span>Languages: <span className="font-medium text-[#2D2D2D]">{caregiver.languages.join(', ')}</span></span>
              </div>
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="bg-white rounded-2xl border border-[#E8E0D6] p-7">
            <h2 className="text-lg font-semibold text-[#2D2D2D] mb-5 flex items-center gap-2">
              <Calendar size={18} className="text-[#7BAE9E]" /> Availability
            </h2>
            <div className="flex gap-2 flex-wrap">
              {DAYS.map(day => (
                <div
                  key={day}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    caregiver.availability.includes(day)
                      ? 'bg-[#7BAE9E] text-white'
                      : 'bg-[#F5EFE6] text-[#8A8A8A]'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl border border-[#E8E0D6] p-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#2D2D2D]">
                Reviews <span className="text-[#8A8A8A] font-normal text-sm">({caregiver.reviewCount})</span>
              </h2>
              <div className="flex items-center gap-1">
                <Star size={15} className="text-[#E8A87C] fill-[#E8A87C]" />
                <span className="font-semibold text-[#2D2D2D]">{caregiver.rating}</span>
              </div>
            </div>

            <div className="space-y-5">
              {reviews.map((r, i) => (
                <div key={i} className="pb-5 border-b border-[#E8E0D6] last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={r.photo} alt={r.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D]">{r.name}</p>
                      <p className="text-xs text-[#8A8A8A]">{r.date}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} size={12} className="text-[#E8A87C] fill-[#E8A87C]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Hire Card */}
          <div className="bg-white rounded-2xl border border-[#E8E0D6] p-6 sticky top-24 shadow-sm">
            <div className="text-center mb-5">
              <span className="text-4xl font-bold text-[#2D2D2D]">CHF {caregiver.rate}</span>
              <span className="text-[#8A8A8A] text-sm"> / hour</span>
            </div>

            <Link
              to="/premium"
              className="block w-full text-center bg-[#7BAE9E] hover:bg-[#4A8C7A] text-white font-semibold py-3.5 rounded-xl transition-colors mb-3"
            >
              Contact {caregiver.name.split(' ')[0]}
            </Link>

            <button className="w-full flex items-center justify-center gap-2 text-[#5A5A5A] border border-[#E8E0D6] hover:border-[#7BAE9E] hover:text-[#7BAE9E] font-medium py-3 rounded-xl transition-colors text-sm mb-4">
              <Heart size={16} /> Save Profile
            </button>

            {/* Premium Lock */}
            <div className="bg-[#F5EFE6] rounded-xl p-4 flex items-start gap-3">
              <Lock size={16} className="text-[#7BAE9E] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#2D2D2D] mb-0.5">Premium Required</p>
                <p className="text-xs text-[#5A5A5A]">
                  Unlock messaging and full contact details with a Premium plan.
                </p>
                <Link to="/premium" className="text-xs text-[#7BAE9E] font-medium mt-1 inline-block hover:underline">
                  View plans →
                </Link>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              {[
                { icon: CheckCircle, text: 'Identity verified' },
                { icon: CheckCircle, text: 'Background checked' },
                { icon: MessageCircle, text: 'Usually responds within 2hrs' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                  <Icon size={14} className="text-[#7BAE9E]" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Share Card */}
          <div className="bg-[#F5EFE6] rounded-2xl p-5 text-center">
            <p className="text-sm text-[#5A5A5A] mb-2">Know someone looking for a caregiver?</p>
            <button className="text-sm font-medium text-[#7BAE9E] hover:underline">
              Share this profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
