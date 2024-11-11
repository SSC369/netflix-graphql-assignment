import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { observer } from "mobx-react-lite";

import {
  EpisodeModalPropsType,
  EpisodeModalTabsEnum,
  ReactElementFunctionType,
  VoidFunctionType,
} from "../types";
import EpisodeDetails from "./EpisodeDetails";
import Characters from "./Characters";

const EpisodeModal: React.FC<EpisodeModalPropsType> = observer(
  ({ close, episodeId, currentPage }) => {
    const [selectedTab, setSelectedTab] = useState<string>(
      EpisodeModalTabsEnum.info
    );
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    const handleModalClose: VoidFunctionType = () => {
      setIsVisible(false);
      setTimeout(() => {
        close();
      }, 300);
    };

    const renderEpisodeDetails: ReactElementFunctionType = () => {
      if (selectedTab === EpisodeModalTabsEnum.info) {
        return (
          <EpisodeDetails currentPage={currentPage} episodeId={episodeId} />
        );
      }
      return <Characters episodeId={episodeId} />;
    };

    const renderButton = (name: EpisodeModalTabsEnum): React.ReactElement => {
      return (
        <button
          onClick={() => setSelectedTab(name)}
          className={`w-1/2 rounded first-letter:capitalize font-semibold transition-all duration-300 ease-in-out ${
            selectedTab === name
              ? "bg-netflix text-slate-200"
              : "text-slate-400"
          }`}
        >
          {name}
        </button>
      );
    };

    const renderButtons: ReactElementFunctionType = () => {
      return (
        <div className="flex justify-between self-center p-2 bg-gray-700 max-w-[400px] w-2/3 mt-6 rounded-xl min-h-[60px]">
          {renderButton(EpisodeModalTabsEnum.info)}
          {renderButton(EpisodeModalTabsEnum.characters)}
        </div>
      );
    };

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-60 transition-opacity duration-300 p-4 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex relative flex-col rounded-xl  bg-gray-800 gap-4 px-4 py-6 w-full transform transition-transform duration-300 max-w-[1000px] h-[80vh] ${
            isVisible ? "scale-100" : "scale-90"
          }`}
        >
          <button
            onClick={handleModalClose}
            className="absolute text-white top-4 right-4"
          >
            <IoClose className="text-xl" />
          </button>

          {renderButtons()}
          {renderEpisodeDetails()}
        </div>
      </div>
    );
  }
);

export default EpisodeModal;
