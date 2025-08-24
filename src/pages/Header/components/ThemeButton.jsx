import React, { useEffect, useState } from "react";
import { SunIcon } from "../../../assets/icons/SunIcon";
import { MoonIcon } from "../../../assets/icons/MoonIcon";

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage (avoids hydration mismatch)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Apply theme on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="sm:mx-4 md:mx-8">
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="p-2 w-10 h-10 rounded-full bg-blue-950 dark:bg-amber-500 
                   text-dark-mode-soft-white dark:text-light-deep-charcoal 
                   flex items-center justify-center transition-colors duration-0"
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeButton;
