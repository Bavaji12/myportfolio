import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy, CheckCircle } from 'lucide-react'
import { EDUCATION_LIST, CERTIFICATIONS_LIST, ACHIEVEMENTS_LIST } from '../data/experience'
import { SectionHeading } from '../components/SectionHeading'

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 md:py-28 bg-[#070910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Credentials"
          title="Education, Certifications & Achievements"
          subtitle="Formally verified academic milestones, industry credentials, and competitive programming achievements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Fellowships (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-base font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Pathway</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0D1220]/80 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-800/40">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white mt-1">
                    {edu.degree} — {edu.field}
                  </h4>
                  <p className="text-sm font-semibold text-slate-300 mt-0.5 mb-4">
                    {edu.institution} {edu.location ? `• ${edu.location}` : ''}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-400">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Achievements (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-base font-mono uppercase tracking-wider text-violet-400 flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-violet-400" />
                <span>Verified Certifications</span>
              </h3>

              <div className="space-y-4">
                {CERTIFICATIONS_LIST.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#0D1220]/80 border border-slate-800 hover:border-violet-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-violet-400 font-semibold">
                        {cert.issuer} • {cert.year}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-950/50 border border-violet-800/40 text-violet-300">
                        {cert.badgeText}
                      </span>
                    </div>

                    <h4 className="text-sm md:text-base font-bold text-white">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-base font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>Achievements & Community</span>
              </h3>

              <div className="space-y-4">
                {ACHIEVEMENTS_LIST.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#0D1220]/80 border border-slate-800 hover:border-amber-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-amber-400 font-semibold">
                        {ach.organization}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/40 border border-amber-800/40 text-amber-300">
                        {ach.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white">
                      {ach.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                      {ach.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
