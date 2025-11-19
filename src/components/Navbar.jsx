import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Approach', href: '#approach' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30"></div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-lg tracking-tight">Tweezers</div>
              <div className="text-xs text-slate-300/70">Portfolio & Trading Advisory</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4 py-2 font-medium shadow-lg shadow-blue-500/20">
              Book Consultation
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur">
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4 py-2 font-medium shadow-lg shadow-blue-500/20" onClick={() => setOpen(false)}>
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
