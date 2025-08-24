import "./App.css";
import React, { useEffect } from "react";

// Assets
import NavHeader from "./pages/Header";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-light-off-white dark:bg-dark-mode-deep-charcoal">
      <main className="flex flex-col gap-8">
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
      </main>
    </div>
  );
};

export default App;
