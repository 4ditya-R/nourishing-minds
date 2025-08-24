import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeButton from "./ThemeButton";
import { MenuIcon } from "../../../assets/icons/MenuIcon";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIconRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      menuIconRef.current?.startAnimation();
    } else {
      menuIconRef.current?.stopAnimation();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    menuIconRef.current?.stopAnimation();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = (
    <>
      {["home", "about", "projects", "contact"].map((item) => (
        <Link
          key={item}
          to={item}
          smooth
          duration={500}
          className="hover:text-amber-600 transition-colors duration-400 py-2 px-3"
          onClick={closeMenu}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </>
  );

  return (
    <div className="w-full flex items-center justify-between px-3 sm:px-4 md:px-8">
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-4 lg:gap-8 font-bold cursor-pointer">
        {navLinks}
      </nav>

      {/* Right side: menu icon (mobile) + theme button */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="md:hidden">
          <MenuIcon
            ref={menuIconRef}
            onClick={toggleMenu}
            className="text-amber-500 cursor-pointer"
          />
        </div>
        <ThemeButton />
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 w-full flex flex-col items-center justify-center 
          gap-4 sm:gap-6 md:gap-8 py-4 px-4 rounded-2xl font-bold
          backdrop-blur-md bg-black bg-opacity-95 border border-white/10 
          z-40 transition-all duration-400 cursor-pointer"
        >
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Nav;
