import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { CharactersPropsType, ReactElementFunctionType } from "../types";
import useFetchCharacters from "../apis/queries/getCharacters/useFetchCharacter";
import characterStore from "../store/CharacterStore";
import Character from "./Character";
import Loader from "./Loader";
import useFetchCharacterById from "../apis/queries/getCharacter/useFetchCharacterById";
import CharacterDetailsModal from "./CharacterDetailsModal";

const Characters: React.FC<CharactersPropsType> = observer(({ episodeId }) => {
  const { loading, error } = useFetchCharacters(episodeId);
  const [showCharacterDetailsModal, setShowCharacterDetailsModal] =
    useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const {
    getCharacter,
    loading: characterLoading,
    error: characterError,
  } = useFetchCharacterById();

  const handleFetchCharacter = (characterId: string): void => {
    setSelectedCharacter(characterId);
    getCharacter({
      variables: {
        characterId,
      },
    });
    setShowCharacterDetailsModal(true);
  };

  const renderLoader: ReactElementFunctionType = () => {
    return (
      <div className="flex my-auto items-center justify-center">
        <Loader />
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

  const renderCharacterDetailsModal: ReactElementFunctionType = () => {
    if (showCharacterDetailsModal && selectedCharacter) {
      return (
        <CharacterDetailsModal
          selectedCharacter={selectedCharacter}
          close={() => setShowCharacterDetailsModal(false)}
          characterLoading={characterLoading}
          characterError={characterError}
        />
      );
    }
    return <></>;
  };

  return (
    <div
      style={{ height: "calc(80vh - 100px)" }}
      className="overflow-y-auto custom-scrollbar"
    >
      <ul className="flex flex-wrap gap-4 mt-4">
        {characterStore.charactersData.map((character) => {
          const { id } = character;
          return (
            <Character
              handleFetchCharacter={handleFetchCharacter}
              character={character}
              key={id}
            />
          );
        })}
      </ul>
      {renderCharacterDetailsModal()}
    </div>
  );
});

export default Characters;
