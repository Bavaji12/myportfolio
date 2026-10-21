import React, { useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { useReducedMotion } from '../hooks/useReducedMotion'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  enableMagnetic?: boolean
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  enableMagnetic = false,
  className,
  disabled,
  onClick,
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null)
  const prefersReduced = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableMagnetic || prefersReduced || disabled || !buttonRef.current) return
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * 0.25
    const y = (e.clientY - (top + height / 2)) * 0.25
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98]',
    glow:
      'bg-gradient-to-r from-[#00f0ff]/20 via-[#a855f7]/20 to-[#3b82f6]/20 text-[#00f0ff] border border-[#00f0ff]/40 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-[0.98]',
    secondary:
      'bg-slate-800/90 text-slate-100 border border-slate-700/80 hover:bg-slate-700 hover:border-slate-600 active:scale-[0.98]',
    outline:
      'bg-transparent text-slate-200 border border-slate-700 hover:border-cyan-400/60 hover:text-cyan-400 active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-[0.98]',
  }

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  )

  const commonProps = {
    className: cn(baseStyles, sizeStyles[size], variantStyles[variant], className),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: position.x === 0 && position.y === 0 ? 'transform 0.3s ease-out' : 'none',
    },
  }

  if (href) {
    return (
      <a
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
        {...commonProps}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      disabled={disabled}
      onClick={onClick}
      {...commonProps}
      {...props}
    >
      {content}
    </button>
  )
}
