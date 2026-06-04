# 🔐 Rohit Prakash - Cybersecurity Portfolio

A modern, premium, fully responsive personal portfolio website for a cybersecurity enthusiast. Built with React, Tailwind CSS, and Vite with a dark hacker aesthetic and cyberpunk design.

## ✨ Features

### Design & Aesthetics
- **Dark Hacker Aesthetic**: Black background with neon green accents
- **Glassmorphism Effects**: Premium glass-style components
- **Smooth Animations**: Professional transitions and scroll reveal effects
- **Matrix Background**: Subtle animated matrix rain effect
- **Neon Glow Effects**: Glowing text and hover effects
- **Responsive Design**: Fully mobile-optimized

### Sections
1. **Hero Section**: Animated intro with typing effect and CTA buttons
2. **Navigation**: Smooth navigation with mobile menu
3. **About Me**: Personal story with animated timeline
4. **Skills**: Animated skill cards with progress bars
5. **Projects**: Dynamic GitHub repository integration
6. **Certificates**: Premium certificate gallery with modal
7. **GitHub Stats**: Real-time GitHub statistics and metrics
8. **Journey**: Interactive learning timeline
9. **Contact**: Contact form with social links
10. **Footer**: Footer with quick links and social media

### Technical Features
- GitHub API integration for dynamic project loading
- Smooth scroll animations and reveal effects
- Animated scroll progress bar
- Cursor glow effect
- Hacker-style terminal aesthetic
- Performance optimized with Vite
- SEO friendly
- Deploy-ready for GitHub Pages

## 🚀 Tech Stack

- **React 18**: UI Framework
- **Tailwind CSS 3**: Utility-first CSS
- **Vite**: Fast build tool
- **React Icons**: Icon library
- **Axios**: HTTP client
- **GitHub API**: Dynamic project data

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone or download the project**
```bash
cd c:\project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🎨 Customization Guide

### Update Personal Information

**Hero Section** - `src/components/Hero.jsx`:
```javascript
// Update profile name and title
<span className="neon-text">YOUR NAME</span>
<span className="text-neon-green">Your Title</span>

// Modify typing effect roles
const roles = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3',
]
```

**About Section** - `src/components/About.jsx`:
```javascript
// Update about text and achievements
```

**Contact Section** - `src/components/Contact.jsx`:
```javascript
// Update social links and contact info
const contacts = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  // ... more contacts
]
```

### Update GitHub Username

Change in:
- `src/components/Projects.jsx`: `GITHUB_USERNAME`
- `src/components/GitHubStats.jsx`: `GITHUB_USERNAME`

```javascript
const GITHUB_USERNAME = 'your-username'
```

### Modify Color Scheme

**Tailwind Config** - `tailwind.config.js`:
```javascript
colors: {
  'neon-green': '#00ff41',  // Change neon color
  'dark-bg': '#0a0e27',     // Change background
  'dark-secondary': '#1a1f3a', // Change secondary
}
```

**CSS Variables** - `src/index.css`:
Update color values in gradients and shadows

### Add New Sections

1. Create new component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to component rendering
4. Add navigation link

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: < 768px (Tailwind `sm`)
- **Tablet**: 768px - 1024px (Tailwind `md`)
- **Desktop**: > 1024px (Tailwind `lg`)

## 🚢 Deployment

### GitHub Pages Deployment

1. Update `vite.config.js` base URL:
```javascript
base: '/your-repo-name/'
```

2. Deploy:
```bash
npm run deploy
```

### Other Platforms

**Vercel**:
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Drag dist folder to Netlify
```

**Standard Hosting**:
```bash
npm run build
# Upload contents of dist/ folder
```

## 📊 Performance

- Optimized with Vite for fast builds
- Code splitting for faster initial load
- Minified CSS and JavaScript
- Optimized images and animations
- Smooth scroll performance

## 🔗 API Integration

### GitHub API
- Fetches public repositories
- Gets contribution statistics
- Retrieves language statistics
- No authentication required for public data

**Rate Limit**: 60 requests/hour (unauthenticated)

For higher limits, add GitHub token:
```javascript
const headers = {
  'Authorization': `token YOUR_GITHUB_TOKEN`
}
```

## 📝 Frontend Form

The contact form is frontend-only. To make it functional:

1. **Use a backend service** (Firebase, Formspree, etc.):
```javascript
// Example with Formspree
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
}
```

2. **Use third-party services**:
   - Formspree
   - EmailJS
   - SendGrid
   - Firebase

## 🎯 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Journey.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── CursorGlow.jsx
│   │   └── MatrixBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rohit Prakash**
- GitHub: [@rohit15aj](https://github.com/rohit15aj)
- LinkedIn: [rohit-prakash-3b7861358](https://www.linkedin.com/in/rohit-prakash-3b7861358)
- Email: rohitprakash727@gmail.com

## 🙏 Acknowledgments

- React and Tailwind CSS communities
- GitHub API for project integration
- Inspiration from cybersecurity and hacker culture

## 📞 Support

For issues or questions, feel free to reach out via:
- Email: rohitprakash727@gmail.com
- GitHub Issues (if forked)
- LinkedIn: Connect with me directly

---

**"Securing the digital world, one vulnerability at a time."** 🔐
