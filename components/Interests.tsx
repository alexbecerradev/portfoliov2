'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const interests = [
  'Web technologies',
  'Mobile apps',
  'Automation systems',
  'AI tools',
  'Developer tools',
  'Experimental projects',
]

export default function Interests() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans uppercase">
            Areas of <span className="text-neonOrange">Interest</span>
          </h2>
          <p className="text-softGray text-lg mb-8 max-w-lg">
            Beyond regular development, I am constantly exploring these domains to stay ahead of the curve and find new ways to innovate.
          </p>
        </motion.div>

        <div className="space-y-4">
          {interests.map((interest, idx) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <Sparkles className="w-5 h-5 text-neonOrange/40 group-hover:text-neonOrange transition-colors" />
              <span className="text-2xl font-medium text-white/80 group-hover:text-white transition-colors font-mono">
                {interest}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
