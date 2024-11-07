import { makeAutoObservable } from "mobx";
import EpisodeModel from "../models/EpisodeModel";
import { EpisodeType } from "../types";

class EpisodeStore {
  episodes: EpisodeModel[] = [];
  episode: EpisodeModel | null = null;
  totalPages: number = 0;
  hasNext: number | null = null;
  hasPrev: number | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setEpisode(episodeData: EpisodeType): void {
    const { id, airDate, name, episode, created } = episodeData;
    this.episode = new EpisodeModel(id, name, airDate, episode, created);
  }

  addEpisode(
    id: string,
    name: string,
    airDate: string,
    episode: string,
    created: string
  ): void {
    this.episodes.push(new EpisodeModel(id, name, airDate, episode, created));
  }
  get episodesData(): EpisodeModel[] {
    return this.episodes;
  }
}

const episodeStore = new EpisodeStore();
export default episodeStore;
