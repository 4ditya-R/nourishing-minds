import React from "react";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import ScrollReveal from "./components/ScrollReveal";

const cardCount = 6;

const cardHeight = 320;
const cardMargin = 30;
const totalHeight = cardCount * (cardHeight + cardMargin) + window.innerHeight;

const Projects = () => {
  return (
    <div className="relative" style={{ height: `${totalHeight}px` }}>
      <div className="sticky top-0 h-[100%] flex text-light-deep-charcoal dark:text-dark-mode-soft-white">
        <div style={{ width: "50%", marginTop: "64px" }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
        <div style={{ width: "50%" }}>
          {" "}
          <ScrollStack>
            <ScrollStackItem itemClassName="bg-amber-400 text-black">
              <h2>Card 1</h2>
              <p>This is the first card</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-amber-400 text-black">
              <h2>Card 2</h2>
              <p>This is the second card</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-amber-400 text-black">
              <h2>Card 3</h2>
              <p>This is the third card</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-amber-400 text-black">
              <h2>Card 4</h2>
              <p>This is the fourth card</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-amber-400 text-black">
              <h2>Card 5</h2>
              <p>This is the fifth card</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-amber-400 text-black">
              <h2>Card 6</h2>
              <p>This is the sixth card</p>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </div>
  );
};

export default Projects;
