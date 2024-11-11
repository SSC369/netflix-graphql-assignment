import { DocumentNode, gql } from "@apollo/client";

export const GET_CHARACTER: DocumentNode = gql`
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
