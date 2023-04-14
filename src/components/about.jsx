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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9 }, y: 0 },
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

      <div className="about-skills-container">
        <h3 className="about-skills-h3">My skills</h3>
        <div className="about-skills">
          <div className="about-skills-item">
            <h4>HTML</h4>
            <p className="about-skills-item-p">
              Well, i think this one is pretty obvius, but yes i can use HTML.👏
            </p>
          </div>
          <div className="about-skills-item">
            <h4>CSS</h4>
            <p className="about-skills-item-p">
              I can style my code too, although i would like to say that nothing is more painful than styling my code.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>JavaScript</h4>
            <p className="about-skills-item-p">
              In this time and age, what is considered as being skilled with JS is hard to define. From my part i work with JS from basic methods to async.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>React</h4>
            <p className="about-skills-item-p">
              I don't believe in that someone now writes huge apps with vanilla JS. React although not that friendly has great community with lot of packages and libraries.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>React Native</h4>
            <p className="about-skills-item-p">
              This was my main reason to learn JavaScript and React and i can say that my first experience styling something with it was horrible. But Nativewind helped me to overcame it.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>Node.js</h4>
            <p className="about-skills-item-p">
              For now i am only at level of using it with async and await, i haven't created some great server or API with it, but will soon.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>Git</h4>
            <p className="about-skills-item-p">
              Withouh git i would be lost in names of copies of all of my projects. I share majority of my projects on github with it.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>Three.js</h4>
            <p className="about-skills-item-p">
              I tried blender to design items, but i found spline at web a lot easier to use. I am still learning how to use it, but i am sure i will get there.
            </p>
          </div>
          <div className="about-skills-item">
            <h4>Firebase services</h4>
            <p className="about-skills-item-p">
              As normal Front-end developer who wants backend and don't have for now time to learn it is firebase great solution to problem, i am building project with Auth, Firestore, and their Storage.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}
