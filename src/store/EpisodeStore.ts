import { makeAutoObservable } from "mobx";

import EpisodeModel from "../models/EpisodeModel";
import {
  EpisodesInfoType,
  EpisodesPaginationType,
  EpisodeType,
} from "../types";

class EpisodeStore {
  pagination: EpisodesPaginationType = {
    totalPages: 0,
    prev: null,
    next: null,
  };
  pageEpisodes: Map<number, EpisodeModel[]> = new Map();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getEpisode(episodeId: string, currentPage: number): EpisodeModel | undefined {
    return this.pageEpisodes
      .get(currentPage)!
      .find((episode) => episode.id === episodeId);
  }

  editEpisodesPagination(pagesInfo: EpisodesInfoType): void {
    const { next, prev, pages } = pagesInfo;
    this.pagination = {
      totalPages: pages,
      prev,
      next,
    };
  }

  get paginationData(): EpisodesPaginationType {
    return this.pagination;
  }

  addEpisodes(episdoes: EpisodeType[], pagesInfo: EpisodesInfoType): void {
    this.editEpisodesPagination(pagesInfo);
    const newEpisodes = episdoes.map((episodeData) => {
      const { id, created, name, airDate, episode } = episodeData;
      return new EpisodeModel(id, name, airDate, episode, created);
    });
    const { next, pages } = pagesInfo;
    const currentPage = next ? next - 1 : pages;
    if (!this.pageEpisodes.get(currentPage)) {
      this.pageEpisodes.set(currentPage, newEpisodes);
    }
  }

  retrievePageEpisodes(page: number): EpisodeModel[] {
    return this.pageEpisodes.get(page)!;
  }
}

const episodeStore = new EpisodeStore();
export default episodeStore;
