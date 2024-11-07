import React, { useState } from "react";
import useFetchEpisodes from "../apis/queries/getEpisodes/useFetchEpisodes";
import { observer } from "mobx-react-lite";
import episodeStore from "../store/EpisodeStore";
import Episode from "../components/Episode";
import EpisodeModal from "../components/EpisodeModal";
import { ReactElementFunctionType, VoidFunctionType } from "../types";

const Episodes: React.FC = observer(() => {
  const { loading, error } = useFetchEpisodes();
  const [showEpisodeModal, setShowEpisodeModal] = useState<boolean>(false);
  const [episodeId, setEpisodeId] = useState<string | null>(null);

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

  const handleEpisodeModalClose: VoidFunctionType = () => {
    setShowEpisodeModal(false);
    setEpisodeId(null);
  };

  const renderEpisodeModal: ReactElementFunctionType = () => {
    if (showEpisodeModal && episodeId) {
      return (
        <EpisodeModal
          episodeId={episodeId}
          close={() => handleEpisodeModalClose()}
        />
      );
    }
    return <></>;
  };

  const renderEpisodes: ReactElementFunctionType = () => {
    return (
      <ul className="flex flex-col md:flex-row flex-wrap gap-4 mt-4 ">
        {episodeStore.episodesData.map((episode) => {
          return (
            <Episode
              key={episode.id}
              episode={episode}
              setShowEpisodeModal={setShowEpisodeModal}
              setEpisodeId={setEpisodeId}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="p-6 min-h-dvh">
      <div className="flex items-center gap-4">
        <h1 className="text-white font-medium text-2xl border-r-[1px] border-r-white pr-4">
          Episodes
        </h1>
        <p className="font-medium text-lg text-gray-400">Ricky and Morty</p>
      </div>

      {renderEpisodes()}
      {renderEpisodeModal()}
    </div>
  );
});

export default Episodes;
