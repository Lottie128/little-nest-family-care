import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, MapPin, X } from 'lucide-react'
import { caregivers } from '../data/caregivers'
import CaregiverCard from '../components/CaregiverCard'

const LOCATIONS = ['All', 'Zurich', 'Geneva', 'Basel', 'Bern', 'Lausanne']
const TYPES = ['All', 'Nanny', 'Babysitter', 'Au Pair']

export default function Caregivers() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('All')
  const [type, setType] = useState('All')
  const [maxRate, setMaxRate] = useState(50)
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    return caregivers.filter(c => {
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchLocation = location === 'All' || c.location === location
      const matchType = type === 'All' || c.role.toLowerCase().includes(type.toLowerCase())
      const matchRate = c.rate <= maxRate
      return matchSearch && matchLocation && matchType && matchRate
    })
  }, [search, location, type, maxRate])

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#2D2D2D] mb-2">Find a Caregiver</h1>
        <p className="text-[#5A5A5A]">
          Browse {caregivers.length} verified caregivers across Switzerland.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-2xl border border-[#E8E0D6] p-5 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search by name, skill, or keyword..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8E0D6] text-sm text-[#2D2D2D] placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40"
            />
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
              <select
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="pl-8 pr-8 py-2.5 rounded-xl border border-[#E8E0D6] text-sm text-[#2D2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40 appearance-none"
              >
                {LOCATIONS.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>

            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-[#E8E0D6] text-sm text-[#2D2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BAE9E]/40"
            >
              {TYPES.map(t => <option key={t}>{t}</option>)}
            </select>

            <button
              onClick={() => setShowFilters(f => !f)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8E0D6] text-sm text-[#5A5A5A] hover:border-[#7BAE9E] hover:text-[#7BAE9E] transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-[#E8E0D6]">
            <label className="text-sm font-medium text-[#2D2D2D] block mb-2">
              Max rate: <span className="text-[#7BAE9E]">CHF {maxRate}/hr</span>
            </label>
            <input
              type="range"
              min={15}
              max={50}
              value={maxRate}
              onChange={e => setMaxRate(Number(e.target.value))}
              className="w-full max-w-xs accent-[#7BAE9E]"
            />
          </div>
        )}
      </div>

      {/* Active filters */}
      {(search || location !== 'All' || type !== 'All' || maxRate < 50) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {search && (
            <button
              onClick={() => setSearch('')}
              className="flex items-center gap-1.5 text-xs bg-[#F5EFE6] text-[#5A5A5A] px-3 py-1.5 rounded-full"
            >
              "{search}" <X size={11} />
            </button>
          )}
          {location !== 'All' && (
            <button
              onClick={() => setLocation('All')}
              className="flex items-center gap-1.5 text-xs bg-[#F5EFE6] text-[#5A5A5A] px-3 py-1.5 rounded-full"
            >
              {location} <X size={11} />
            </button>
          )}
          {type !== 'All' && (
            <button
              onClick={() => setType('All')}
              className="flex items-center gap-1.5 text-xs bg-[#F5EFE6] text-[#5A5A5A] px-3 py-1.5 rounded-full"
            >
              {type} <X size={11} />
            </button>
          )}
        </div>
      )}

      {/* Results */}
      <p className="text-sm text-[#8A8A8A] mb-6">
        Showing {filtered.length} caregiver{filtered.length !== 1 ? 's' : ''}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <CaregiverCard key={c.id} caregiver={c} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#E8E0D6]">
          <p className="text-4xl mb-4">🔍</p>
          <p className="font-semibold text-[#2D2D2D] mb-2">No caregivers found</p>
          <p className="text-sm text-[#8A8A8A]">Try adjusting your filters</p>
        </div>
      )}
    </div>
  )
}
