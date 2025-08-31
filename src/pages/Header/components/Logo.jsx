import React from "react";
import logo from "../../../assets/images/FullLogo_Transparent_NoBuffer (1).png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Healing Horizons"
        className="h-12 sm:h-14 md:h-14 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
