import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  ShieldCheck,
  Cpu,
  Calendar,
  Activity,
} from 'lucide-react'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts'
import { METRICS, DOMAIN_CHART_DATA, FOCUS_AREAS } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { formatTime } from '../lib/utils'

export const DashboardSection: React.FC = () => {
  const [time, setTime] = useState<{ timeStr: string; dateStr: string; tz: string }>(() =>
    formatTime(new Date())
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="dashboard" className="relative py-20 md:py-28 bg-[#070910]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Live System Telemetry"
          title="Developer Overview"
          subtitle="Real-time telemetry, verified academic metrics, and architectural focus areas."
        />

        {/* Top Control Bar: Live Clock & System Status */}
        <div className="mb-8 p-4 rounded-2xl bg-[#0D1220]/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
          {/* Status */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  Profile Online
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Environment: Client Browser • Verified Records
              </p>
            </div>
          </div>

          {/* Real Local Clock */}
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="text-right">
              <div className="text-sm md:text-base font-mono font-bold text-white tracking-widest">
                {time.timeStr}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {time.dateStr} • {time.tz}
              </div>
            </div>
          </div>
        </div>

        {/* Metric Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#0D1220]/90 to-[#070910] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
                {metric.category === 'experience' && <Briefcase className="w-4 h-4 text-cyan-400" />}
                {metric.category === 'coding' && <Code2 className="w-4 h-4 text-emerald-400" />}
                {metric.category === 'education' && <GraduationCap className="w-4 h-4 text-violet-400" />}
                {metric.category === 'certifications' && <Award className="w-4 h-4 text-amber-400" />}
              </div>

              <div className="text-3xl font-mono font-black text-white group-hover:text-cyan-300 transition-colors">
                {metric.value}
                <span className="text-cyan-400 text-xl font-bold">{metric.suffix}</span>
              </div>

              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas & Competency Radar Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Professional Focus & Education Brief (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0D1220]/80 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Primary Engineering Focus Areas</span>
              </h3>

              <div className="space-y-3">
                {FOCUS_AREAS.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-2xl bg-[#0D1220]/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-800/40 text-violet-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    B.Tech in CSE (AI & ML)
                  </h4>
                  <p className="text-xs text-slate-400">
                    Mohan Babu University • Current CGPA: 8.2 / 10
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Graduation Year: 2027</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Domain Balance Chart (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0D1220]/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-violet-400" />
                  <span>Domain Skill Distribution</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  Radar Visualizer
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Structured overview of software testing, frontend, backend, and database competency balance.
              </p>
            </div>

            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={DOMAIN_CHART_DATA} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                  <PolarGrid stroke="#1e293b" />
                  <PolarAngleAxis
                    dataKey="domain"
                    tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="score"
                    stroke="#00f0ff"
                    fill="#00f0ff"
                    fillOpacity={0.25}
                  />
                  <Tooltip
                    content={({ payload }) => {
                      if (!payload || !payload.length) return null
                      const data = payload[0].payload
                      return (
                        <div className="p-2.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs shadow-xl">
                          <p className="font-semibold text-white">{data.domain}</p>
                          <p className="text-cyan-400 font-mono mt-0.5">Focus: {data.benchmark}</p>
                        </div>
                      )
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
              Evaluated based on completed coursework, internships & projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
