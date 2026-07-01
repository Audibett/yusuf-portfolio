import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const CATEGORIES = ['All', 'Branding', 'UI Design', 'Motion', 'Illustration']

const PROJECTS = [
  {
    id: 'p1',
    number: '01',
    title: 'Brand Identity — Placeholder',
    category: 'Branding',
    year: '2024',
    description: 'A complete visual identity system for a placeholder client — logo, colour palette, typography, brand guidelines, and print collateral. Replace with a real project.',
    tags: ['Figma', 'Illustrator', 'Branding'],
    link: '#',
  },
  {
    id: 'p2',
    number: '02',
    title: 'UI Design System — Placeholder',
    category: 'UI Design',
    year: '2024',
    description: 'A design system built from scratch: components, spacing rules, colour tokens, and interactive prototypes — ready for handoff or built out directly.',
    tags: ['Figma', 'Design Systems', 'UI'],
    link: '#',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Motion Graphics — Placeholder',
    category: 'Motion',
    year: '2023',
    description: 'A motion piece for a placeholder brief — title sequences, animated logos, or social content. Replace with a real project.',
    tags: ['After Effects', 'Motion', 'Animation'],
    link: '#',
  },
  {
    id: 'p4',
    number: '04',
    title: 'Editorial Illustration — Placeholder',
    category: 'Illustration',
    year: '2023',
    description: 'A series of editorial illustrations for a placeholder publication. Replace with a real project.',
    tags: ['Illustrator', 'Procreate', 'Illustration'],
    link: '#',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Work() {
  const [active, setActive] = useState('All')

  const visible = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="work" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Section header with wipe-in line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-8 border-b border-line"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-yellow mb-2">
              Selected Work
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl">Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className={`font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 border transition-colors ${
                  active === cat
                    ? 'bg-yellow text-bg border-yellow'
                    : 'border-line text-ink-soft hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Staggered project rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-0"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={rowVariants}
      layout
      exit={{ opacity: 0, y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border-b border-line"
    >
      <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[80px_1fr_180px_auto] items-center gap-4 py-7 transition-colors">

        {/* Animated number */}
        <motion.span
          animate={{ color: hovered ? '#E8FF00' : 'rgba(255,255,255,0.15)' }}
          transition={{ duration: 0.2 }}
          className="font-display font-black text-2xl"
        >
          {project.number}
        </motion.span>

        {/* Title + expand */}
        <div>
          <motion.h3
            animate={{ color: hovered ? '#E8FF00' : '#F5F2EB' }}
            transition={{ duration: 0.2 }}
            className="font-display font-bold text-xl sm:text-2xl"
          >
            {project.title}
          </motion.h3>

          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="text-sm text-ink-soft mt-1 max-w-xl leading-relaxed overflow-hidden"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((t, i) => (
              <span key={t} className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/50">
                {t}{i < project.tags.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Year + category */}
        <div className="hidden sm:block text-right">
          <p className="font-mono text-xs text-ink-soft">{project.year}</p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/50 mt-0.5">
            {project.category}
          </p>
        </div>

        {/* Arrow button */}
        <motion.a
          href={project.link}
          aria-label={`View ${project.title}`}
          animate={{
            backgroundColor: hovered ? '#E8FF00' : 'transparent',
            borderColor: hovered ? '#E8FF00' : '#232323',
            color: hovered ? '#0D0D0D' : '#888680',
          }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="h-10 w-10 border grid place-items-center"
        >
          <ArrowUpRight size={16} />
        </motion.a>
      </div>
    </motion.article>
  )
}
