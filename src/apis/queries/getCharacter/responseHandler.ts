import characterStore from "../../../store/CharacterStore";
import { CharacterIdDataResponseType } from "../../../types";

export const onSuccess = (character: CharacterIdDataResponseType) => {
  const { id, location, origin } = character;
  const characterObject = characterStore.getCharacter(id);
  characterObject.editLocation(location);
  characterObject.editOrigin(origin);
};
