import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { CommandPalette } from './components/CommandPalette'
import { HeroSection } from './sections/HeroSection'
import { DashboardSection } from './sections/DashboardSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { QualityLabSection } from './sections/QualityLabSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { EducationSection } from './sections/EducationSection'
import { ContactSection } from './sections/ContactSection'

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#070910] text-[#f8fafc] selection:bg-cyan-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 cyber-grid opacity-25 pointer-events-none z-0" />

      {/* Ambient Gradient Spheres */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/8 blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/8 blur-[160px] pointer-events-none z-0" />

      {/* Top Scroll Reading Progress */}
      <ScrollProgress />

      {/* Main Sticky Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Quick Search & Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Page Content */}
      <main className="relative z-10">
        <HeroSection />
        <DashboardSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <QualityLabSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
