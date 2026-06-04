import { useState, useEffect } from 'react'
import { FiActivity, FiCode, FiGitBranch, FiBookmark } from 'react-icons/fi'

export default function GitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const GITHUB_USERNAME = 'rohit15aj'

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)

        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (!userRes.ok) throw new Error('Failed to fetch user data')
        const userData = await userRes.json()

        // Fetch repos for language stats
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        )
        if (!reposRes.ok) throw new Error('Failed to fetch repos')
        const reposData = await reposRes.json()

        // Calculate language stats
        const languages = {}
        for (const repo of reposData) {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1
          }
        }

        // Sort and get top 5 languages
        const topLanguages = Object.entries(languages)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([lang]) => lang)

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0),
          totalForks: reposData.reduce((acc, repo) => acc + repo.forks_count, 0),
          topLanguages,
          contributions: userData.public_repos * 50, // Estimate (customize as needed)
        })
        setError(null)
      } catch (err) {
        setError('Failed to load GitHub stats')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <section id="github-stats" className="min-h-screen flex items-center py-20 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center text-neon-green text-xl animate-pulse">Loading stats...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="github-stats" className="min-h-screen flex items-center py-20 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center text-red-400">{error}</div>
        </div>
      </section>
    )
  }

  return (
    <section id="github-stats" className="min-h-screen flex items-center py-20 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">GitHub Statistics</span>
          </h2>
          <div className="w-20 h-1 bg-neon-green rounded-full" />
        </div>
        {/* GitHub Contribution Graph */}
<div className="glass-effect p-6 rounded-xl mb-10 overflow-hidden">
  <h3 className="text-2xl font-bold text-neon-green mb-4">
    GitHub Contributions
  </h3>

  <img
    src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
    alt="GitHub Contribution Graph"
    className="w-full rounded-lg"
  />
</div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {/* Repos */}
          <div className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer opacity-0 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <FiCode className="text-2xl text-neon-green" />
              <div className="w-1 h-8 bg-neon-green/30" />
            </div>
            <div className="text-3xl font-bold text-neon-green mb-1">{stats?.publicRepos || 0}</div>
            <p className="text-gray-400 text-sm">Public Repos</p>
          </div>

          {/* Stars */}
          <div
            className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer opacity-0 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">⭐</span>
              <div className="w-1 h-8 bg-yellow-400/30" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">{stats?.totalStars || 0}</div>
            <p className="text-gray-400 text-sm">Total Stars</p>
          </div>

          {/* Followers */}
          <div
            className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">👥</span>
              <div className="w-1 h-8 bg-blue-400/30" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-1">{stats?.followers || 0}</div>
            <p className="text-gray-400 text-sm">Followers</p>
          </div>

          {/* Forks */}
          <div
            className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer opacity-0 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center justify-between mb-3">
              <FiGitBranch className="text-2xl text-purple-400" />
              <div className="w-1 h-8 bg-purple-400/30" />
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-1">{stats?.totalForks || 0}</div>
            <p className="text-gray-400 text-sm">Total Forks</p>
          </div>
        </div>

        {/* Top Languages */}
        <div className="glass-effect p-8 rounded-xl border border-neon-green/20 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">💻</span>
            <span className="text-neon-green">Top Languages</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats?.topLanguages.map((lang, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-lg text-center hover-lift opacity-0 animate-fade-in"
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                <div className="text-3xl mb-2">
                  {lang === 'Python' && '🐍'}
                  {lang === 'JavaScript' && '📜'}
                  {lang === 'TypeScript' && '📘'}
                  {lang === 'HTML' && '🏷️'}
                  {lang === 'CSS' && '🎨'}
                  {lang === 'Java' && '☕'}
                  {lang === 'C++' && '⚙️'}
                  {lang === 'Go' && '🚀'}
                  {!['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'C++', 'Go'].includes(lang) && '💾'}
                </div>
                <p className="text-neon-green font-bold">{lang}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Activity Summary */}
        <div className="grid md:grid-cols-3 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="glass-effect p-8 rounded-xl border border-neon-green/20 text-center hover-lift">
            <FiActivity className="text-4xl text-neon-green mx-auto mb-4" />
            <h4 className="text-xl font-bold text-neon-green mb-2">Active Contributor</h4>
            <p className="text-gray-400 text-sm">Regularly contributing to projects and learning repositories</p>
          </div>

          <div className="glass-effect p-8 rounded-xl border border-neon-green/20 text-center hover-lift">
            <FiCode className="text-4xl text-neon-green mx-auto mb-4" />
            <h4 className="text-xl font-bold text-neon-green mb-2">Open Source</h4>
            <p className="text-gray-400 text-sm">Maintaining personal projects and security learning repositories</p>
          </div>

          <div className="glass-effect p-8 rounded-xl border border-neon-green/20 text-center hover-lift">
            <FiBookmark className="text-4xl text-neon-green mx-auto mb-4" />
            <h4 className="text-xl font-bold text-neon-green mb-2">Knowledge Sharing</h4>
            <p className="text-gray-400 text-sm">Documenting journey and sharing cybersecurity learnings</p>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
