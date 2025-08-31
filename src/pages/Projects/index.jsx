import React, { useState, useEffect, useRef } from "react";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import ScrollReveal from "./components/ScrollReveal";

const cardCount = 6;

const Projects = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [cardHeight, setCardHeight] = useState(320);
  const [cardMargin, setCardMargin] = useState(30);
  const [totalHeight, setTotalHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef(null);

  // Responsive card sizing
  useEffect(() => {
    const updateSizes = () => {
      const vw = window.innerWidth;

      let newCardHeight, newCardMargin;

      if (vw < 640) {
        newCardHeight = 220;
        newCardMargin = 20;
      } else if (vw < 1024) {
        newCardHeight = 280;
        newCardMargin = 25;
      } else {
        newCardHeight = 320;
        newCardMargin = 30;
      }

      const vh = window.innerHeight;
      setCardHeight(newCardHeight);
      setCardMargin(newCardMargin);
      setViewportHeight(vh);

      // totalHeight controls the scroll distance
      let newTotalHeight;
      if (vw < 640) {
        newTotalHeight = cardCount * (newCardHeight + newCardMargin) + vh * 2;
      } else if (vw < 1024) {
        newTotalHeight = cardCount * (newCardHeight + newCardMargin) + vh * 1.5;
      } else {
        newTotalHeight = cardCount * (newCardHeight + newCardMargin) + vh * 1.2;
      }

      setTotalHeight(newTotalHeight);
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Shared scroll progress for both animations
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const start = rect.top - window.innerHeight;
      const end = rect.bottom;
      const progress = Math.min(
        Math.max((window.scrollY - start) / (end - start), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        className="sticky top-0 flex flex-col md:flex-row 
               text-light-deep-charcoal dark:text-dark-mode-soft-white
               min-h-screen"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-8 px-4 md:px-8 space-y-6">
          {[...Array(cardCount)].map((_, i) => (
            <ScrollReveal
              key={i}
              progress={scrollProgress} // shared progress
              index={i}
              total={cardCount}
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              When does a man die? When he is hit by a bullet? No! When he
              suffers a disease? No! When he ate a soup made out of a poisonous
              mushroom? No! A man dies when he is forgotten!
            </ScrollReveal>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-4 md:px-0 mt-6 md:mt-0">
          <div
            className="relative"
            style={{
              height: `${totalHeight}px`,
            }}
          >
            <ScrollStack progress={scrollProgress}>
              {[...Array(cardCount)].map((_, i) => (
                <ScrollStackItem
                  key={i}
                  index={i}
                  total={cardCount}
                  progress={scrollProgress}
                  itemClassName="bg-amber-400 text-black p-6 rounded-xl shadow-md"
                  style={{
                    height: `${cardHeight}px`,
                    marginBottom: `${cardMargin}px`,
                  }}
                >
                  <h2 className="text-xl font-bold">Card {i + 1}</h2>
                  <p>This is card number {i + 1}</p>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
