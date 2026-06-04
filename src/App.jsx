import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import GitHubStats from './components/GitHubStats'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import MatrixBackground from './components/MatrixBackground'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-bg overflow-x-hidden">
      {/* Background Elements */}
      <MatrixBackground />
      <ScrollProgress progress={scrollProgress} />
      <CursorGlow />

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
         <About />
        <Skills />
        <Projects />
        <Certificates />
        <GitHubStats />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
