import React, { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'AI & ML'>('All')

  const filteredProjects = PROJECTS.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#070910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Featured Projects"
          subtitle="Full-stack platforms and AI implementations developed with thorough QA validation and reliable architecture."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(['All', 'Full-Stack', 'AI & ML'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-[#0D1220] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
