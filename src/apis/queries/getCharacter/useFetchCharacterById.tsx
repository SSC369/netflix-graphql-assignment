import { useLazyQuery } from "@apollo/client";

import { GET_CHARACTER } from "./getCharacterQuery";
import {
  CharacterIdDataResponseType,
  FetchCharacterByIdHookType,
} from "../../../types";
import { onSuccess } from "./responseHandler";

const useFetchCharacterById: FetchCharacterByIdHookType = () => {
  const [getCharacter, { loading, error }] = useLazyQuery(GET_CHARACTER, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      const character: CharacterIdDataResponseType = data.character;
      onSuccess(character);
    },
  });
  return { loading, error, getCharacter };
};

export default useFetchCharacterById;
