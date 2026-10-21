import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(date: Date): { timeStr: string; dateStr: string; tz: string } {
  const timeStr = date.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const dateStr = date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  return { timeStr, dateStr, tz }
}
