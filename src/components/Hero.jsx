import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const WORDS = ['Design', 'that', 'thinks.']
const STYLES = ['text-ink', 'text-ink/20 italic', 'text-ink']

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between px-6 pt-32 pb-12 overflow-hidden">

      {/* Animated background letters */}
      <motion.span
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[28vw] leading-none text-white/[0.025] select-none pointer-events-none"
      >
        YS
      </motion.span>

      {/* Animated yellow bar that wipes in from left */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 h-1 w-full bg-yellow"
      />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-xs tracking-widest uppercase text-yellow mb-8"
        >
          Graphic Designer & CS Student — Available for work
        </motion.p>

        {/* Staggered headline words */}
        <h1 className="font-display font-black leading-[0.9] tracking-tight">
          {WORDS.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className={`block text-[13vw] sm:text-[11vw] lg:text-[9vw] ${STYLES[i]}`}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.6 + i * 0.12 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8 max-w-5xl"
        >
          <p className="text-base text-ink-soft max-w-md leading-relaxed">
            I'm Yusuf — a computer science student specialising in graphic design.
            I make things that are both rigorous and beautiful: brand identities,
            UI systems, and design-led digital experiences.
          </p>

          <div className="flex gap-4 shrink-0">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-yellow text-bg font-mono text-xs tracking-widest uppercase px-5 py-3"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-line font-mono text-xs tracking-widest uppercase px-5 py-3 text-ink-soft hover:border-ink hover:text-ink transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex items-center gap-3 text-ink-soft"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          style={{ originX: 0 }}
          className="h-px w-12 bg-line"
        />
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={12} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
