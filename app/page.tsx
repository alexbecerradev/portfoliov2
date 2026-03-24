import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Interests from '@/components/Interests'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Interests />
      <Philosophy />
      <Contact />
    </main>
  )
}
