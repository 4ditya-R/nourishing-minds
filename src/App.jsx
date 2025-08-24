import "./App.css";
import React, { useEffect, Suspense, lazy } from "react";
import Lenis from "lenis";

// Lazy load heavy sections to reduce initial bundle
const NavHeader = lazy(() => import("./pages/Header"));
const Hero = lazy(() => import("./pages/Hero"));
const Projects = lazy(() => import("./pages/Projects"));
const Footer = lazy(() => import("./pages/Footer"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-light-off-white dark:bg-dark-mode-deep-charcoal">
      <main className="flex flex-col gap-8">
        <Suspense fallback={null}>
          <NavHeader />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Footer />
          </section>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
