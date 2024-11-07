import { makeAutoObservable } from "mobx";
import CharacterModel from "../models/CharacterModel";
import { CharacterDataResponseType } from "../types";

class CharacterStore {
  characters: CharacterModel[] = [];
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  addCharacter(
    id: string,
    gender: string,
    image: string,
    name: string,
    status: string
  ) {
    this.characters.push(new CharacterModel(id, gender, image, name, status));
  }

  addCharactersIntoStore(charactersData: CharacterDataResponseType[]): void {
    const characterInstances = charactersData.map((character) => {
      const { id, gender, image, name, status } = character;
      return new CharacterModel(id, gender, image, name, status);
    });

    this.characters = [...characterInstances];
  }

  get charactersData(): CharacterModel[] {
    return this.characters;
  }
}
const characterStore = new CharacterStore();
export default characterStore;
