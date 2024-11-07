import React from "react";

import { CharactersPropsType, ReactElementFunctionType } from "../types";
import useFetchCharacters from "../apis/queries/getCharacters/useFetchCharacter";
import characterStore from "../store/CharacterStore";
import Character from "./Character";

const Characters: React.FC<CharactersPropsType> = ({ episodeId }) => {
  const { loading, error } = useFetchCharacters(episodeId);

  const renderLoader: ReactElementFunctionType = () => {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  };

  const renderErrorView: ReactElementFunctionType = () => {
    return (
      <div>
        <h1>Something went wrong !!!</h1>
      </div>
    );
  };

  if (loading) {
    return renderLoader();
  }

  if (error) {
    return renderErrorView();
  }

  return (
    <div style={{ height: "calc(80vh - 100px)" }} className="overflow-y-auto">
      <ul className="flex justify-center flex-wrap gap-4 mt-4">
        {characterStore.charactersData.map((character) => {
          const { id } = character;
          return <Character character={character} key={id} />;
        })}
      </ul>
    </div>
  );
};

export default Characters;
