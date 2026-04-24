import { Link } from 'react-router-dom'
import { Baby, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#7BAE9E] flex items-center justify-center">
                <Baby size={16} className="text-white" />
              </div>
              <span className="font-semibold text-white text-lg">Little Nest</span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Connecting Swiss families with trusted, loving caregivers — safely and simply.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li><Link to="/caregivers" className="hover:text-white transition-colors">Babysitting</Link></li>
              <li><Link to="/caregivers" className="hover:text-white transition-colors">Nannies</Link></li>
              <li><Link to="/caregivers" className="hover:text-white transition-colors">Au Pairs</Link></li>
              <li><Link to="/caregivers" className="hover:text-white transition-colors">After-School Care</Link></li>
              <li><Link to="/caregivers" className="hover:text-white transition-colors">Overnight Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Locations</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li className="hover:text-white transition-colors cursor-pointer">Zurich</li>
              <li className="hover:text-white transition-colors cursor-pointer">Geneva</li>
              <li className="hover:text-white transition-colors cursor-pointer">Basel</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bern</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lausanne</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Safety</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#404040] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © 2026 Little Nest Family Care. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-[#E8A87C] fill-[#E8A87C]" /> in Switzerland
          </p>
        </div>
      </div>
    </footer>
  )
}
