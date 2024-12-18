import { useQuery, NetworkStatus } from "@apollo/client";

import { GET_EPISODES } from "./getEpisodesQuery";
import { FetchEpisodesHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useFetchEpisodes: FetchEpisodesHookType = () => {
  const { loading, error, refetch, networkStatus } = useQuery(GET_EPISODES, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    variables: {
      page: 1,
    },
    onCompleted: (data): void => {
      const { episodes } = data;
      onSuccess(episodes);
    },
  });
  const refetchLoading: boolean = NetworkStatus.refetch === networkStatus;
  return { loading, error, refetch, refetchLoading };
};
export default useFetchEpisodes;
