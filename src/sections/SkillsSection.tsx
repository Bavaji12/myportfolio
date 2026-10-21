import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS, SKILL_CATEGORIES } from '../data/skills'
import { SkillCard } from '../components/SkillCard'
import { SectionHeading } from '../components/SectionHeading'

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory =
      selectedCategory === 'All' || skill.category === selectedCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#0D1220]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Specialized testing methodologies, full-stack frameworks, programming languages, and engineering concepts."
        />

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Scrollable Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0D1220] border border-slate-800 overflow-x-auto max-w-full">
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill or tool..."
              className="w-full px-4 py-2 rounded-xl bg-[#0D1220] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-sm text-slate-500 font-mono">
            No skills match "{searchQuery}" in category "{selectedCategory}"
          </div>
        )}
      </div>
    </section>
  )
}
