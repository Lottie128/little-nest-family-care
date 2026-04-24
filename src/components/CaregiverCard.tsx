import { Link } from 'react-router-dom'
import { Star, MapPin, Clock } from 'lucide-react'
import type { Caregiver } from '../data/caregivers'

interface Props {
  caregiver: Caregiver
  index?: number
}

export default function CaregiverCard({ caregiver, index = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative">
        <img
          src={caregiver.photo}
          alt={caregiver.name}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
          <Star size={13} className="text-[#E8A87C] fill-[#E8A87C]" />
          <span className="text-xs font-semibold text-[#2D2D2D]">{caregiver.rating}</span>
          <span className="text-xs text-[#8A8A8A]">({caregiver.reviewCount})</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="font-semibold text-[#2D2D2D] text-base">{caregiver.name}</h3>
            <p className="text-xs text-[#7BAE9E] font-medium">{caregiver.role}</p>
          </div>
          <div className="text-right">
            <span className="font-bold text-[#2D2D2D] text-lg">CHF {caregiver.rate}</span>
            <p className="text-xs text-[#8A8A8A]">/hour</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2 mb-3 text-xs text-[#8A8A8A]">
          <span className="flex items-center gap-1">
            <MapPin size={11} /> {caregiver.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} /> {caregiver.experience} yrs exp
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {caregiver.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs bg-[#F5EFE6] text-[#5A5A5A] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            to={`/caregivers/${caregiver.id}`}
            className="block w-full text-center text-sm font-medium bg-[#FAF7F2] hover:bg-[#7BAE9E] hover:text-white text-[#4A8C7A] border border-[#B5D5C5] rounded-xl py-2.5 transition-all duration-200"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
