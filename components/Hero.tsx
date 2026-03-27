'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[100px] h-[100px] bg-neonOrange/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[100px] h-[100px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neonOrange/20 rounded-full blur-[160px]" />

      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-neonOrange font-mono tracking-widest uppercase text-sm mb-4 block">
            alexbecerradev
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight font-sans uppercase tracking-tighter">
            Let me introduce <br />
            <span className="text-gradient">myself</span>
          </h1>
          <p className="text-softGray text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Child of the 90s decade, I grew up surrounded by technology and computers.
            Since then I've been passionate about building software, experimenting with new tools, and exploring how technology can solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              Contact
              <Phone className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-neonOrange rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
