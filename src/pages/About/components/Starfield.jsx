import React, { useMemo, useEffect, useState } from "react";

const lightColors = [
  "rgba(253, 230, 138, 0.9)", // soft golden glow
  "rgba(252, 211, 77, 0.85)", // bright amber
  "rgba(251, 191, 36, 0.8)", // clean golden amber
  "rgba(245, 158, 11, 0.75)", // rich amber
  "rgba(234, 88, 12, 0.7)", // modern deep orange accent
];

const darkColors = [
  "rgba(245, 158, 11, 0.9)", // bright amber
  "rgba(217, 119, 6, 0.85)", // strong amber
  "rgba(180, 83, 9, 0.75)", // deeper amber
  "rgba(146, 64, 14, 0.7)", // brownish amber
  "rgba(120, 53, 15, 0.65)", // dark burnt amber
];

const sizes = [16, 24, 32, 64, 108];

const StarfieldBlobs = ({ count = 150 }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const blobs = useMemo(() => {
    const palette = isDarkMode ? darkColors : lightColors;

    return Array.from({ length: count }).map((_, i) => {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const color = palette[Math.floor(Math.random() * palette.length)];
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const opacity = 0.5 + Math.random() * 0.5;

      return { id: i, size, color, top, left, opacity };
    });
  }, [count, isDarkMode]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 mt-32">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            opacity: blob.opacity,
            background: `radial-gradient(circle, ${blob.color} 50%, transparent 90%)`,
            filter: "blur(1.5px) drop-shadow(0px 4px 6px rgba(0,0,0,0.3))",
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBlobs;
