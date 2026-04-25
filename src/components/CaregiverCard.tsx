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
      className="bg-white rounded-2xl overflow-hidden border border-sage/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-fade-in-up flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative">
        <img
          src={caregiver.photo}
          alt={caregiver.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
          <Star size={13} className="text-amber fill-amber" />
          <span className="text-xs font-bold text-ink">{caregiver.rating}</span>
          <span className="text-xs text-muted">({caregiver.reviewCount})</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-ink text-base">{caregiver.name}</h3>
            <p className="text-xs text-primary font-semibold mt-0.5">{caregiver.role}</p>
          </div>
          <div className="text-right">
            <span className="font-extrabold text-ink text-xl">CHF {caregiver.rate}</span>
            <p className="text-xs text-muted">/hour</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <MapPin size={11} /> {caregiver.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} /> {caregiver.experience} yrs exp
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {caregiver.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-beige text-sub px-2.5 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/caregivers/${caregiver.id}`}
          className="mt-auto block w-full text-center text-sm font-semibold bg-primary hover:bg-primary-dark text-white rounded-xl py-2.5 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}
