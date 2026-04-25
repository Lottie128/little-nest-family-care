import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Baby } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/#services', label: 'Our Services' },
    { to: '/caregivers', label: 'Find Caregivers' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/premium', label: 'Pricing' },
  ]

  const isActive = (to: string) => {
    if (to.startsWith('/#')) return pathname === '/'
    return pathname === to
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <Baby size={17} className="text-white" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-ink text-base tracking-tight block">
              Little Nest <span className="text-primary">Family Care</span>
            </span>
            <span className="text-[10px] text-muted tracking-widest uppercase block -mt-0.5">Swiss Settlement Concierge</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                isActive(l.to) ? 'text-primary-dark' : 'text-sub hover:text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/messages"
            className="text-sm font-medium text-sub hover:text-ink transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/post-job"
            className="text-sm font-medium bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-colors shadow-sm"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-sub"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border-soft px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-sub"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/post-job"
            className="text-sm font-medium bg-primary text-white px-4 py-2.5 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
