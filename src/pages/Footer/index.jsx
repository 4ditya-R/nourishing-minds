import React from "react";
import SocialMedia from "./components/SocialMedia";
import FooterCard from "./components/FooterCard";

const Footer = () => {
  return (
    <div className="m-1 p-4 w-full flex flex-col justify-center space-y-6">
      {/* Headline */}
      <div className="left-2 text-2xl md:text-4xl font-semibold uppercase font-mono dark:text-dark-mode-soft-white text-light-deep-charcoal">
        <p>Feeling overwhelmed or reflective?</p>
      </div>

      {/* Main Title */}
      <div className="text-center text-5xl md:text-9xl font-bold font-mono uppercase text-dark-mode-soft-white hover:text-light-deep-charcoal dark:text-dark-mode-border-gray dark:hover:text-light-pure-white transition-colors duration-700">
        <p>let's talk</p>
      </div>

      {/* Scheduling */}
      <div>
        <FooterCard />
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center text-amber-500">
        <SocialMedia />
      </div>

      {/* Disclaimer */}
      {/* <div className="text-center px-4">
        <h4 className="font-bold dark:text-dark-mode-soft-white text-light-deep-charcoal">
          Disclaimer
        </h4>
        <p className="mt-0 text-sm dark:text-dark-mode-soft-white text-light-deep-charcoal">
          This website is for informational purposes only and is not a
          substitute for professional medical advice or emergency services.
        </p>
      </div> */}

      {/* Copyright */}
      <div className="mt-2 text-center text-xs dark:text-dark-mode-soft-white text-light-deep-charcoal">
        © 2025 Healing Horizons. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
