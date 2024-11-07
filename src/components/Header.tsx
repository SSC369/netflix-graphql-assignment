import React from "react";

import netflixLogo from "../assets/netflix-logo.png";
import netflixWordLogo from "../assets/netflix-word-logo.svg";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between bg-black px-[3%] py-4">
      <img src={netflixLogo} className="h-10 md:hidden" />
      <img src={netflixWordLogo} className="h-10 hidden md:block" />
      <div className="flex gap-2 text-sm">
        <button className="bg-netflix rounded-sm text-white px-6 py-2 font-semibold">
          Join now
        </button>
        <button className="border-2 px-6 py-2 rounded-sm text-white font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
