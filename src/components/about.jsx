import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function About() {
  return (
    <section className='about'>
        <div className="about-info-container">
            <h1 className='about-info-h1'>What are my skills?</h1>
            <p>I am front-end developer who can work with HTML, CSS, JavaScript, and some average skills with python. With JavaScript i am skilled with React.js library and can use React native framework. From what you can see from my small design above i can use THREE.js library. My skills extend to BaaS to with Firebase services</p>
        </div>
        <div className="about-cards-container">
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas"></Canvas>
                <h1 className="about-card-h2">Front-end Developer</h1>
            </div>
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas"></Canvas>
                <h1 className="about-card-h2">React Developer</h1>
            </div>
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas"></Canvas>
                <h1 className="about-card-h2">React Native Developer</h1>
            </div>
            <div className="about-card">
                <Canvas size={[`50%`,`50%`]} className="about-card-canvas"></Canvas>
                <h1 className="about-card-h2">UI and UX experience</h1>
            </div>
        </div>

    </section>
  )
}
