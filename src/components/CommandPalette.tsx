import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Compass, FileDown, Copy, Check, ExternalLink, Terminal, ShieldCheck, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../lib/constants'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface ActionItem {
  id: string
  title: string
  category: 'Navigation' | 'Actions' | 'Social'
  icon: React.ReactNode
  shortcut?: string
  action: () => void
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      onClose()
    }, 1200)
  }

  const navigateTo = (hash: string) => {
    onClose()
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const actions: ActionItem[] = [
    // Navigation
    ...NAV_LINKS.map((link) => ({
      id: `nav-${link.id}`,
      title: `Jump to ${link.name}`,
      category: 'Navigation' as const,
      icon: <Compass className="w-4 h-4 text-[#00f0ff]" />,
      action: () => navigateTo(link.href),
    })),
    // Actions
    {
      id: 'action-resume',
      title: 'Download Resume (PDF)',
      category: 'Actions' as const,
      icon: <FileDown className="w-4 h-4 text-emerald-400" />,
      shortcut: 'PDF',
      action: () => {
        window.open('/resume.pdf', '_blank')
        onClose()
      },
    },
    {
      id: 'action-copy-email',
      title: copied ? 'Copied bavaji875@gmail.com!' : 'Copy Email Address',
      category: 'Actions' as const,
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />,
      shortcut: 'Email',
      action: copyEmail,
    },
    {
      id: 'action-quality-lab',
      title: 'Run QA Simulation in Quality Lab',
      category: 'Actions' as const,
      icon: <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />,
      action: () => navigateTo('#quality-lab'),
    },
    // Social
    {
      id: 'social-github',
      title: 'Open GitHub Profile (@Bavaji12)',
      category: 'Social' as const,
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social' as const,
      icon: <ExternalLink className="w-4 h-4 text-sky-400" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
  ]

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // Open handled externally or trigger here
        }
      }

      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filtered, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-start justify-center pt-20 sm:pt-28 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#0D1220]/95 border border-[#00f0ff]/30 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
          >
            {/* Search Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800/80">
              <Search className="w-5 h-5 text-[#00f0ff] mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, section, or action..."
                className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 ml-2"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500">
                  No matching commands found for "{query}"
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#00f0ff]/15 text-white border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                          : 'text-slate-300 hover:bg-slate-800/40 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50 shrink-0">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/50 border border-slate-700/40">
                        {item.shortcut || item.category}
                      </span>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer with keyboard navigation cues */}
            <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>Command Mode</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
