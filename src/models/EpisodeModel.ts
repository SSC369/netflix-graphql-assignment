import { makeAutoObservable } from "mobx";

class EpisodeModel {
  id: string;
  name: string;
  airDate: string | null = null;
  episode: string | null = null;
  created: string | null = null;
  constructor(id: string, name: string) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.id = id;
    this.name = name;
  }

  editEpisode(airDate: string, created: string, episode: string) {
    this.airDate = airDate;
    this.episode = episode;
    this.created = created;
  }
}

export default EpisodeModel;
