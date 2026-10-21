import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ShieldCheck, CheckCircle2, Layers, X, Sparkles } from 'lucide-react'
import type { Project } from '../data/projects'
import { Button } from './Button'
import { GithubIcon } from './SocialIcons'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotX = ((y - centerY) / centerY) * -5
    const rotY = ((x - centerX) / centerX) * 5
    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative group rounded-2xl bg-gradient-to-b from-[#0D1220]/90 to-[#070910]/95 border border-slate-800 hover:border-cyan-500/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
      >
        {/* Glow ambient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div>
          {/* Category & Status Badges */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
              {project.category}
            </span>
            <span
              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                project.status === 'Production Live'
                  ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40'
                  : 'text-amber-400 bg-amber-950/40 border-amber-800/40'
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-500/80 mt-1 mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Engineering & QA Highlights */}
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>QA & Validation Focus</span>
            </h4>
            <div className="space-y-1.5">
              {project.qaFocus.slice(0, 2).map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="outline"
                size="sm"
                icon={<GithubIcon className="w-3.5 h-3.5" />}
              >
                Source Code
              </Button>
            )}
          </div>

          <Button
            onClick={() => setDetailsOpen(true)}
            variant="ghost"
            size="sm"
            icon={<Layers className="w-3.5 h-3.5 text-cyan-400" />}
          >
            QA Architecture
          </Button>
        </div>
      </div>

      {/* Details Dialog */}
      <AnimatePresence>
        {detailsOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-[#0D1220] border border-cyan-500/30 rounded-2xl p-6 md:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">{project.subtitle}</p>
                </div>
                <button
                  onClick={() => setDetailsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-sm text-slate-300">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    System Architecture & Engineering
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                    Quality Assurance & Test Scope
                  </h4>
                  <ul className="space-y-2">
                    {project.qaFocus.map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      variant="primary"
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Open Live Site
                    </Button>
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        variant="outline"
                        size="sm"
                        icon={<GithubIcon className="w-3.5 h-3.5" />}
                      >
                        Inspect Code
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
