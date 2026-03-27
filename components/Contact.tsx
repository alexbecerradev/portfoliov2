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
              href="https://wa.me/542477302168"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.148 1.528 5.908L0 24l6.233-1.506A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.366l-.36-.214-3.7.894.936-3.614-.235-.372A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              WhatsApp
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
