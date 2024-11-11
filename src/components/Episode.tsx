import React from "react";
import { observer } from "mobx-react-lite";

import { EpisodePropsType, VoidFunctionType } from "../types";


const Episode: React.FC<EpisodePropsType> = observer(
  ({ episode, setEpisodeId, setShowEpisodeModal }) => {
    const { id, name } = episode;

    const handleEpisodeClick: VoidFunctionType = () => {
      setEpisodeId(id);
      setShowEpisodeModal(true);
    };
    return (
      <div
        onClick={handleEpisodeClick}
        className="bg-gray-700 cursor-pointer text-white p-2 rounded w-full md:w-[28%]"
      >
        <p>
          {id}. {name}
        </p>
      </div>
    );
  }
);

export default Episode;
