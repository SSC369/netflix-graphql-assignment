import { formatEpisodes } from "../../../factories/episodeFactory";
import episodeStore from "../../../store/EpisodeStore";
import { GetEpisodeSuccessFunctionType } from "../../../types";

export const onSuccess: GetEpisodeSuccessFunctionType = (episodeData) => {
  const formattedEpisodeData = formatEpisodes([episodeData])[0];
  episodeStore.setEpisode(formattedEpisodeData);
};
