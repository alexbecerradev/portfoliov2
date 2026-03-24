'use client'

import { motion } from 'framer-motion'

const stack = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: 'i-simple-icons-oracle' },
      { name: 'JavaScript', icon: 'i-simple-icons-javascript' },
      { name: 'Kotlin', icon: 'i-simple-icons-kotlin' },
      { name: 'React Native', icon: 'i-simple-icons-react' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
      { name: 'Firebase', icon: 'i-simple-icons-firebase' },
      { name: 'SQL', icon: 'i-simple-icons-sql' },
      { name: 'AWS Cloud', icon: 'i-simple-icons-aws' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: 'i-simple-icons-react' },
      { name: 'Next.js', icon: 'i-simple-icons-nextdotjs' },
      { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'i-simple-icons-git' },
      { name: 'Docker', icon: 'i-simple-icons-docker' },
      { name: 'Linux', icon: 'i-simple-icons-linux' },
      { name: 'Cloudflare', icon: 'i-simple-icons-cloudflare' },
    ],
  },
  {
    category: 'Automation',
    items: [
      { name: 'n8n', icon: 'i-simple-icons-n8n' },
      { name: 'Meta', icon: 'i-simple-icons-meta' }
    ],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans uppercase">Tech <span className="text-neonOrange">Stack</span></h2>
        <p className="text-softGray text-lg">My primary toolset for building modern applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card"
          >
            <h3 className="text-xl font-bold mb-6 text-neonOrange/80 uppercase tracking-widest text-sm font-mono">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-3 hover:border-neonOrange/30 hover:bg-neonOrange/5 transition-all duration-300 group"
                >
                  <div className={`${item.icon} w-6 h-6 text-softGray group-hover:text-neonOrange transition-colors`} />
                  <span className="font-medium text-softGray group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
