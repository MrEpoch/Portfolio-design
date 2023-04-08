import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Phone } from "./models/Phone";
import { Pet } from './models/Pet';
import { Special } from './models/Special';
import { Box } from "./models/Box";
 
export default function About() {
  return (
    <section className='about'>
        <div className="about-info-container">
            <h1 className='about-info-h1'>What are my skills?</h1>
            <p>I am front-end developer who can work with HTML, CSS, JavaScript, and some average skills with python. With JavaScript i am skilled with React.js library and can use React native framework. From what you can see from my small design above i can use THREE.js library. My skills extend to BaaS to with Firebase services</p>
        </div>
        <div className="about-cards-container">
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas">
                    <OrbitControls enableZoom={false} minDistance={5} autoRotate maxDistance={5} enablePan={false} />
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Physics>
                        <Box />
                    </Physics>
                </Canvas>
                <h1 className="about-card-h2">Front-end Developer</h1>
            </div>
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas">
                    <OrbitControls enableZoom={false} maxDistance={3} autoRotate minDistance={3} enablePan={false} />
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Physics>
                        <Pet />
                    </Physics>
                </Canvas>
                <h1 className="about-card-h2">React Developer</h1>
            </div>
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas">
                    <OrbitControls enableZoom={false} maxDistance={1} autoRotateSpeed={10} autoRotate minDistance={1} enablePan={false} />
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Physics>
                        <Phone />
                    </Physics>
                </Canvas>
                <h1 className="about-card-h2">React Native Developer</h1>
            </div>
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas">
                    <OrbitControls enableZoom={false} maxDistance={3} autoRotate minDistance={3} enablePan={false} />
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Physics>
                        <Special />
                    </Physics>
                </Canvas>
                <h1 className="about-card-h2">UI and UX experience</h1>
            </div>
        </div>

    </section>
  )
}
