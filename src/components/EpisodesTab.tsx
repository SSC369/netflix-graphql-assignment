import React, { useEffect, useRef } from "react";
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
  ({ refetch, currentPage, setCurrentPage }) => {
    const pagination = episodeStore.paginationData;
    const { totalPages } = pagination;
    const pagesMap = episodeStore.pageEpisodes;
    const paginationContainerRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
      if (paginationContainerRef.current) {
        const currentTab = paginationContainerRef.current.children[
          currentPage - 1
        ] as HTMLElement;
        console.log(currentTab);
        currentTab?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, [currentPage]);

    const handlePageClick = (page: number): void => {
      setCurrentPage(page);
      if (!pagesMap.has(page)) {
        refetch({
          page: page,
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
          refetch({
            page: currentPage + 1,
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
          refetch({
            page: currentPage - 1,
          }).then(({ data }) => {
            const { episodes } = data;
            handleFetchMoreSuccess(episodes);
          });
        }
      }
    };

    const getTabs = (): JSX.Element[] => {
      const tabs = [];
      for (let page = 1; page <= totalPages; page++) {
        const tab = (
          <li onClick={() => handlePageClick(page)}>
            <button
              className={`font-semibold text-lg h-10 min-w-10 rounded-full text-white cursor-pointer  flex items-center justify-center ${
                currentPage === page
                  ? "bg-netflix opacity-100"
                  : "bg-slate-600 opacity-50"
              }`}
            >
              {page}
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
        <ul
          ref={paginationContainerRef}
          className="flex items-center gap-2 max-w-[100px] overflow-hidden"
        >
          {...tabs}
        </ul>
      );
    };

    return (
      <div className="absolute bottom-10 inset-x-0 mt-6 w-fit mx-auto flex items-center gap-6">
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
