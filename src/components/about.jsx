import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const textVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, y: 0 },
    hidden: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <section className="about NO-COPY">
      <motion.div
        variants={textVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="about-info-container"
      >
        <h1 className="about-info-h1">
          What are my <span className="span-important">skills ?</span>
        </h1>
        <ul>
          <li>I am a Front-end developer who is skilled in HTML, CSS, JavaScript, and Node.js.</li>
          <li>My JavaScript extends to React library and React Native Framework.</li>
          <li>Experience with a few npm libraries and packages like framer-motion for animating and THREE.js for stunning 3D models.</li>
          <li>I have some ventures with Firebase as a backend with Auth and FireStore.</li>
        </ul>
      </motion.div>
      <div className="about-cards-container">
        <div className="about-card">
          <h1 className="about-card-h2">Front-end Developer</h1>
        </div>
        <div className="about-card">
          <h1 className="about-card-h2">React Developer</h1>
        </div>
        <div className="about-card">
          <h1 className="about-card-h2">React Native Developer</h1>
        </div>
        <div className="about-card">
          <h1 className="about-card-h2">UI and UX experience</h1>
        </div>
      </div>
    </section>
  );
}
