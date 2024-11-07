import characterStore from "../../../store/CharacterStore";
import { GetCharactersSuccessFunctionType } from "../../../types";

export const onSuccess: GetCharactersSuccessFunctionType = (charactersData) => {
  characterStore.addCharactersIntoStore(charactersData);
};
