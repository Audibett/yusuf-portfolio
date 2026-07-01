import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" fill="#0D0D0D" />
            <rect x="6" y="6" width="20" height="20" fill="none" stroke="#E8FF00" strokeWidth="2" />
            <rect x="12" y="12" width="8" height="8" fill="#E8FF00" />
          </svg>
          Yusuf
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className="font-mono text-xs tracking-widest uppercase text-ink-soft hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="font-mono text-xs tracking-widest uppercase bg-yellow text-bg px-4 py-2 hover:opacity-90 transition-opacity">
            Hire Me
          </a>
        </div>

        <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden text-ink-soft hover:text-ink">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-line px-6 py-5 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-ink-soft hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
