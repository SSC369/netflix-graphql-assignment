import { makeAutoObservable } from "mobx";

class EpisodeModel {
  id: string;
  name: string;
  airDate: string | undefined = undefined;
  episode: string | undefined = undefined;
  created: string | undefined = undefined;
  constructor(id: string, name: string) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.id = id;
    this.name = name;
  }

  editEpisode(airDate?: string, created?: string, episode?: string) {
    this.airDate = airDate;
    this.episode = episode;
    this.created = created;
  }
}

export default EpisodeModel;
