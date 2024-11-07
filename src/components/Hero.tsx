import React from "react";

import seriesImageMobile from "../assets/series-background-image-mobile.jpg";
import seriesImageDesktop from "../assets/series-background-image-desktop.jpg";
import seriesLogo from "../assets/series-logo.png";

const Hero: React.FC = () => {
  const seriesBackgroundImage =
    window.innerWidth >= 768 ? seriesImageDesktop : seriesImageMobile;
  return (
    <div className="flex flex-col relative">
      <div className="h-[300px] md:h-[600px] relative">
        <div
          className="w-full block h-full bg-cover bg-top absolute bg-no-repeat "
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.7)), url(${seriesBackgroundImage})`,
          }}
        ></div>
        <div className="md:block hidden bg-black opacity-35 absolute w-[400px] inset-y-0 left-0  blur-lg"></div>
      </div>
      <div className="z-50 md:absolute top-10 p-4">
        <img src={seriesLogo} className="h-40" />
      </div>
    </div>
  );
};

export default Hero;
