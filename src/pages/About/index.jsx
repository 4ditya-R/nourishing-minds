import React, { useMemo, useRef } from "react";
import "../../App.css";
import cards from "./components/carddata";
import AboutCards from "./components/AboutCards";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import StarfieldBlobs from "./components/Starfield";

const About = () => {
  const targetRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["5%", "-90%"]
  );

  const memoizedCards = useMemo(
    () => cards.map((card) => <AboutCards card={card} key={card.id} />),
    []
  );

  return (
    <div className="relative w-full h-full">
      <p className="ml-2 font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-mono text-light-deep-charcoal dark:text-dark-mode-soft-white backdrop-blur-lg">
        About Me
      </p>
      <StarfieldBlobs count={150} />

      <section ref={targetRef} className="relative h-[300vh]">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-light-deep-charcoal dark:text-dark-mode-soft-white m-4 mb-0">
          Stories
        </div>

        <div className="sticky top-0 flex h-screen items-center overflow-hidden overflow-x-hidden">
          <motion.div
            style={{ x, willChange: "transform" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
            className="flex gap-8"
          >
            {memoizedCards}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
