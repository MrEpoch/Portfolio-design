import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Phone } from "./models/Phone";
import Typed from "typed.js";
import { SvgIntroduction } from "./svg-shapes";
import "../styles/introduction.css";

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
    <section className="introduction">
      <div className="blurry-design"></div>
      <SvgIntroduction />
      <div className="introduction-header-text">
        <h1>
          Hello, I am{" "}
          <span ref={typedEl} className="span-important">
            Alex
          </span>{" "}
          <span className="wave-hand">&#128075;</span>
        </h1>
        <div className="typedContainer">
          <p className="typedContainer-p">Front-end developer and designer</p>
        </div>
      </div>
      <div className="introduction-Canvas-container">
        <Canvas
          size={[`50%`, `50%`]}
          resize={true}
          data-paper-resize
          className="someDesign"
        >
          <ambientLight intensity={0.5} />
          <rectAreaLight position={[4, 1, 1]} />
          <Physics>
            <Phone />
          </Physics>
          <OrbitControls
            autoRotateSpeed={4}
            zoom={false}
            autoRotate
            maxDistance={1}
            minDistance={1}
            enablePan={false}
          />
        </Canvas>
      </div>
    </section>
  );
}
