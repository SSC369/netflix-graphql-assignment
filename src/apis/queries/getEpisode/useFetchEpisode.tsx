import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "./getEpisodeQuery";
import { FetchEpisodeHookType } from "../../../types";
import { onSuccess } from "./responseHandlers";

const useFetchEpisode: FetchEpisodeHookType = (episodeId, currentPage) => {
  const { loading, error,refetch } = useQuery(GET_EPISODE, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-only",
    variables: {
      episodeId,
    },
    onCompleted: ({ episode }) => {
      onSuccess(episode, currentPage);
    },
  });
  return { loading, error, refetch };
};
export default useFetchEpisode;
