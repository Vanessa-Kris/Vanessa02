import React from "react";
import "../components/styles.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import pro1 from "../images/1.png";
import pro2 from "../images/2.png";
import pro3 from "../images/3.png";
import pro4 from "../images/4.png";
import pro5 from "../images/5.png";
import pro6 from "../images/6.png";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  let selectedImage, demoLink, sourceLink;
  switch (id) {
    case 1:
      selectedImage = pro1;
      demoLink = `https://example.com1`;
      sourceLink = `https://example.com1`;
      break;
    case 2:
      selectedImage = pro2;
      demoLink = `https://example.com2`;
      sourceLink = `https://example.com2`;
      break;
    case 3:
      selectedImage = pro3;
      demoLink = `https://example.com3`;
      sourceLink = `https://example.com3`;
      break;
    case 4:
      selectedImage = pro4;
      demoLink = `https://example.com4`;
      sourceLink = `https://example.com4`;
      break;
    case 5:
      selectedImage = pro5;
      demoLink = `https://example.com5`;
      sourceLink = `https://example.com5`;
      break;
    case 6:
      selectedImage = pro6;
      demoLink = `https://example.com6`;
      sourceLink = `https://example.com6`;
      break;
    default:
      selectedImage = pro1;
      demoLink = `https://example.com`;
      sourceLink = `https://example.com`;
  }

  return (
    <section>
      <div ref={ref}>
        <img src={selectedImage} alt="Projects" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>

      <a href={demoLink} className="button">
        View Demo
      </a>
      <a href={sourceLink} className="button">
        View Source
      </a>
    </section>
  );
}

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((image) => (
        <Image id={image} key={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
