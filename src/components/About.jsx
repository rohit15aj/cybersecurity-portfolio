import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById('about-section')
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-dark-secondary/30">
      <div id="about-section" className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am <span className="text-neon-green font-bold">Rohit Prakash</span>, a second-year student at{' '}
              <span className="text-neon-green">IIT Patna</span> with a growing passion for cybersecurity and bug bounty hunting.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy exploring web security, ethical hacking concepts, networking, and Linux systems. My curious mind constantly seeks to understand how systems can be both secured and attacked.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I am learning cybersecurity fundamentals, practical security concepts, and bug bounty methodologies while continuously improving my technical problem-solving skills.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-neon-green font-bold">My long-term goal</span> is to become an OSCP-certified cybersecurity professional and build strong expertise in offensive security.
            </p>

            {/* Key Points */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="text-gray-300">Exploring web security vulnerabilities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="text-gray-300">Active in bug bounty platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="text-gray-300">Deep dive into network security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="text-gray-300">OSCP certification aspirant</span>
              </div>
            </div>
          </div>

          {/* Right - Animated Stats */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat Card 1 */}
            <div className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer">
              <div className="text-4xl font-bold text-neon-green mb-2 group-hover:text-white transition-colors">2+</div>
              <p className="text-gray-400 text-sm">Years of Learning</p>
              <div className="mt-4 h-1 bg-neon-green/20 rounded-full group-hover:bg-neon-green/50 transition-all w-full" />
            </div>

            {/* Stat Card 2 */}
            <div className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer">
              <div className="text-4xl font-bold text-neon-green mb-2 group-hover:text-white transition-colors">10+</div>
              <p className="text-gray-400 text-sm">Projects Completed</p>
              <div className="mt-4 h-1 bg-neon-green/20 rounded-full group-hover:bg-neon-green/50 transition-all w-full" />
            </div>

            {/* Stat Card 3 */}
            <div className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer">
              <div className="text-4xl font-bold text-neon-green mb-2 group-hover:text-white transition-colors">8+</div>
              <p className="text-gray-400 text-sm">Technical Skills</p>
              <div className="mt-4 h-1 bg-neon-green/20 rounded-full group-hover:bg-neon-green/50 transition-all w-full" />
            </div>

            {/* Stat Card 4 */}
            <div className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer">
              <div className="text-4xl font-bold text-neon-green mb-2 group-hover:text-white transition-colors">2</div>
              <p className="text-gray-400 text-sm">Certifications</p>
              <div className="mt-4 h-1 bg-neon-green/20 rounded-full group-hover:bg-neon-green/50 transition-all w-full" />
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20 pt-20 border-t border-neon-green/20">
          <h3 className="text-2xl font-bold mb-12">
            <span className="text-neon-green">Education</span> & Background
          </h3>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-neon-green" />
                <div className="w-1 h-24 bg-neon-green/30" />
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-bold text-neon-green">IIT Patna</h4>
                <p className="text-gray-400 text-sm mt-1">Current • Second Year</p>
                <p className="text-gray-300 mt-3">Pursuing comprehensive technical education with focus on cybersecurity and software development.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-neon-green" />
                <div className="w-1 h-24 bg-neon-green/30" />
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-bold text-neon-green">Cybersecurity Specialization</h4>
                <p className="text-gray-400 text-sm mt-1">2025 - Present</p>
                <p className="text-gray-300 mt-3">Deep dive into offensive security, ethical hacking, and bug bounty hunting methodologies.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-neon-green" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-neon-green">OSCP Aspiration</h4>
                <p className="text-gray-400 text-sm mt-1">Target: Future Goal</p>
                <p className="text-gray-300 mt-3">Long-term goal to pursue OSCP after building strong foundation in cybersecurity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
