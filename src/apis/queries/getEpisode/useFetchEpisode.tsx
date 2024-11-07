import { useQuery } from "@apollo/client";

import { GET_EPISODE } from "./getEpisodeQuery";
import { FetchEpisodeHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useFetchEpisode: FetchEpisodeHookType = (episodeId) => {
  const { loading, error } = useQuery(GET_EPISODE, {
    variables: {
      episodeId,
    },
    onCompleted: ({ episode }) => {
      onSuccess(episode);
    },
  });

  return { loading, error };
};

export default useFetchEpisode;
