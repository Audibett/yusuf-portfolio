import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { FaLinkedin, FaGithub, FaBehance, FaDribbble } from 'react-icons/fa'

const SOCIALS = [
  { icon: FaBehance, label: 'Behance', href: '#' },
  { icon: FaDribbble, label: 'Dribbble', href: '#' },
  { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
  { icon: FaGithub, label: 'GitHub', href: '#' },
]

const HEADLINE = ["Let's make", 'something', 'great.']
const STYLES = ['text-ink', 'text-ink/20 italic', 'text-yellow']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="px-6 py-28 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Staggered big headline */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] tracking-widest uppercase text-yellow mb-4"
          >
            Get in Touch
          </motion.p>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-none">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${STYLES[i]}`}
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/60 mb-2">Email</p>
              <motion.a
                href="mailto:yusuf@example.com"
                whileHover={{ color: '#E8FF00', x: 4 }}
                transition={{ duration: 0.2 }}
                className="text-lg text-ink inline-block"
              >
                yusuf@example.com
              </motion.a>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/60 mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIALS.map(s => {
                  const Icon = s.icon
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      whileHover={{ scale: 1.15, borderColor: '#E8FF00', color: '#E8FF00' }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="h-10 w-10 border border-line grid place-items-center text-ink-soft"
                    >
                      <Icon size={15} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/60 mb-2">Based in</p>
              <p className="text-ink-soft">Add your location</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full min-h-[280px] border border-line flex flex-col items-center justify-center text-center p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <CheckCircle2 size={32} className="text-yellow mb-3" />
                </motion.div>
                <h3 className="font-display font-bold text-xl mb-1">Message received.</h3>
                <p className="text-sm text-ink-soft">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map((f, i) => (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <label htmlFor={f.id} className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/60">
                      {f.label}
                    </label>
                    <input id={f.id} name={f.id} type={f.type} required
                      value={form[f.id]} onChange={handleChange} placeholder={f.placeholder}
                      className="mt-1.5 w-full bg-bg border border-line px-4 py-3 text-sm text-ink focus:border-yellow outline-none transition-colors placeholder:text-ink-soft/30" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16, duration: 0.4 }}
                >
                  <label htmlFor="message" className="font-mono text-[10px] tracking-widest uppercase text-ink-soft/60">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="mt-1.5 w-full bg-bg border border-line px-4 py-3 text-sm text-ink focus:border-yellow outline-none transition-colors resize-none placeholder:text-ink-soft/30" />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-yellow text-bg font-mono text-xs tracking-widest uppercase px-5 py-4"
                >
                  <Send size={14} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
