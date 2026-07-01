import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaBehance, FaDribbble } from 'react-icons/fa'

const SOCIALS = [
  { icon: FaBehance, href: '#', label: 'Behance' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#top" className="font-display font-bold text-xl flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" fill="#0D0D0D" />
            <rect x="6" y="6" width="20" height="20" fill="none" stroke="#E8FF00" strokeWidth="2" />
            <rect x="12" y="12" width="8" height="8" fill="#E8FF00" />
          </svg>
          Martin
        </a>

        <p className="font-mono text-[11px] text-ink-soft/40">
          © {new Date().getFullYear()} Martin. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {SOCIALS.map(s => {
            const Icon = s.icon
            return (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ scale: 1.15, borderColor: '#E8FF00', color: '#E8FF00' }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="h-8 w-8 border border-line grid place-items-center text-ink-soft"
              >
                <Icon size={13} />
              </motion.a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
