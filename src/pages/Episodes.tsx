import React, { useEffect, useState } from "react";
import useFetchEpisodes from "../apis/queries/getEpisodes/useFetchEpisodes";
import { observer } from "mobx-react-lite";
import episodeStore from "../store/EpisodeStore";
import Episode from "../components/Episode";
import EpisodeModal from "../components/EpisodeModal";
import { ReactElementFunctionType, VoidFunctionType } from "../types";
import Loader from "../components/Loader";
import EpisodesTab from "../components/EpisodesTab";

const renderLoader: ReactElementFunctionType = () => {
  return (
    <div className="flex my-auto items-center justify-center h-[400px]">
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

const Episodes: React.FC = observer(() => {
  const [showEpisodeModal, setShowEpisodeModal] = useState<boolean>(false);
  const [episodeId, setEpisodeId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { loading, error, fetchMore, fetchMoreLoading } = useFetchEpisodes();
  const pagination = episodeStore.paginationData;
  const { next, totalPages } = pagination;
  const page = next ? next - 1 : totalPages;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const handleEpisodeModalClose: VoidFunctionType = () => {
    setShowEpisodeModal(false);
    setEpisodeId(null);
  };

  const renderEpisodeModal: ReactElementFunctionType = () => {
    if (showEpisodeModal && episodeId) {
      return (
        <EpisodeModal
          currentPage={currentPage}
          episodeId={episodeId}
          close={() => handleEpisodeModalClose()}
        />
      );
    }
    return <></>;
  };

  const renderEpisodes: ReactElementFunctionType = () => {
    if (loading || fetchMoreLoading) {
      return renderLoader();
    }
    if (error) {
      return renderErrorView();
    }
    const episodes = episodeStore.retrievePageEpisodes(currentPage);
    if (episodes) {
      return (
        <ul className="flex flex-col md:flex-row flex-wrap gap-4 mt-4 ">
          {episodes.map((episode) => {
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
    }
    return <></>;
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
      <EpisodesTab
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchMore={fetchMore}
      />
    </div>
  );
});

export default Episodes;
