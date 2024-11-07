import React from "react";

import { CharacterPropsType } from "../types";

const Character: React.FC<CharacterPropsType> = ({ character }) => {
  const { name, image } = character;
  return (
    <li className="flex flex-col gap-2 items-center">
      <img src={image} alt={name} className="h-32" />
      <p className="md:text-base text-sm font-medium text-white max-w-[120px]">
        {name}
      </p>
    </li>
  );
};

export default Character;
