import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react'
import { EXPERIENCES } from '../data/experience'
import { SectionHeading } from '../components/SectionHeading'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 bg-[#0D1220]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Internship Experience"
          subtitle="Real-world engineering contributions focusing on full-stack development, workflow validation, and issue remediation."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Spine */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070910] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center z-10 shrink-0">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-left'
                    }`}
                  >
                    <div className="p-6 md:p-8 rounded-2xl bg-[#0D1220]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
                      {/* Badge / Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-800/40">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Company & Role */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-semibold text-violet-400 mt-0.5 mb-4">
                        {exp.role}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Applied */}
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
