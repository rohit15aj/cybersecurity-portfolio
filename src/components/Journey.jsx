import { useState, useEffect } from 'react'

export default function Journey() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById('journey-section')
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  const timeline = [
  {
    year: '2025',
    icon: '🚀',
    title: 'Started Coding Journey',
    description:
      'Started learning programming fundamentals with Python and explored problem solving basics.',
    status: 'completed',
  },

  {
    year: '2025',
    icon: '📦',
    title: 'Learning Git & GitHub',
    description:
      'Learned Git, GitHub, repositories, commits, and started maintaining coding projects online.',
    status: 'completed',
  },

  {
    year: '2025 - Present',
    icon: '🧠',
    title: 'DSA & Problem Solving',
    description:
      'Practicing LeetCode problems daily to improve logic building and coding skills.',
    status: 'current',
  },

  {
    year: '2025 - Present',
    icon: '🔐',
    title: 'Cybersecurity Learning',
    description:
      'Learning networking, Linux, web security, and cybersecurity fundamentals with hands-on practice.',
    status: 'current',
  },

  {
    year: '2025 - Present',
    icon: '🎯',
    title: 'Exploring Bug Bounty',
    description:
      'Started learning reconnaissance, web vulnerabilities, and real-world security testing.',
    status: 'current',
  },

  {
    year: 'Future Goal',
    icon: '🏆',
    title: 'OSCP Certification Goal',
    description:
      'Long-term goal to build strong offensive security skills and pursue OSCP certification.',
    status: 'upcoming',
  
  },
]
  

  return (
    <section id="journey" className="min-h-screen flex items-center py-20">
      <div id="journey-section" className="max-w-4xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">My Learning Journey</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex gap-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Timeline Marker */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center relative z-10 ${
                    item.status === 'completed'
                      ? 'bg-neon-green text-dark-bg'
                      : item.status === 'current'
                      ? 'bg-yellow-400 text-dark-bg animate-pulse'
                      : 'bg-gray-600 text-gray-200'
                  }`}
                >
                  <span className="text-xs font-bold">✓</span>
                </div>

                {/* Connecting Line */}
                {index !== timeline.length - 1 && (
                  <div
                    className={`w-1 h-24 mt-2 transition-all duration-700 ${
                      isVisible ? 'h-24' : 'h-0'
                    } ${
                      item.status === 'completed'
                        ? 'bg-gradient-to-b from-neon-green to-neon-green/30'
                        : 'bg-gradient-to-b from-gray-600 to-transparent'
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div
                className={`glass-effect p-6 rounded-xl flex-1 border-l-2 hover-lift ${
                  item.status === 'completed'
                    ? 'border-neon-green bg-neon-green/5'
                    : item.status === 'current'
                    ? 'border-yellow-400 bg-yellow-400/5'
                    : 'border-gray-600 bg-gray-600/5'
                }`}
              >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <span
                        className={`text-sm font-bold ${
                          item.status === 'completed'
                            ? 'text-neon-green'
                            : item.status === 'current'
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                  {item.status === 'current' && (
                    <span className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/50 rounded-full text-xs text-yellow-400 font-bold">
                      Current
                    </span>
                  )}
                  {item.status === 'future' && (
                    <span className="px-3 py-1 bg-purple-400/20 border border-purple-400/50 rounded-full text-xs text-purple-400 font-bold">
                      Upcoming
                    </span>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-2 text-gray-100">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                {/* Progress Indicator */}
                {item.status === 'completed' && (
                  <div className="mt-4 pt-4 border-t border-neon-green/20 flex items-center gap-2 text-neon-green text-xs font-bold">
                    ✓ Completed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Future Vision */}
        <div className="mt-20 pt-12 border-t border-neon-green/20">
          <div className="glass-effect p-8 rounded-xl border border-neon-green/30 bg-neon-green/5">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">🌟</span>
              <span className="text-neon-green">Vision for the Future</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey in cybersecurity is just beginning, and I'm committed to building a strong foundation in offensive security. I envision becoming a respected security researcher and bug bounty hunter who contributes to making the digital world safer.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-neon-green/20">
                <p className="text-neon-green font-bold mb-2">🎓 Short Term (6-12 months)</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Complete OSCP prerequisites</li>
                  <li>• Build bug bounty portfolio</li>
                  <li>• Master web security</li>
                </ul>
              </div>

              <div className="bg-dark-bg/50 p-4 rounded-lg border border-neon-green/20">
                <p className="text-neon-green font-bold mb-2">📈 Medium Term (1-2 years)</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Achieve OSCP certification</li>
                  <li>• Significant bug bounty rewards</li>
                  <li>• Security research publication</li>
                </ul>
              </div>

              <div className="bg-dark-bg/50 p-4 rounded-lg border border-neon-green/20">
                <p className="text-neon-green font-bold mb-2">🚀 Long Term (3+ years)</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Recognized security expert</li>
                  <li>• Mentor aspiring hackers</li>
                  <li>• Contribute to OSS security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
