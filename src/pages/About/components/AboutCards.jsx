import React from "react";

const AboutCards = ({ card }) => {
  return (
    <div className="group relative flex flex-col h-[600px] w-[400px] text-light-deep-charcoal dark:text-dark-mode-soft-white bg-slate-100 dark:bg-dark-mode-grey-card overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          willChange: "transform",
        }}
        className=" z-0 my-2 mx-auto rounded-2xl h-[300px] w-[370px] grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105 shadow-xl"
      />

      <div className=" z-10">
        <p className="my-4 px-2 text-4xl font-black uppercase rounded-xl">
          {card.title}
        </p>
      </div>

      <div className=" z-10">
        <p className="px-4 text-lg rounded-xl">{card.desc}</p>
      </div>
    </div>
  );
};

export default AboutCards;
