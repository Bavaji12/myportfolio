import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ExternalLink } from 'lucide-react'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  value: string
  actionText?: string
  actionHref?: string
  copyable?: boolean
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  actionText,
  actionHref,
  copyable = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!copyable) return
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="p-5 rounded-2xl bg-[#0D1220]/80 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 flex items-center justify-between gap-4 group"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">{title}</p>
          <p className="text-sm font-medium text-white truncate group-hover:text-cyan-300 transition-colors">
            {value}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 border border-slate-700/60 transition-colors"
            title="Copy to clipboard"
            aria-label={`Copy ${title}`}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        )}

        {actionHref && (
          <a
            href={actionHref}
            target={actionHref.startsWith('mailto:') ? undefined : '_blank'}
            rel={actionHref.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 border border-slate-700/60 transition-colors"
            title={actionText || 'Open link'}
            aria-label={actionText || 'Open link'}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
