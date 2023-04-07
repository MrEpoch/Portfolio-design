import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars  } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'

export default function Introduction() {

  return (
    <section className='introduction'>
        <div className="irregular-blob"></div>
        <div className="introduction-header-text">
            <h1>Hello, I am <span className='span-important'>Alex</span></h1>
            <p>Web developer with interest in design, UX and UI, and new technologies</p>
        </div>
        <Canvas resize={true} data-paper-resize  className="someDesign">
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <Physics>
            <Shape position={[-1.2, 0, 0]} />
            <Plane />
          </Physics>
          <OrbitControls />
        </Canvas>
    </section>
  )
}

function Shape() {
  const ref = useRef();
  useFrame((state, delta) => (
    ref.current.rotation.y += delta / 3,
    ref.current.rotation.x += delta / 3
  ))

  return (
    <>
      <mesh ref={ref} >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
        <meshLambertMaterial attach="material" color="#5B14A0" />
      </mesh>
    </>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <>
      <mesh ref={ref} rotation={[2, 0, 0]} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="purple" />
      </mesh>
    </>
  )
}
