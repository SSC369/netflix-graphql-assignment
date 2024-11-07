class CharacterModel {
  id: string;
  gender: string;
  image: string;
  name: string;
  status: string;
  constructor(
    id: string,
    gender: string,
    image: string,
    name: string,
    status: string
  ) {
    this.id = id;
    this.gender = gender;
    this.image = image;
    this.name = name;
    this.status = status;
  }
}

export default CharacterModel;
