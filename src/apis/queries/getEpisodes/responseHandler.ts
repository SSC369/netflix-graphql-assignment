import episodeStore from "../../../store/EpisodeStore";
import { GetEpisodesSuccessHandlerType } from "../../../types";

export const onSuccess: GetEpisodesSuccessHandlerType = (episodesData) => {
  const { info, results } = episodesData;
  episodeStore.addEpisodes(results, info);
};
