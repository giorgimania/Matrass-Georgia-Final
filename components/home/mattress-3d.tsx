"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

function QuiltedTopTexture() {
  return useMemo(() => {
    const size = 512
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")!
    // base cream
    ctx.fillStyle = "#f5f3ee"
    ctx.fillRect(0, 0, size, size)

    // subtle diamond quilting via soft radial bumps
    const cells = 6
    const step = size / cells
    for (let y = 0; y <= cells; y++) {
      for (let x = 0; x <= cells; x++) {
        const cx = x * step + (y % 2 === 0 ? 0 : step / 2)
        const cy = y * step
        const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, step * 0.55)
        grad.addColorStop(0, "rgba(0,0,0,0.06)")
        grad.addColorStop(0.5, "rgba(255,255,255,0.04)")
        grad.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, step * 0.55, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    const tex = new THREE.CanvasTexture(canvas)
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    return tex
  }, [])
}

function Mattress() {
  const group = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const { size } = useThree()
  const topTex = QuiltedTopTexture()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    // continuous slow Y rotation (~20s per revolution)
    const baseRot = (t / 20) * Math.PI * 2
    // mouse parallax tilt (±5deg ≈ 0.087rad)
    const targetX = 0.26 + mouse.current.y * 0.09
    const targetZ = mouse.current.x * 0.05
    group.current.rotation.y = baseRot + 0.35
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.05
    // floating bob
    group.current.position.y = Math.sin(t / 1.5) * 0.18
  })

  // pointer parallax
  useMemo(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    if (typeof window !== "undefined") window.addEventListener("pointermove", onMove)
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("pointermove", onMove)
    }
  }, [size])

  const w = 3.2
  const h = 0.7
  const d = 2.1

  return (
    <group ref={group} rotation={[0.26, 0.35, 0]}>
      {/* Side body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color="#dedbd5" roughness={0.9} metalness={0} />
      </mesh>
      {/* Quilted top surface */}
      <mesh position={[0, h / 2 + 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[w - 0.06, d - 0.06]} />
        <meshStandardMaterial map={topTex} color="#f5f3ee" roughness={0.85} />
      </mesh>
      {/* Soft white piping around top edge */}
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w + 0.05, 0.12, d + 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.7} />
      </mesh>
      {/* Bottom subtle base */}
      <mesh position={[0, -h / 2 - 0.02, 0]}>
        <boxGeometry args={[w - 0.1, 0.08, d - 0.1]} />
        <meshStandardMaterial color="#cfccc4" roughness={1} />
      </mesh>
    </group>
  )
}

export function Mattress3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.6, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* warm key light from top-left */}
        <directionalLight position={[-4, 6, 4]} intensity={1.6} color="#fff6ec" castShadow />
        <ambientLight intensity={0.55} color="#ffffff" />
        {/* soft purple fill from below — dreamy lavender underglow */}
        <pointLight position={[0, -3, 2]} intensity={2.4} color="#bb00ff" distance={14} decay={2} />
        <Mattress />
      </Suspense>
    </Canvas>
  )
}
