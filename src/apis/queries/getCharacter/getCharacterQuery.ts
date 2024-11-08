import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query Query($characterId: ID!) {
    character(id: $characterId) {
      id
      status
      name
      image
      gender
      location {
        name
        id
      }
      origin {
        name
        id
      }
    }
  }
`;
