import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
  id: 1,
  title: 'AI & ML Workshop',
  issuer: 'IIT Patna + PHN Technology',
  date: '2025',
  description: 'Hands-on workshop on Artificial Intelligence and Machine Learning.',
  icon: '🤖',
  color: 'from-purple-600 to-pink-600',
  link: 'https://www.linkedin.com/posts/rohit-prakash-3b7861358_ai-machinelearning-share-7400924883880235008-01JW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkdjvsB4iMNirBNxysGOEV-_tQGjnJ26sU'
},
{
  id: 2,
  title: 'IoT Workshop',
  issuer: 'IIT Patna + PHN Technology',
  date: '2025',
  description: 'Hands-on IoT workshop using Arduino and sensors.',
  icon: '📡',
  color: 'from-blue-600 to-cyan-600',
  link: 'https://www.linkedin.com/posts/rohit-prakash-3b7861358_iot-arduino-iitpatna-share-7398342182962864128-DrsH/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkdjvsB4iMNirBNxysGOEV-_tQGjnJ26sU'
}
  ]

  return (
    <section id="certificates" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-effect rounded-xl overflow-hidden hover-lift cursor-pointer group relative z-10"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              onClick={()=> window.open(cert.link, "_blank")}
            >
              {/* Certificate Preview */}
              <div className={`h-48 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl">{cert.icon}</span>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>

              {/* Certificate Info */}
              <div className="p-6 border-t border-neon-green/20">
                <h3 className="text-xl font-bold text-neon-green mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-neon-green/10">
                  <span className="text-neon-green font-bold">{cert.date}</span>
                  <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-neon-green hover:text-white transition-colors text-sm font-bold"
>
  View Certificate →
</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications Info */}
        <div className="glass-effect p-8 rounded-xl border border-neon-green/20">
          <h3 className="text-2xl font-bold mb-6">
            <span className="text-neon-green">In Progress</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📚</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-2">OSCP (Offensive Security Certified Professional)</h4>
                <p className="text-gray-400 text-sm">Long-term Goal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🎓</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-2">TryHackMe Certifications</h4>
                <p className="text-gray-400 text-sm">Actively pursuing security learning tracks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="glass-effect-strong rounded-xl max-w-2xl w-full p-8 relative border border-neon-green/30 animate-fade-in">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-neon-green hover:text-white transition-colors"
              >
                <FiX size={28} />
              </button>

              {/* Modal Content */}
              <div className={`h-64 bg-gradient-to-br ${selectedCert.color} rounded-lg mb-6 flex items-center justify-center`}>
                <span className="text-8xl">{selectedCert.icon}</span>
              </div>

              <h2 className="text-3xl font-bold text-neon-green mb-2">{selectedCert.title}</h2>
              <p className="text-gray-400 text-lg mb-4">{selectedCert.issuer}</p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedCert.description}</p>

              <div className="flex justify-between items-center pt-6 border-t border-neon-green/20">
                <span className="text-neon-green font-bold text-lg">{selectedCert.date}</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
