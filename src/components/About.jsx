import { motion } from 'framer-motion'

const TOOLS = ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Procreate', 'InDesign', 'VS Code', 'React']

export default function About() {
  return (
    <section id="about" className="px-6 py-28 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — quote + photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[10px] tracking-widest uppercase text-yellow mb-6">About</p>

            {/* Quote with animated yellow highlight */}
            <blockquote className="font-display font-bold italic text-3xl sm:text-4xl leading-tight text-ink">
              "Good design is as little design as possible — but it should always
              <motion.span
                initial={{ color: '#F5F2EB' }}
                whileInView={{ color: '#E8FF00' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {' '}say something."
              </motion.span>
            </blockquote>

            {/* Photo placeholder with reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-10 h-64 w-full bg-bg-card border border-line flex items-center justify-center relative overflow-hidden"
              role="img"
              aria-label="Profile photo placeholder for Yusuf"
            >
              {/* Wipe overlay */}
              <motion.div
                initial={{ x: 0 }}
                whileInView={{ x: '101%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute inset-0 bg-yellow z-10"
              />
              <span className="font-display font-black text-7xl text-ink/10" aria-hidden="true">Y</span>
            </motion.div>
          </motion.div>

          {/* Right — bio + tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6 text-ink-soft leading-relaxed pt-12"
          >
            <p>
              I'm Yusuf, a Computer Science student with a major in Graphic Design.
              I sit at the intersection of logic and aesthetics — someone who can
              write the code <em>and</em> design the system it runs on.
            </p>
            <p>
              What draws me to design is the same thing that draws me to code:
              the challenge of making something complex feel effortless to use.
              Whether I'm building a brand from scratch or designing a UI component
              system, I'm thinking about structure, hierarchy, and the person on
              the other end.
            </p>
            <p>
              I'm currently taking on freelance projects — branding, UI design,
              motion, and illustration — while building out my CS toolkit.
            </p>

            <div className="pt-4 border-t border-line">
              <p className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/60 mb-4">
                Tools I work with
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              >
                {TOOLS.map(tool => (
                  <motion.span
                    key={tool}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ borderColor: '#E8FF00', color: '#E8FF00' }}
                    className="font-mono text-xs px-3 py-1.5 border border-line text-ink-soft transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
