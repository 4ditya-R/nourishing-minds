import React from "react";
import logo from "../../../assets/images/FullLogo_Transparent_NoBuffer (1).png";

const Logo = () => {
  return (
    <div className="my-1 ml-4 sm:ml-6 md:ml-8 flex items-center">
      <img
        src={logo}
        alt="Healing Horizons"
        className="h-14 sm:h-16 md:h-14 w-auto object-contain scale-125 origin-center"
      />
    </div>
  );
};

export default Logo;
