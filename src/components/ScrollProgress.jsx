// Scroll progress bar component at the top of the page
export default function ScrollProgress({ progress }) {
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-green via-green-400 to-neon-green z-50"
      style={{
        width: `${progress}%`,
        boxShadow: '0 0 10px rgba(0, 255, 65, 0.6)',
      }}
    />
  )
}
