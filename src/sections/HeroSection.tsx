import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileDown, Sparkles, Send, Eye } from 'lucide-react'
import { PERSONAL_INFO, HERO_ROLES } from '../lib/constants'
import { Button } from '../components/Button'
import { ProfileScene } from '../three/ProfileScene'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}.
              </span>
            </h1>

            {/* Dynamic Animated Role Switcher */}
            <div className="h-10 sm:h-12 mt-2 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold text-cyan-300 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
                  <span>{HERO_ROLES[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Professional Introduction */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                enableMagnetic
                icon={<Eye className="w-4 h-4" />}
              >
                Explore Projects
              </Button>

              <Button
                href="/resume.pdf"
                download="Shaik_Bavaji_Resume.pdf"
                variant="glow"
                size="md"
                enableMagnetic
                icon={<FileDown className="w-4 h-4" />}
              >
                Download Resume
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="md"
                enableMagnetic
                icon={<Send className="w-4 h-4" />}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Find Me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-sky-400 transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400 border-l border-slate-800 pl-6">
                <div>
                  <span className="text-cyan-400 font-bold">2</span> Internships
                </div>
                <div>•</div>
                <div>
                  <span className="text-cyan-400 font-bold">100+</span> Solved
                </div>
                <div>•</div>
                <div>
                  <span className="text-cyan-400 font-bold">8.2</span> CGPA
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Profile Hologram Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <ProfileScene />
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="mt-16 md:mt-24 flex flex-col items-center justify-center">
          <a
            href="#dashboard"
            className="flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll to dashboard overview"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase mb-2">
              Explore Dashboard
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 group-hover:border-cyan-400/80 flex items-start justify-center p-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
