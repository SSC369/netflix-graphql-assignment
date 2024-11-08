import React from "react";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";

import { EpisodeDetailsPropsType, ReactElementFunctionType } from "../types";
import episodeStore from "../store/EpisodeStore";
import useFetchEpisode from "../apis/queries/getEpisode/useFetchEpisode";
import Loader from "./Loader";

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

const EpisodeDetails: React.FC<EpisodeDetailsPropsType> = observer(
  ({ episodeId, currentPage }) => {
    const { loading, error } = useFetchEpisode(episodeId, currentPage);
    const episodeData = episodeStore.getEpisode(episodeId, currentPage)!;

    if (loading) {
      return renderLoader();
    }
    if (error) {
      return renderErrorView();
    }

    if (!episodeData) {
      return <div>No Data Found</div>;
    }

    const { airDate, created, episode, name } = episodeData;

    return (
      <div className="flex flex-col gap-6 max-w-[400px] w-2/3 self-center">
        <div className="flex items-center gap-2 text-base  md:text-lg">
          <p className="text-slate-400 font-medium">Name:</p>
          <p className="text-slate-200 font-medium">{name}</p>
        </div>
        <div className="flex items-center gap-2 text-base  md:text-lg">
          <p className="text-slate-400 font-medium">Air Date:</p>
          <p className="text-slate-200 font-medium">{airDate}</p>
        </div>
        <div className="flex items-center gap-2 text-base  md:text-lg">
          <p className="text-slate-400 font-medium">Episode:</p>
          <p className="text-slate-200 font-medium">{episode}</p>
        </div>
        <div className="flex items-center gap-2 text-base  md:text-lg">
          <p className="text-slate-400 font-medium">Created:</p>
          <p className="text-slate-200 font-medium">
            {dayjs(new Date(created!)).format("DD MMM, YYYY")}
          </p>
        </div>
      </div>
    );
  }
);

export default EpisodeDetails;
