import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      'service_xaytiyc',
      'template_dawqxz4',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'xK4OklXWh9i92Iwmm'
    )
    .then(() => {
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Message failed to send');
    });
};

  const contacts = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'rohitprakash727@gmail.com',
      href: 'mailto:rohitprakash727@gmail.com',
      color: 'text-red-400',
    },
    {
      icon: <FiLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'rohit-prakash-3b7861358',
      href: 'https://www.linkedin.com/in/rohit-prakash-3b7861358',
      color: 'text-blue-400',
    },
    {
      icon: <FiGithub size={24} />,
      label: 'GitHub',
      value: 'rohit15aj',
      href: 'https://github.com/rohit15aj',
      color: 'text-neon-green',
    },
    {
      icon: <FiInstagram size={24} />,
      label: 'Instagram',
      value: 'roohv_15_aj',
      href: 'https://instagram.com/roohv_15_aj',
      color: 'text-pink-400',
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow cybersecurity enthusiasts. Feel free to reach out!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-6 rounded-xl hover-lift group border border-neon-green/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl ${contact.color}`}>{contact.icon}</div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-gray-100 font-bold group-hover:text-neon-green transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <span className="text-neon-green group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="glass-effect p-8 rounded-xl border border-neon-green/20 mt-8">
              <h3 className="text-xl font-bold text-neon-green mb-4">Response Time</h3>
              <p className="text-gray-300">
                I typically respond to messages within <span className="text-neon-green font-bold">24-48 hours</span>. For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-xl border border-neon-green/20">
            <h3 className="text-2xl font-bold text-neon-green mb-6">Send Me a Message</h3>

            {submitted ? (
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <h4 className="text-2xl font-bold text-neon-green mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-bold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg focus:border-neon-green focus:outline-none text-white transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-bold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg focus:border-neon-green focus:outline-none text-white transition-colors"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-bold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Message subject"
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg focus:border-neon-green focus:outline-none text-white transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-bold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg focus:border-neon-green focus:outline-none text-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-bold text-lg hover:shadow-neon-strong transition-all"
                >
                  Send Message
                </button>

                {/* Note */}
                <p className="text-xs text-gray-500 text-center">
                  This is a frontend form demonstration. For production, connect to a backend service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
