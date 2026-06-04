import { useState, useEffect } from 'react'
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const GITHUB_USERNAME = 'rohit15aj'

  // Featured projects with descriptions
  const featuredProjects = {
    'otp-notification-agent': {
  title: 'OTP Notification Agent',
  description: 'Automation-based OTP notification project built with Python.',
  tags: ['Python', 'Automation'],
  link: 'https://github.com/rohit15aj/otp-notification-agent'
},

'resume-ai': {
  title: 'Resume AI',
  description: 'AI-powered resume analyzer with ATS analysis and career insights.',
  tags: ['JavaScript', 'AI'],
  link: 'https://github.com/rohit15aj/resume-ai'
},

'leetcode-solution': {
  title: 'LeetCode Solutions',
  description: 'My daily LeetCode problem-solving journey using Python.',
  tags: ['Python', 'DSA'],
  link: 'https://github.com/rohit15aj/leetcode-solution'
},

'my-website': {
  title: 'My Website',
  description: 'Cybersecurity, AI and ML guidance platform for students.',
  tags: ['HTML', 'Web'],
  link: 'https://github.com/rohit15aj/my-website'
},

'maabhawaani-logistics': {
  title: 'Maabhawaani Logistics',
  description: 'Premium logistics company website project.',
  tags: ['JavaScript', 'Frontend'],
  link: 'https://github.com/rohit15aj/maabhawaani-logistics'
}
  }

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`)
        if (!response.ok) throw new Error('Failed to fetch repos')
        const data = await response.json()
        setRepos(data)
        setError(null)
      } catch (err) {
        setError('Failed to load repositories')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getProjectDetails = (repoName) => {
    return featuredProjects[repoName] || null
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="text-neon-green text-xl animate-pulse">Loading projects...</div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 p-8">{error}</div>
        ) : (
          <>
            {/* Featured Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {repos.slice(0, 6).map((repo, index) => {
                const details = getProjectDetails(repo.name)
                return (

                
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect p-8 rounded-xl hover-lift border border-neon-green/20" group transition-all duration-300 opacity-0 animate-fade-in
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neon-green group-hover:text-white transition-colors mb-2">
                          {details?.title || repo.name}
                        </h3>
                        {details?.tags && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {details.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-neon-green/10 border border-neon-green/30 rounded text-neon-green"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <FiGithub className="text-neon-green group-hover:text-white transition-colors" size={24} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {details?.description || repo.description || 'No description available'}
                    </p>

                    {/* Footer Stats */}
                    <div className="flex justify-between items-center pt-4 border-t border-neon-green/10">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <FiStar size={16} className="text-yellow-400" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <FiGitBranch size={16} />
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                      </div>
                      <FiExternalLink className="text-neon-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* View All Projects Button */}
            <div className="text-center mt-12">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiGithub />
                View All Projects on GitHub
              </a>
            </div>
          </>
        )}

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="glass-effect p-8 rounded-xl text-center border border-neon-green/20 hover-lift">
            <div className="text-4xl font-bold text-neon-green mb-2">{repos.length}+</div>
            <p className="text-gray-400">Total Repositories</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center border border-neon-green/20 hover-lift">
            <div className="text-4xl font-bold text-neon-green mb-2">
              {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </div>
            <p className="text-gray-400">Total Stars</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center border border-neon-green/20 hover-lift">
            <div className="text-4xl font-bold text-neon-green mb-2">5+</div>
            <p className="text-gray-400">Featured Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}
