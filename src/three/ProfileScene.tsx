import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitRings } from './OrbitRings'
import { ParticleField } from './ParticleField'
import { useReducedMotion } from '../hooks/useReducedMotion'

export const ProfileScene: React.FC = () => {
  const prefersReduced = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    setMousePos({ x, y })
  }

  const handlePointerLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  // Calculate 3D tilt angles based on cursor position
  const tiltX = prefersReduced ? 0 : -mousePos.y * 12
  const tiltY = prefersReduced ? 0 : mousePos.x * 12

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center select-none"
    >
      {/* 1. Background Volumetric Ambient Lighting */}
      <div className="absolute inset-0 bg-radial from-cyan-500/25 via-violet-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* 2. Real 3D WebGL Canvas Layer (Rotating Orbit Rings & Particle Field) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[10, 10, 10]} intensity={1.8} color="#00f0ff" />
          <pointLight position={[-10, -10, -10]} intensity={1.4} color="#a855f7" />
          <spotLight position={[0, 8, 4]} angle={0.6} penumbra={0.8} intensity={2.2} color="#3b82f6" />

          <Suspense fallback={null}>
            <ParticleField count={isMobile ? 60 : 150} reducedMotion={prefersReduced} />
            <OrbitRings reducedMotion={prefersReduced} />
          </Suspense>
        </Canvas>
      </div>

      {/* 3. Main Center Hologram & Interactive 3D Cutout Card */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative z-10 w-[360px] h-[460px] sm:w-[420px] sm:h-[520px] flex items-center justify-center group"
      >
        {/* Rotating Background Cybernetic HUD Dial */}
        <div
          className={`absolute w-72 h-72 sm:w-96 sm:h-96 pointer-events-none flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 ${
            prefersReduced ? '' : 'animate-spin-slow'
          }`}
        >
          <img
            src="/images/rotation.svg"
            alt="Rotating Tech Dial"
            className="w-full h-full object-contain opacity-85 filter drop-shadow-[0_0_35px_rgba(0,240,255,0.6)]"
          />
        </div>

        {/* Secondary Counter-Rotating Dotted Track */}
        <div
          className={`absolute w-64 h-64 sm:w-80 sm:h-80 pointer-events-none flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 ${
            prefersReduced ? '' : 'animate-spin-reverse'
          }`}
        >
          <div className="w-full h-full rounded-full border border-violet-500/40 border-dashed filter drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
        </div>

        {/* Ambient Halo Behind Cutout */}
        <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-[#00f0ff]/30 via-[#3b82f6]/20 to-[#a855f7]/30 blur-2xl opacity-90 pointer-events-none z-0" />

        {/* Shaik Bavaji Transparent Cutout Portrait */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end">
          <img
            src="/images/profile-transparent.png"
            alt="Shaik Bavaji"
            onError={(e) => {
              // Fallback to rotation.png if needed
              const target = e.currentTarget
              if (!target.src.includes('rotation.png')) {
                target.src = '/images/rotation.png'
              }
            }}
            className="max-h-[420px] sm:max-h-[490px] w-auto object-contain filter drop-shadow-[0_15px_40px_rgba(0,240,255,0.35)] transition-transform duration-500 group-hover:scale-105"
          />

          {/* Seamless bottom fade blending into page background */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#070910] via-[#070910]/70 to-transparent pointer-events-none" />
        </div>

        {/* 4. Floating Orbiting Tech Badges (Now guaranteed to render with zero Drei root crashes!) */}
        {/* Top-Left Badge: QA & Testing */}
        <div className="absolute top-4 -left-4 sm:-left-8 z-20 animate-cyber-float">
          <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1220]/90 backdrop-blur-md border border-[#00f0ff]/50 shadow-[0_0_20px_rgba(0,240,255,0.3)] text-[#00f0ff] font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span>QA & Testing</span>
          </div>
        </div>

        {/* Top-Right Badge: Next.js • Express */}
        <div
          className="absolute top-8 -right-4 sm:-right-8 z-20 animate-cyber-float"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1220]/90 backdrop-blur-md border border-[#a855f7]/50 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-[#c084fc] font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
            <span>Next.js • Express</span>
          </div>
        </div>

        {/* Bottom-Left Badge: AI & ML */}
        <div
          className="absolute bottom-20 -left-6 sm:-left-10 z-20 animate-cyber-float"
          style={{ animationDelay: '3s' }}
        >
          <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1220]/90 backdrop-blur-md border border-[#3b82f6]/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-[#60a5fa] font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <span>AI & ML (Python)</span>
          </div>
        </div>

        {/* Bottom-Right Badge: 100+ Solved */}
        <div
          className="absolute bottom-16 -right-6 sm:-right-10 z-20 animate-cyber-float"
          style={{ animationDelay: '4.5s' }}
        >
          <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1220]/90 backdrop-blur-md border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] text-emerald-400 font-mono text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>100+ Problems</span>
          </div>
        </div>
      </div>
    </div>
  )
}
