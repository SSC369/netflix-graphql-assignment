import characterStore from "../../../store/CharacterStore";
import { GetCharacterSuccessHandlerType } from "../../../types";

export const onSuccess: GetCharacterSuccessHandlerType = (character) => {
  const { id, location, origin } = character;
  const characterObject = characterStore.getCharacter(id);
  characterObject.editLocation(location);
  characterObject.editOrigin(origin);
};
