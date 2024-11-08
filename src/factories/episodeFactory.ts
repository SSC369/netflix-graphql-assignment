import { FormatEpisodesType } from "../types";

export const formatEpisodes: FormatEpisodesType = (episodeData) => {
  const { air_date, created, episode, id, name } = episodeData;
  return {
    created,
    episode,
    id,
    name,
    airDate: air_date,
  };
};
