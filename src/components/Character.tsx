import React from "react";
import { observer } from "mobx-react-lite";

import { CharacterPropsType, VoidFunctionType } from "../types";

const Character: React.FC<CharacterPropsType> = observer(
  ({ character, handleFetchCharacter }) => {
    const { id, name, image } = character;

    const handleCharacterClick: VoidFunctionType = () => {
      handleFetchCharacter(id);
    };

    return (
      <li
        onClick={handleCharacterClick}
        className="flex flex-col gap-2 items-center"
      >
        <img src={image} alt={name} className="h-32" />
        <p className="md:text-base text-sm font-medium text-white max-w-[120px]">
          {name}
        </p>
      </li>
    );
  }
);

export default Character;
