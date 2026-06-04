import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: 'https://github.com/rohit15aj',
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/rohit-prakash-3b7861358',
      label: 'LinkedIn',
    },
    {
      icon: <FiMail size={20} />,
      href: 'mailto:rohitprakash727@gmail.com',
      label: 'Email',
    },
    {
      icon: <FiInstagram size={20} />,
      href: 'https://instagram.com/roohv_15_aj',
      label: 'Instagram',
    },
  ]

  return (
    <footer className="bg-dark-bg border-t border-neon-green/20 glass-effect-strong">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="neon-text">ROHIT</span>
              <span className="text-neon-green ml-1">PRAKASH</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cybersecurity enthusiast passionate about ethical hacking and bug bounty hunting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-neon-green mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-neon-green mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  TryHackMe
                </a>
              </li>
              <li>
                <a href="https://www.hackthebox.eu" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  HackTheBox
                </a>
              </li>
              <li>
                <a href="https://owasp.org" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  OWASP
                </a>
              </li>
              <li>
                <a href="https://portswigger.net" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  PortSwigger
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-neon-green mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-green hover:text-white transition-colors hover-glow"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-green/20 py-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Rohit Prakash. All rights reserved. Built with React & Tailwind CSS.
            </p>

            {/* Tech Stack */}
            <p className="text-gray-500 text-xs text-center">
  <span className="text-neon-green font-bold">
    Built & Secured by Rohit Prakash | Cybersecurity Portfolio
  </span>
</p>            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-neon-green hover:text-white transition-colors text-sm font-bold"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="text-center pt-6 border-t border-neon-green/10">
          <p className="text-gray-500 text-xs italic">
            "Securing the digital world, one vulnerability at a time."
          </p>
        </div>
      </div>
    </footer>
  )
}
