import React, { useState, useEffect, useRef } from "react";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Lenis from "lenis";

const NavHeader = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const frameId = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    const handleScroll = ({ scroll }) => {
      const isScrollingUp = scroll < lastScrollY.current;
      const shouldShow = scroll < 50 || isScrollingUp;

      if (shouldShow !== showNavbar) setShowNavbar(shouldShow);
      lastScrollY.current = scroll;
    };

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      frameId.current = requestAnimationFrame(raf);
    };
    frameId.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId.current);
      lenis.destroy();
    };
  }, [showNavbar]);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out fixed top-5 left-0 right-0 mx-auto w-[95%] max-w-screen-md px-4 md:px-6 z-10 flex justify-between rounded-2xl backdrop-blur-lg bg-dark-mode-border-gray dark:bg-light-deep-charcoal bg-opacity-10 dark:bg-opacity-10 text-light-subtle-gray dark:text-dark-mode-soft-white border-white/20 dark:border-white/90 shadow-md`}
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-200%)",
        willChange: "transform",
      }}
    >
      <Logo />
      <Nav />
    </div>
  );
};

export default NavHeader;
