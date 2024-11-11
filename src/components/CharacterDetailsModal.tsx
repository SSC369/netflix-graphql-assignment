import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { IoClose } from "react-icons/io5";

import {
  CharacterDetailsModalProps,
  ReactElementFunctionType,
  VoidFunctionType,
} from "../types";
import characterStore from "../store/CharacterStore";
import Loader from "./Loader";
import CharacterModel from "../models/CharacterModel";

const CharacterDetailsModal: React.FC<CharacterDetailsModalProps> = observer(
  ({
    close,
    characterError,
    characterLoading,
    selectedCharacter,
    getCharacter,
  }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const character: CharacterModel =
      characterStore.getCharacter(selectedCharacter);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    const handleModalClose: VoidFunctionType = () => {
      setIsVisible(false);
      setTimeout(() => {
        close();
      }, 300);
    };

    const handleFetchCharacterRetry: VoidFunctionType = () => {
      getCharacter({
        variables: {
          characterId: selectedCharacter,
        },
      });
    };

    const renderErrorView: ReactElementFunctionType = () => {
      return (
        <div className="flex my-auto items-center justify-center">
          <h1 className="text-xl text-white font-semibold">
            Something went wrong !!!
          </h1>
          <button onClick={handleFetchCharacterRetry}>Retry</button>
        </div>
      );
    };

    const renderLoader: ReactElementFunctionType = () => {
      return (
        <div className="flex my-auto items-center justify-center">
          <Loader />
        </div>
      );
    };

    if (characterError) {
      return renderErrorView();
    }

    if (characterLoading) {
      return renderLoader();
    }

    const renderCharacter: ReactElementFunctionType = () => {
      const { gender, image, location, name, origin, status } = character;
      const renderCharacterDetail = (
        name: string,
        value: string | undefined
      ): React.ReactElement => {
        return (
          <div className="flex items-center gap-2 text-lg">
            <p className="text-slate-400 font-medium">{name}:</p>
            <p className="text-slate-200 font-medium">{value}</p>
          </div>
        );
      };

      return (
        <div className="flex items-start gap-4 mt-6">
          <img src={image} alt={name} className="h-44" />

          <div className="flex flex-col gap-4 flex-grow self-center">
            {renderCharacterDetail("Name", name)}
            {renderCharacterDetail("Location", location?.name)}
            {renderCharacterDetail("Origin", origin?.name)}
            {renderCharacterDetail("Gender", gender)}
            {renderCharacterDetail("Status", status)}
          </div>
        </div>
      );
    };

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-80 transition-opacity duration-300 p-4 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex relative flex-col rounded-xl  bg-gray-800 gap-4 px-4 py-6 w-full transform transition-transform duration-300 max-w-[600px]  ${
            isVisible ? "scale-100" : "scale-90"
          }`}
        >
          <button
            onClick={handleModalClose}
            className="absolute text-white top-4 right-4"
          >
            <IoClose className="text-xl" />
          </button>
          {renderCharacter()}
        </div>
      </div>
    );
  }
);

export default CharacterDetailsModal;
