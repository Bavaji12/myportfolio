import React, { useEffect, useState } from 'react'

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100
        setScrollProgress(scrollPercent)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#a855f7] shadow-[0_0_10px_#00f0ff] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
