import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface OrbitRingsProps {
  reducedMotion?: boolean
}

export const OrbitRings: React.FC<OrbitRingsProps> = ({ reducedMotion = false }) => {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (reducedMotion) return

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35
      ring1Ref.current.rotation.y += delta * 0.45
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.28
      ring2Ref.current.rotation.z += delta * 0.32
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.2
      ring3Ref.current.rotation.z -= delta * 0.25
    }
  })

  return (
    <group>
      {/* Outer Cyan Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.8}
          roughness={0.2}
          wireframe
        />
      </mesh>

      {/* Middle Violet Ring */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.6}
          roughness={0.3}
          wireframe
        />
      </mesh>

      {/* Inner Electric Blue Ring */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={1.4}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}
