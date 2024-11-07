import React from "react";
import useFetchEpisode from "../apis/queries/getEpisode/useFetchEpisode";
import { EpisodeDetailsPropsType, ReactElementFunctionType } from "../types";

const EpisodeDetails: React.FC<EpisodeDetailsPropsType> = ({ episodeId }) => {
  const { loading, error } = useFetchEpisode(episodeId);

  const renderLoader: ReactElementFunctionType = () => {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  };

  if (loading) {
    return renderLoader();
  }

  const renderErrorView: ReactElementFunctionType = () => {
    return (
      <div>
        <h1>Something went wrong !!!</h1>
      </div>
    );
  };

  if (error) {
    return renderErrorView();
  }

  return (
    <div>
      <h1 className="text-slate-200 text-xl text-center font-semibold">
        EpisodeDetails
      </h1>
    </div>
  );
};

export default EpisodeDetails;
