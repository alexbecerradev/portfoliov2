'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-softGray hover:text-neonOrange transition-colors duration-300 font-mono"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}
