import { makeAutoObservable } from "mobx";
import { CharacterLocationType, CharacterOriginType } from "../types";

class CharacterModel {
  id: string;
  gender: string;
  image: string;
  name: string;
  status: string;
  location: CharacterLocationType | null = null;
  origin: CharacterOriginType | null = null;
  constructor(
    id: string,
    gender: string,
    image: string,
    name: string,
    status: string
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.id = id;
    this.gender = gender;
    this.image = image;
    this.name = name;
    this.status = status;
  }

  editOrigin(origin: CharacterOriginType): void {
    const { id, name } = origin;
    this.origin = { id, name };
  }

  editLocation(location: CharacterLocationType): void {
    const { id, name } = location;
    this.location = { id, name };
  }
}

export default CharacterModel;
