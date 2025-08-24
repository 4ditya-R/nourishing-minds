import React from "react";
import { InstagramIcon } from "../../../assets/icons/InstragramIcon";
import { FacebookIcon } from "../../../assets/icons/FacebookIcon";
import { AtSignIcon } from "../../../assets/icons/AtSignIcon";
import { TwitterIcon } from "../../../assets/icons/TwitterIcon";
import { YoutubeIcon } from "../../../assets/icons/YoutubeIcon";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-4 mx-auto">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:scale-125 transition-transform"
      >
        <InstagramIcon />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:scale-125 transition-transform"
      >
        <FacebookIcon />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="hover:scale-125 transition-transform"
      >
        <AtSignIcon />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:scale-125 transition-transform"
      >
        <TwitterIcon />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="hover:scale-125 transition-transform"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
