'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="section-container mt-24">
      <div className="glass-card neon-border relative overflow-hidden p-12 md:p-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-sans uppercase">
            Ready to <span className="text-neonOrange">collaborate?</span>
          </h2>
          <p className="text-softGray text-lg mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.a
              href="mailto:alexbecerradev@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/alexbecerradev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub Profile
            </motion.a>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-softGray text-sm font-mono">
            <p>© {new Date().getFullYear()} Alex Becerra. Built with passion & technology.</p>
            <div className="flex items-center gap-8">
              <a href="https://github.com/alexbecerradev" target="_blank" rel="noopener noreferrer" className="hover:text-neonOrange transition-colors">GITHUB</a>
              <a href="#" className="hover:text-neonOrange transition-colors">LINKEDIN</a>
              <a href="#" className="hover:text-neonOrange transition-colors">TWITTER</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
