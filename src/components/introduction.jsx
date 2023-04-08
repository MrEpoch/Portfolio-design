import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars  } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Model } from "./models/Planet";
import Typed from "typed.js";

export default function Introduction() {
  const typedEl = useRef();

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Designer", "Alex", "Developer"], 
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 3000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });


  return (
    <section className='introduction'>
        <div className="introduction-header-text">
            <h1>Hello, I am <span ref={typedEl} className='span-important'>Alex</span> <span className='wave-hand'>&#128075;</span></h1>
            <div className='typedContainer'><p>Web developer with interest in designing.</p></div>
        </div>
        <div className="introduction-Canvas-container">
          <Canvas size={[`50%`,`50%`]} resize={true} data-paper-resize  className="someDesign">
            <ambientLight intensity={0.5} />
            <rectAreaLight position={[2, 1, 3]} />
            <Physics>
              <Model position={[-0.6, 0.69, -0.26]} />
            </Physics>
            <OrbitControls enableZoom={false} zoom={false} maxDistance={5} autoRotate minDistance={5} enablePan={false}  />
          </Canvas>
        </div>
    </section>
  )
}

function Shape() {
  const ref = useRef();

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
