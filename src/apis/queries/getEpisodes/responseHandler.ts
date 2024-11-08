import episodeStore from "../../../store/EpisodeStore";
import { EpisodeResponseDataType, EpisodesInfoType } from "../../../types";

interface GetEpisodesSuccessDataType {
  (episodeData: {
    info: EpisodesInfoType;
    results: EpisodeResponseDataType[];
  }): void;
}

export const onSuccess: GetEpisodesSuccessDataType = (episodesData) => {
  const { info, results } = episodesData;
  episodeStore.addEpisodes(results, info);
};
