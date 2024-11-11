import React from "react";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";

import { EpisodeDetailsPropsType, ReactElementFunctionType } from "../types";
import episodeStore from "../store/EpisodeStore";
import useFetchEpisode from "../apis/queries/getEpisode/useFetchEpisode";
import Loader from "./Loader";
import { EPISODE_CREATED_DATE_FORMAT } from "../contants";

const EpisodeDetails: React.FC<EpisodeDetailsPropsType> = observer(
  ({ episodeId, currentPage }) => {
    const { loading, error, refetch } = useFetchEpisode(episodeId, currentPage);
    const episodeData = episodeStore.getEpisode(episodeId, currentPage)!;

    const renderErrorView: ReactElementFunctionType = () => {
      return (
        <div>
          <h1>Something went wrong !!!</h1>
          <button onClick={refetch}>Retry</button>
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

    if (error) {
      return renderErrorView();
    }
    if (loading) {
      return renderLoader();
    }

    if (!episodeData) {
      return <div>No Data Found !!!</div>;
    }

    const { airDate, created, episode, name } = episodeData;

    const renderEpisodeDetail = (value: string | undefined, name: string) => {
      return (
        <div className="flex items-center gap-2 text-base  md:text-lg">
          <p className="text-slate-400 font-medium first-letter:capitalize">
            {name}:
          </p>
          <p className="text-slate-200 font-medium">{value}</p>
        </div>
      );
    };

    return (
      <div className="flex flex-col gap-6 max-w-[400px] w-2/3 self-center">
        {renderEpisodeDetail(name, "Name")}
        {renderEpisodeDetail(airDate, "Air Date")}
        {renderEpisodeDetail(episode, "Episode")}
        {renderEpisodeDetail(
          dayjs(new Date(created!)).format(EPISODE_CREATED_DATE_FORMAT),
          "Created"
        )}
      </div>
    );
  }
);

export default EpisodeDetails;
