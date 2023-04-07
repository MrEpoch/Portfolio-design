import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars  } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Model } from "./models/Shape";
import Typed from "typed.js";

export default function Introduction() {

  const typedEl = useRef();

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Web developer with interest in design", "UX and UI with react and css", "Big interest in technologies like contracts with solidity", "Experience with Firebase services"], 
      startDelay: 300,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section className='introduction'>
        <div className="introduction-header-text">
            <h1>Hello, I am <span className='span-important'>Alex</span> <span className='wave-hand'>&#128075;</span></h1>
            <div className='typedContainer'><p ref={typedEl}>Web developer with interest in design.</p></div>
        </div>
        <Canvas resize={true} data-paper-resize  className="someDesign">
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Physics>
            <Model position={[-0.6, 0.69, -0.26]} />
          </Physics>
        </Canvas>
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
