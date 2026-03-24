'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Automation with n8n',
    description: 'Workflow automation system integrating APIs and services to streamline business processes.',
    tags: ['Automation', 'Node.js', 'APIs'],
    link: 'https://www.agencianous.com.ar/',
    github: 'https://github.com/alexbecerradev/nous-n8nchat/tree/main',
  },
  {
    title: 'React Native App (Coming Soon)',
    description: 'A cutting-edge mobile application currently under development using React Native and Expo.',
    tags: ['React Native', 'Mobile', 'UI/UX'],
    link: '#',
    github: null,
  },
  {
    title: 'RVM Landing Page',
    description: 'Modern and fast landing page built with React, focusing on performance and clean aesthetics.',
    tags: ['React', 'UI/UX', 'Performance'],
    link: 'https://github.com/alexbecerradev/rvmlanding',
    github: 'https://github.com/alexbecerradev/rvmlanding',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans uppercase">Selected <span className="text-neonOrange">Projects</span></h2>
        <p className="text-softGray text-lg">A showcase of my recent work and ongoing development.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card neon-border group relative flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-neonOrange transition-colors">
                {project.title}
              </h3>
              <p className="text-softGray mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-softGray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-softGray hover:text-neonOrange transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-softGray hover:text-neonOrange transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
