import { useState, useEffect } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById('skills-section')
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  const skills = [
    { name: 'Linux & System Administration', level: 65, icon: '🐧' },
    { name: 'Networking & Protocol Analysis', level: 60, icon: '🌐' },
    { name: 'Web Security & OWASP', level: 60, icon: '🔒' },
    { name: 'Python Programming', level: 55, icon: '🐍' },
    { name: 'Git & GitHub', level: 70, icon: '📦' },
    { name: 'Cybersecurity Fundamentals', level: 70, icon: '⚔️' },
    { name: 'Problem Solving & Algorithm', level: 55, icon: '🧩' },
    { name: 'TryHackMe & Ethical Hacking', level: 65, icon: '🎯' },
  ]

  const skillCategories = [
    {
      title: 'Core Security',
      skills: ['Linux', 'Networking', 'Web Security', 'Cybersecurity Fundamentals'],
    },
    {
      title: 'Development',
      skills: ['Python', 'Git & GitHub', 'Problem Solving', 'Algorithm Design'],
    },
    {
      title: 'Platforms & Tools',
      skills: ['TryHackMe', 'Burp Suite', 'Metasploit', 'Wireshark'],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div id="skills-section" className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>

        {/* Skills Grid with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-xl hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-bold text-gray-100">{skill.name}</h3>
                </div>
                <span className="text-neon-green font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden border border-neon-green/20">
                <div
                  className="h-full bg-gradient-to-r from-neon-green to-green-500 rounded-full transition-all duration-1000 shadow-neon-glow"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-effect p-8 rounded-xl border border-neon-green/20 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 8) * 100}ms` : '0ms',
              }}
            >
              <h3 className="text-xl font-bold text-neon-green mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-neon-green transition-colors">
                    <span className="w-2 h-2 rounded-full bg-neon-green" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Expertise */}
        <div className="mt-16 glass-effect p-8 rounded-xl border border-neon-green/20">
          <h3 className="text-2xl font-bold mb-6">
            <span className="text-neon-green">Areas of Interest</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-neon-green font-bold mb-3">Offensive Security</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Web application security, penetration testing, vulnerability assessment, exploitation techniques, and security research.
              </p>
            </div>
            <div>
              <h4 className="text-neon-green font-bold mb-3">Learning Resources</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                TryHackMe, HackTheBox, CTF competitions, OWASP Top 10, bug bounty programs, and practical security implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
