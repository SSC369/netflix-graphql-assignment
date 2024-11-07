import { useQuery } from "@apollo/client";

import { GET_EPISODES } from "./getEpisodesQuery";
import { FetchEpisodesHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useFetchEpisodes: FetchEpisodesHookType = () => {
  const { loading, error } = useQuery(GET_EPISODES, {
    onCompleted: ({ episodes }) => {
      onSuccess(episodes);
    },
  });

  return { loading, error };
};
export default useFetchEpisodes;
