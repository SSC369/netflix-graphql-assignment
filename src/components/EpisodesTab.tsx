import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { observer } from "mobx-react-lite";

import episodeStore from "../store/EpisodeStore";
import {
  EpisodesResponseDataType,
  EpisodesTabPropsType,
  ReactElementFunctionType,
  VoidFunctionType,
} from "../types";

const EpisodesTab: React.FC<EpisodesTabPropsType> = observer(
  ({ fetchMore, currentPage, setCurrentPage }) => {
    const pagination = episodeStore.paginationData;
    const { totalPages } = pagination;
    const pagesMap = episodeStore.pageEpisodes;

    const handlePageClick = (page: number): void => {
      setCurrentPage(page);
      if (!pagesMap.has(page)) {
        fetchMore({
          variables: {
            page: page,
          },
        }).then(({ data }) => {
          const { episodes } = data;
          handleFetchMoreSuccess(episodes);
        });
      }
    };

    const handleFetchMoreSuccess = (
      episodes: EpisodesResponseDataType
    ): void => {
      const { info, results } = episodes;
      episodeStore.addEpisodes(results, info);
    };

    const handleNextPageClick: VoidFunctionType = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        if (!pagesMap.has(currentPage + 1)) {
          fetchMore({
            variables: {
              page: currentPage + 1,
            },
          }).then(({ data }) => {
            const { episodes } = data;
            handleFetchMoreSuccess(episodes);
          });
        }
      }
    };

    const handlePrevPageClick: VoidFunctionType = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        if (!pagesMap.has(currentPage - 1)) {
          fetchMore({
            variables: {
              page: currentPage - 1,
            },
          }).then(({ data }) => {
            const { episodes } = data;
            handleFetchMoreSuccess(episodes);
          });
        }
      }
    };

    const getTabs = (): JSX.Element[] => {
      const tabs = [];
      for (let i = 1; i <= totalPages; i++) {
        const tab = (
          <li onClick={() => handlePageClick(i)}>
            <button
              className={`font-semibold text-lg h-10 min-w-10 rounded-full text-white cursor-pointer  flex items-center justify-center ${
                currentPage === i
                  ? "bg-netflix opacity-100"
                  : "bg-slate-600 opacity-50"
              }`}
            >
              {i}
            </button>
          </li>
        );
        tabs.push(tab);
      }
      return tabs;
    };

    const renderPageTabs: ReactElementFunctionType = () => {
      const tabs = getTabs();
      return (
        <ul className="flex items-center gap-2 max-w-[400px] overflow-auto">
          {...tabs}
        </ul>
      );
    };

    return (
      <div className="mt-6 w-fit mx-auto flex items-center gap-6">
        <button onClick={handlePrevPageClick}>
          <FaChevronLeft className="text-xl text-white" />
        </button>
        {renderPageTabs()}

        <button onClick={handleNextPageClick}>
          <FaChevronRight className="text-xl text-white" />
        </button>
      </div>
    );
  }
);

export default EpisodesTab;
