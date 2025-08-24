import "./App.css";
import React, { useEffect, Suspense, lazy } from "react";
import Lenis from "lenis";

const NavHeader = lazy(() => import("./pages/Header"));
const Hero = lazy(() => import("./pages/Hero"));
const Projects = lazy(() => import("./pages/Projects"));
const Footer = lazy(() => import("./pages/Footer"));
const About = lazy(() => import("./pages/About"));

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-light-off-white dark:bg-dark-mode-deep-charcoal z-50">
    <div className="loader border-4 border-t-4 border-gray-300 rounded-full w-12 h-12 animate-spin"></div>
  </div>
);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-light-off-white dark:bg-dark-mode-deep-charcoal min-h-screen">
      <Suspense fallback={<Loader />}>
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
    </div>
  );
};

export default App;
