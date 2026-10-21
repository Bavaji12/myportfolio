import React from 'react'
import { Float, Html } from '@react-three/drei'

interface FloatingTechCardsProps {
  reducedMotion?: boolean
}

export const FloatingTechCards: React.FC<FloatingTechCardsProps> = ({ reducedMotion = false }) => {
  if (reducedMotion) {
    return null
  }

  return (
    <group>
      {/* Top Left Badge - QA Testing */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8} position={[-2.3, 1.8, 0.5]}>
        <Html center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-xl bg-[#0D1220]/80 backdrop-blur-md border border-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] text-[#00f0ff] font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span>QA & Testing</span>
          </div>
        </Html>
      </Float>

      {/* Top Right Badge - Full-Stack */}
      <Float speed={2.4} rotationIntensity={0.3} floatIntensity={0.7} position={[2.4, 1.4, -0.4]}>
        <Html center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-xl bg-[#0D1220]/80 backdrop-blur-md border border-[#a855f7]/40 shadow-[0_0_15px_rgba(168,85,247,0.25)] text-[#c084fc] font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            <span>Next.js • Express</span>
          </div>
        </Html>
      </Float>

      {/* Bottom Left Badge - AI & ML */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.9} position={[-2.1, -1.8, 0.2]}>
        <Html center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-xl bg-[#0D1220]/80 backdrop-blur-md border border-[#3b82f6]/40 shadow-[0_0_15px_rgba(59,130,246,0.25)] text-[#60a5fa] font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span>AI & ML (Python)</span>
          </div>
        </Html>
      </Float>

      {/* Bottom Right Badge - 100+ Solved */}
      <Float speed={2.2} rotationIntensity={0.25} floatIntensity={0.75} position={[2.2, -1.6, 0.4]}>
        <Html center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-xl bg-[#0D1220]/80 backdrop-blur-md border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)] text-emerald-400 font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>100+ Problems</span>
          </div>
        </Html>
      </Float>
    </group>
  )
}
