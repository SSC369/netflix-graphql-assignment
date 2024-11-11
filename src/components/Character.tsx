import React from "react";
import { observer } from "mobx-react-lite";

import { CharacterPropsType, VoidFunctionType } from "../types";

const Character: React.FC<CharacterPropsType> = observer(
  ({ character, handleFetchCharacter }) => {
    const { id, name, image, status, gender } = character;

    const handleCharacterClick: VoidFunctionType = () => {
      handleFetchCharacter(id);
    };

    return (
      <li
        onClick={handleCharacterClick}
        className="flex md:flex-row flex-col items-start gap-2 md:w-[48%] lg:w-[28%]"
      >
        <img src={image} alt={name} className="h-32" />
        <div className="text-slate-400 flex flex-col gap-2">
          <p className="md:text-base text-sm font-medium text-white max-w-[120px]">
            {name}
          </p>
          <p>{status}</p>
          <p>{gender}</p>
        </div>
      </li>
    );
  }
);

export default Character;
