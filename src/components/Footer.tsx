import React from 'react'
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react'
import { PERSONAL_INFO, NAV_LINKS } from '../lib/constants'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#05070D] pt-12 pb-8 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-cyan-400 font-bold text-xl">{PERSONAL_INFO.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/50 border border-cyan-800/40 text-cyan-300">
                QA & SDE
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI & ML engineering student focused on software testing, rigorous workflow validation, and resilient full-stack web applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for 2026/2027 Internships</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {NAV_LINKS.slice(0, 5).map((l) => (
                <li key={l.id}>
                  <a href={l.href} className="hover:text-cyan-400 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all ml-auto cursor-pointer"
                aria-label="Back to top"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] font-mono text-slate-500 pt-2">
              Tirupati, Andhra Pradesh, India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-1.5 font-mono">
            <span>© {new Date().getFullYear()} Shaik Bavaji. Built with React, TypeScript & Three.js</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Zero Fabricated Metrics • Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
