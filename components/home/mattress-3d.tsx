"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense, useLayoutEffect, useRef, useState } from "react"
import * as THREE from "three"

const MODEL_URL = "/bed_06.glb"

function BedModel({ interacting }: { interacting: boolean }) {
  const outer = useRef<THREE.Group>(null)
  const inner = useRef<THREE.Group>(null)
  const autoRot = useRef(0)
  const { scene } = useGLTF(MODEL_URL)
  const { viewport } = useThree()

  // Center the model and scale it to fill ~80% of the canvas height.
  useLayoutEffect(() => {
    if (!inner.current) return
    const box = new THREE.Box3().setFromObject(scene)
    const sizeVec = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(sizeVec)
    box.getCenter(center)

    // recenter geometry at origin
    scene.position.set(-center.x, -center.y, -center.z)

    // scale so the model's largest dimension fills ~80% of the visible viewport
    // height (using the max extent keeps a wide bed fully in frame)
    const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z)
    const targetHeight = viewport.height * 0.8
    const scale = targetHeight / maxDim
    inner.current.scale.setScalar(scale)
  }, [scene, viewport.height])

  useFrame((state, delta) => {
    if (!outer.current) return
    const t = state.clock.getElapsedTime()

    // continuous Y auto-rotation: 360deg every 20s, paused while interacting
    if (!interacting) {
      autoRot.current += (delta / 20) * Math.PI * 2
    }
    outer.current.rotation.y = autoRot.current

    // gentle float bob: ±15px over 3s ease-in-out (approx via sine)
    const pxToUnit = viewport.height / state.size.height
    const bob = Math.sin((t / 3) * Math.PI * 2) * 15 * pxToUnit
    outer.current.position.y = bob
  })

  return (
    <group ref={outer}>
      {/* initial 15deg tilt on X axis */}
      <group ref={inner} rotation={[THREE.MathUtils.degToRad(15), 0, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  )
}

export function Mattress3D() {
  const [interacting, setInteracting] = useState(false)

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      {/* ambient white */}
      <ambientLight intensity={0.6} color="#ffffff" />
      {/* warm white key light from top-left */}
      <directionalLight position={[-5, 6, 4]} intensity={1.2} color="#fff8f0" />
      {/* soft purple underglow from below */}
      <pointLight position={[0, -4, 2]} intensity={0.3} color="#bb00ff" distance={16} decay={2} />
      <Suspense fallback={null}>
        <BedModel interacting={interacting} />
      </Suspense>
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        enableZoom={false}
        enablePan={false}
        onStart={() => setInteracting(true)}
        onEnd={() => setInteracting(false)}
      />
    </Canvas>
  )
}

useGLTF.preload(MODEL_URL)
