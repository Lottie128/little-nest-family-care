import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Baby } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/caregivers', label: 'Find Caregivers' },
    { to: '/post-job', label: 'Post a Job' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/premium', label: 'Pricing' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E0D6]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#7BAE9E] flex items-center justify-center">
            <Baby size={16} className="text-white" />
          </div>
          <span className="font-semibold text-[#2D2D2D] text-lg tracking-tight">
            Little Nest <span className="text-[#7BAE9E]">Family Care</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                pathname === l.to
                  ? 'text-[#4A8C7A]'
                  : 'text-[#5A5A5A] hover:text-[#2D2D2D]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/messages"
            className="text-sm font-medium text-[#5A5A5A] hover:text-[#2D2D2D] transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/caregivers"
            className="text-sm font-medium bg-[#7BAE9E] hover:bg-[#4A8C7A] text-white px-4 py-2 rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#5A5A5A]"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E8E0D6] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-[#5A5A5A]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/caregivers"
            className="text-sm font-medium bg-[#7BAE9E] text-white px-4 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
