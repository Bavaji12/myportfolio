import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Bug,
  Search,
  CheckCircle,
  Database,
  Layers,
  Code,
  FileCheck2,
  GitBranch,
} from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const QA_PILLARS = [
  {
    title: 'Manual & Functional Testing',
    desc: 'Analyzing user journeys, validating business logic, and executing test suites systematically.',
    icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: 'UI & Usability Verification',
    desc: 'Testing layout adaptability, responsive breakpoints, cross-browser rendering, and interactive feedback.',
    icon: <Layers className="w-5 h-5 text-blue-400" />,
  },
  {
    title: 'API Testing & Assertion',
    desc: 'Validating payload formats, HTTP status codes, edge-case headers, and token security using Postman.',
    icon: <Search className="w-5 h-5 text-violet-400" />,
  },
  {
    title: 'Bug Reproduction & Root Cause Analysis',
    desc: 'Documenting deterministic reproduction sequences, isolating network vs state errors, and verifying regression fixes.',
    icon: <Bug className="w-5 h-5 text-rose-400" />,
  },
  {
    title: 'Database Validation & ACID Integrity',
    desc: 'Inspecting relational schemas, foreign key constraints, migration consistency, and transaction rollbacks.',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: 'Full-Stack Development Synergy',
    desc: 'Writing code with testing in mind—leveraging TypeScript strict types, component isolation, and modular REST services.',
    icon: <Code className="w-5 h-5 text-amber-400" />,
  },
]

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#070910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Philosophy & Approach"
          title="Engineering Quality Through Code"
          subtitle="Combining an analytical QA mindset with modern full-stack development to build robust, failure-resistant applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Mindset (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#0D1220]/80 border border-slate-800 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
                <span>The QA Mindset in Software Development</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  As an AI & ML student at Mohan Babu University with hands-on full-stack internship experience, I view software quality not as an afterthought, but as an integral pillar of the engineering lifecycle.
                </p>

                <p>
                  My experience spanning Laravel, Livewire, React, Next.js, and Express taught me that subtle defects often originate in under-specified edge cases, unexpected user inputs, or database constraint omissions.
                </p>

                <p>
                  I specialize in breaking complex requirements down into clear test scenarios, tracing network payloads in browser dev tools, designing reproducible defect logs, and verifying fixes with rigorous regression checks.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Test Case Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Workflow Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bug className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Edge-Case Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Database Validation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: QA Capabilities Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QA_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-[#0D1220]/70 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
