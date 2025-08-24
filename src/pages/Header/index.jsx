import React, { useState, useEffect, useRef } from "react";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Lenis from "lenis";

const NavHeader = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

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

    lenis.on("scroll", ({ scroll }) => {
      if (scroll < 50) {
        setShowNavbar(true);
      } else if (scroll < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY.current = scroll;
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out fixed top-5 left-0 right-0 mx-auto w-[95%] max-w-screen-md px-4 md:px-6 z-10 flex justify-between rounded-2xl backdrop-blur-lg bg-dark-mode-border-gray dark:bg-light-deep-charcoal bg-opacity-10 dark:bg-opacity-10 text-light-subtle-gray dark:text-dark-mode-soft-white border-white/20 dark:border-white/90 shadow-md`}
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-200%)",
      }}
    >
      <Logo />
      <Nav />
    </div>
  );
};

export default NavHeader;
