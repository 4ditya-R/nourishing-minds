import React, { useMemo, useEffect, useState } from "react";

const lightColors = [
  "rgba(253, 230, 138, 0.9)",
  "rgba(252, 211, 77, 0.85)",
  "rgba(251, 191, 36, 0.8)",
  "rgba(245, 158, 11, 0.75)",
  "rgba(234, 88, 12, 0.7)",
];

const darkColors = [
  "rgba(245, 158, 11, 0.9)",
  "rgba(217, 119, 6, 0.85)",
  "rgba(180, 83, 9, 0.75)",
  "rgba(146, 64, 14, 0.7)",
  "rgba(120, 53, 15, 0.65)",
];

const sizes = [16, 24, 32, 64, 108];

const StarfieldBlobs = ({ count = 150 }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    let timeout;
    const observer = new MutationObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
      }, 50);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
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
    <div className="absolute inset-0 overflow-hidden z-0 mt-32 pointer-events-none">
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
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBlobs;
