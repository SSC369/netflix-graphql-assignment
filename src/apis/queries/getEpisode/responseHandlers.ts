import { formatEpisodes } from "../../../factories/episodeFactory";
import episodeStore from "../../../store/EpisodeStore";
import { GetEpisodeSuccessHandlerType } from "../../../types";

export const onSuccess: GetEpisodeSuccessHandlerType = (
  episodeData,
  currentPage
) => {
  const formattedEpisodeData = formatEpisodes(episodeData);
  const { id, airDate, created, episode } = formattedEpisodeData;
  const episodeObject = episodeStore.getEpisode(id, currentPage)!;
  episodeObject.editEpisode(airDate, created, episode);
};
