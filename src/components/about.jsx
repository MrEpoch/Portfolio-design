import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Phone } from "./models/Phone";
import { Pet } from './models/Pet';
import { Special } from './models/Special';
import { Box } from "./models/Box";
import { Computer } from "./models/Computer";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function About() {

  const control = useAnimation()
  const [ref, inView] = useInView()
  
  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])
  
  const textVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, y: 0 },
    hidden: { opacity: 0, scale: 0.6, y: 250 }
  };

  return (
    <section className='about'>
        <motion.div variants={textVariant} ref={ref} animate={control} initial="hidden"  className="about-info-container">
            <h1 className='about-info-h1'>What are my skills?</h1>
            <p>I am front-end developer who can work with HTML, CSS, JavaScript, and Node. With JavaScript i am skilled with React.js library and can use React native framework. From what you can see from my small design above i can use THREE.js library. My skills extend to BaaS to with Firebase services</p>
        </motion.div>
        <div className="about-cards-container">
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas">
                    <OrbitControls enableZoom={false} minDistance={0.9} maxDistance={0.9} enablePan={false} />
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Physics>
                      <Computer rotation={[0.3, 3.15, 0]}  position={[-0.2, -0.1, 0.3]}/>
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
                    <OrbitControls enableZoom={false} maxDistance={5} autoRotate minDistance={5} enablePan={false} />
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <rectAreaLight position={[3, 5, 0]} />
                    <Physics>
                        <Box />
                    </Physics>
                </Canvas>
                <h1 className="about-card-h2">UI and UX experience</h1>
            </div>
        </div>

    </section>
  )
}
