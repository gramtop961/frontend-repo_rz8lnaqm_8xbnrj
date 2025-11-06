import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur bg-slate-950/60 ring-1 ring-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">MyPortfolio</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-lg bg-white px-4 py-2 text-slate-900 hover:shadow">
            Hire Me
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg bg-white px-4 py-2 text-slate-900">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
