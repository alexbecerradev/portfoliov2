'use client'

import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonOrange/20 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-softGray mb-12">
          Engineering Mindset
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-12">
          <div className="text-3xl md:text-5xl font-black italic tracking-tighter space-y-2 md:space-y-0 flex flex-col md:flex-row items-center gap-2">
            <span className="hover:text-neonOrange transition-colors duration-500">BUILD</span>
            <span className="text-neonOrange/40 md:block hidden">→</span>
            <span className="hover:text-neonOrange transition-colors duration-500">TEST</span>
            <span className="text-neonOrange/40 md:block hidden">→</span>
            <span className="hover:text-neonOrange transition-colors duration-500">IMPROVE</span>
            <span className="text-neonOrange/40 md:block hidden">→</span>
            <span className="hover:text-neonOrange transition-colors duration-500">REPEAT</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
