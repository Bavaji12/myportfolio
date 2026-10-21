import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Terminal, Wrench, Shield, Layers } from 'lucide-react'
import type { SkillItem } from '../data/skills'

interface SkillCardProps {
  skill: SkillItem
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Testing':
        return <Shield className="w-4 h-4 text-cyan-400" />
      case 'Programming':
        return <Code className="w-4 h-4 text-violet-400" />
      case 'Web Development':
        return <Layers className="w-4 h-4 text-blue-400" />
      case 'Database & API':
        return <Database className="w-4 h-4 text-emerald-400" />
      case 'Tools':
        return <Wrench className="w-4 h-4 text-amber-400" />
      default:
        return <Terminal className="w-4 h-4 text-slate-400" />
    }
  }

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative p-4 rounded-xl bg-[#0D1220]/70 border border-slate-800/80 hover:border-cyan-500/35 transition-all duration-200 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
            {getCategoryIcon(skill.category)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
              {skill.name}
            </h4>
            <span className="text-[10px] font-mono text-slate-400">{skill.category}</span>
          </div>
        </div>

        {skill.badge && (
          <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
            {skill.badge}
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
        {skill.description}
      </p>
    </motion.div>
  )
}
