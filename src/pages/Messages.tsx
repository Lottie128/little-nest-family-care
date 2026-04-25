import { Lock, Send, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caregivers } from '../data/caregivers'

const MOCK_MESSAGES = [
  { from: 'caregiver', text: 'Hi! Thank you for reaching out. I am available on Wednesday from 2pm. Would that work for you?', time: '10:32' },
  { from: 'user', text: 'That works perfectly. Could you start next week?', time: '10:45' },
  { from: 'caregiver', text: 'Yes, absolutely! I look forward to meeting your family.', time: '10:47' },
]

export default function Messages() {
  const active = caregivers.slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-ink mb-2">Messages</h1>
        <p className="text-sub">Securely communicate with caregivers.</p>
      </div>

      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 mb-8 flex items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Lock size={22} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold text-lg mb-1">Unlock Full Messaging</p>
          <p className="text-white/80 text-sm">Upgrade to Premium to send unlimited messages and contact caregivers directly.</p>
        </div>
        <Link
          to="/premium"
          className="shrink-0 bg-white text-primary-dark font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-cream transition-colors text-sm"
        >
          Upgrade Now <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded-2xl border border-border-soft overflow-hidden">
        {/* Sidebar */}
        <div className="border-r border-border-soft">
          <div className="p-4 border-b border-border-soft">
            <p className="text-sm font-semibold text-ink">Conversations</p>
          </div>
          {active.map((c, i) => (
            <div
              key={c.id}
              className={`flex items-center gap-3 p-4 cursor-pointer border-b border-border-soft transition-colors ${
                i === 0 ? 'bg-beige' : 'hover:bg-cream'
              }`}
            >
              <div className="relative">
                <img src={c.photo} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
                {i === 0 && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink truncate">{c.name}</p>
                <p className="text-xs text-muted truncate">
                  {i === 0 ? 'Yes, absolutely! I look...' : i === 1 ? 'I am available on...' : 'Thank you for...'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">{i === 0 ? '10:47' : i === 1 ? 'Yesterday' : 'Mon'}</p>
                {i === 1 && (
                  <div className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center ml-auto mt-1">2</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="md:col-span-2 flex flex-col">
          <div className="p-4 border-b border-border-soft flex items-center gap-3">
            <img src={active[0].photo} alt="" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-ink">{active[0].name}</p>
              <p className="text-xs text-primary">Online</p>
            </div>
          </div>

          <div className="flex-1 p-5 space-y-4 min-h-64">
            {MOCK_MESSAGES.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-sm px-4 py-2.5 rounded-2xl text-sm ${
                  msg.from === 'user' ? 'bg-primary text-white' : 'bg-beige text-ink'
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.from === 'user' ? 'text-white/70' : 'text-muted'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Locked Input */}
          <div className="p-4 border-t border-border-soft relative">
            <div className="flex items-center gap-3">
              <div className="flex-1 px-4 py-3 rounded-xl border border-border-soft bg-cream text-sm text-muted">
                Upgrade to send messages...
              </div>
              <button className="w-10 h-10 rounded-xl bg-border-soft flex items-center justify-center cursor-not-allowed">
                <Send size={16} className="text-muted" />
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-b-2xl">
              <Link
                to="/premium"
                className="flex items-center gap-2 text-sm font-semibold text-white bg-primary px-5 py-2.5 rounded-full shadow-md hover:bg-primary-dark transition-colors"
              >
                <Lock size={14} /> Unlock Messaging
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
