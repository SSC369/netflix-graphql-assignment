import { formatEpisodes } from "../../../factories/episodeFactory";
import episodeStore from "../../../store/EpisodeStore";
import { GetEpisodesSuccessFunctionType } from "../../../types";

export const onSuccess: GetEpisodesSuccessFunctionType = (episodesData) => {
  const { info, results } = episodesData;
  const formattedEpisodeResults = formatEpisodes(results);
  episodeStore.addEpisodes(formattedEpisodeResults, info);
};
