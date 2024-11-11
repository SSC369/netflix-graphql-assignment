import { useQuery } from "@apollo/client";

import { FetchCharactersHookType } from "../../../types";
import { GET_CHARACTERS } from "./getCharactersQuery";
import { onSuccess } from "./responseHandlers";

const useFetchCharacters: FetchCharactersHookType = (episodeId) => {
  const { loading, error, refetch } = useQuery(GET_CHARACTERS, {
    fetchPolicy: "cache-and-network",
    variables: {
      episodeId,
    },
    onCompleted: ({ episode }) => {
      const { characters } = episode;
      onSuccess(characters);
    },
  });

  return { loading, error,refetch };
};

export default useFetchCharacters;
