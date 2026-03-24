'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans uppercase">
            Passion for <span className="text-neonOrange">Software</span>
          </h2>
          <div className="space-y-6 text-softGray text-lg leading-relaxed">
            <p>
              My journey began with a simple curiosity about how things work. That curiosity turned into a lifelong passion for software engineering.
            </p>
            <p>
              I believe in an experimentation mindset—always trying new tools, frameworks, and methodologies to find the most efficient ways to build digital products.
            </p>
            <p>
              For me, technology isn't just about code; it's about solving real-world problems and creating experiences that make a difference.
            </p>
          </div>
        </motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="glass-card neon-border aspect-square flex items-center justify-center group overflow-hidden relative"
>
  {/* Imagen de perfil */}
  <img
    src="assets\profile.png"
    alt="Profile"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Viñeta radial */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(
        ellipse at center,
        transparent 50%,
        rgba(0, 0, 0, 0.85) 85%,
        rgba(0, 0, 0, 0.95) 100%
      )`,
    }}
  />

  {/* Glow hover (opcional, mantiene el efecto del original) */}
  <div className="absolute -inset-4 bg-neonOrange/10 blur-x2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
</motion.div>
      </div>
    </section>
  )
}
