class EpisodeModel {
  airDate: string;
  name: string;
  id: string;
  episode: string;
  created: string;
  constructor(
    id: string,
    name: string,
    airDate: string,
    episode: string,
    created: string
  ) {
    this.id = id;
    this.name = name;
    this.airDate = airDate;
    this.episode = episode;
    this.created = created;
  }
}

export default EpisodeModel;
