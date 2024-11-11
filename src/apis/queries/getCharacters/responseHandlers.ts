import characterStore from "../../../store/CharacterStore";
import { GetCharactersSuccessHandlerType } from "../../../types";

export const onSuccess: GetCharactersSuccessHandlerType = (charactersData) => {
  characterStore.addCharactersIntoStore(charactersData);
};
