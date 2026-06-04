import { useEffect, useState } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profilePic from '../assets/profile.jpg'


export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)

  const roles = [
    'Aspiring Bug Bounty Hunter',
    'Cybersecurity Learner',
    'Future OSCP Aspirant',
    'Security Research Enthusiast',
  ]

  // Animated typing effect
  useEffect(() => {
    const currentRole = roles[textIndex % roles.length]
    let charIndex = 0

    if (displayedText.length < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex + 1))
        charIndex++
      }, 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayedText('')
        setTextIndex((prev) => prev + 1)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [displayedText, textIndex])

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Profile Image with Glow */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-full neon-glow-strong opacity-30 blur-xl" />

            {/* Profile Image Circle */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-green glass-effect-strong flex items-center justify-center overflow-hidden hover-glow animate-float">
              <div className="w-full h-full bg-gradient-to-br from-neon-green/20 to-neon-green/5 flex items-center justify-center">
               <img
               src={profilePic}
               alt="Rohit Prakash"
               className="w-full h-full object-cover rounded-full"
               />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="neon-text block mb-2">ROHIT PRAKASH</span>
          <span className="text-2xl md:text-4xl text-gray-400">Cybersecurity Enthusiast</span>
        </h1>

        {/* Animated Typing Text */}
        <div className="my-8 text-2xl md:text-3xl">
          <span className="text-neon-green">
            {displayedText}
            <span className="typing-text">|</span>
          </span>
        </div>

        {/* Hero Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate about cybersecurity, ethical hacking, and building practical technical skills through real-world learning. Currently exploring bug bounty hunting and security research.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <a
            href="https://github.com/rohit15aj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/rohit15aj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-green hover:text-white transition-colors duration-300 hover-glow"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-prakash-3b7861358"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-green hover:text-white transition-colors duration-300 hover-glow"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:rohitprakash727@gmail.com"
            className="text-neon-green hover:text-white transition-colors duration-300 hover-glow"
          >
            <FiMail />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neon-green hover:text-white transition-colors duration-300 animate-bounce"
        >
          <FiArrowDown size={32} />
        </button>
      </div>
    </section>
  )
}
