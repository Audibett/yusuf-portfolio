import { motion } from 'framer-motion'

const SERVICES = [
  { number: '01', title: 'Brand Identity', description: 'Logo design, colour systems, typography, brand guidelines, and the full visual language your brand needs to be consistent everywhere.' },
  { number: '02', title: 'UI & Web Design', description: 'User interface design, component systems, and interactive Figma prototypes — ready for handoff to a developer or built by me directly.' },
  { number: '03', title: 'Motion Graphics', description: 'Animated logos, title sequences, social content, and explainer visuals that add life to a static brand.' },
  { number: '04', title: 'Illustration', description: 'Editorial, conceptual, and decorative illustration for digital and print — covers, icons, infographics, and bespoke artwork.' },
  { number: '05', title: 'Print & Collateral', description: 'Business cards, brochures, posters, packaging, and anything that needs to look good at 300dpi.' },
]

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b border-line pb-8"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-yellow mb-2">What I Do</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl">Services</h2>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-yellow text-bg font-mono text-xs tracking-widest uppercase px-5 py-3 self-start sm:self-auto"
          >
            Start a Project
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="space-y-0"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.number}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr_1fr] gap-6 py-8 border-b border-line cursor-default"
            >
              <motion.span
                className="font-mono text-xs text-ink-soft/40 pt-1"
                whileHover={{ color: '#E8FF00' }}
              >
                {s.number}
              </motion.span>
              <h3 className="font-display font-bold text-xl sm:text-2xl group-hover:text-yellow transition-colors duration-200">
                {s.title}
              </h3>
              <p className="hidden sm:block text-sm text-ink-soft leading-relaxed">
                {s.description}
              </p>
              <p className="sm:hidden text-sm text-ink-soft leading-relaxed col-start-2">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
