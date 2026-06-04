import { useEffect } from 'react'

export default function MatrixBackground() {
  useEffect(() => {
    const container = document.querySelector('.matrix-bg')
    if (!container) return

    const chars = 'ｦｧｨｩｪｫｬｭｮｯﾀﾁﾂﾃﾄﾅﾆﾇﾈﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾙﾜﾝ0123456789'

    // Create matrix characters
    const createMatrixChar = () => {
      const char = document.createElement('div')
      char.className = 'matrix-char'
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.left = Math.random() * 100 + '%'
      char.style.top = Math.random() * 100 + '%'
      char.style.fontSize = Math.random() * 10 + 8 + 'px'
      char.style.animationDuration = Math.random() * 5 + 5 + 's'
      char.style.animationDelay = Math.random() * 2 + 's'
      return char
    }

    // Add matrix characters periodically
    const interval = setInterval(() => {
      if (container.children.length < 30) {
        container.appendChild(createMatrixChar())
      }
    }, 500)

    // Cleanup old characters
    const cleanup = setInterval(() => {
      const chars = container.querySelectorAll('.matrix-char')
      chars.forEach((char) => {
        if (char.style.opacity === '0') {
          char.remove()
        }
      })
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [])

  return <div className="matrix-bg" />
}
