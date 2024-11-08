import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "./getEpisodeQuery";
import { FetchEpisodeHookType } from "../../../types";
import { onSuccess } from "./responseHandlers";

const useFetchEpisode: FetchEpisodeHookType = (episodeId, currentPage) => {
  const { loading, error } = useQuery(GET_EPISODE, {
    fetchPolicy: "cache-and-network",
    variables: {
      episodeId,
    },
    onCompleted: ({ episode }) => {
      onSuccess(episode, currentPage);
    },
  });
  return { loading, error };
};
export default useFetchEpisode;
