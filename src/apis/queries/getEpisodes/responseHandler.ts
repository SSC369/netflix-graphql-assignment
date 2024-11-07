import { formatEpisodes } from "../../../factories/episodeFactory";
import episodeStore from "../../../store/EpisodeStore";
import { GetEpisodesSuccessFunctionType } from "../../../types";

export const onSuccess: GetEpisodesSuccessFunctionType = (episodesData) => {
  const { info, results } = episodesData;
  const formattedEpisodeResults = formatEpisodes(results);
  formattedEpisodeResults.forEach((episodeData) => {
    const { id, created, name, airDate, episode } = episodeData;
    episodeStore.addEpisode(id, name, airDate, episode, created);
  });
};
