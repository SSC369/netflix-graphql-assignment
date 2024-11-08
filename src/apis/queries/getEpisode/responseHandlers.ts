import { formatEpisodes } from "../../../factories/episodeFactory";
import episodeStore from "../../../store/EpisodeStore";
import { GetEpisodeSuccessFunctionType } from "../../../types";

export const onSuccess: GetEpisodeSuccessFunctionType = (
  episodeData,
  currentPage
) => {
  const formattedEpisodeData = formatEpisodes(episodeData);
  const { id, airDate, created, episode } = formattedEpisodeData;
  const episodeObject = episodeStore.getEpisode(id, currentPage)!;
  episodeObject.editEpisode(airDate, created, episode);
};
