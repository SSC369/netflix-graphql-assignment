import React from "react";

import { EpisodePropsType, VoidFunctionType } from "../types";

const Episode: React.FC<EpisodePropsType> = ({
  episode,
  setEpisodeId,
  setShowEpisodeModal,
}) => {
  const { id, name } = episode;

  const handleEpisodeClick: VoidFunctionType = () => {
    setEpisodeId(id);
    setShowEpisodeModal(true);
  };
  return (
    <div
      onClick={handleEpisodeClick}
      className="bg-gray-700 cursor-pointer text-white p-2 rounded w-[28%]"
    >
      <p>
        {id}. {name}
      </p>
    </div>
  );
};

export default Episode;
