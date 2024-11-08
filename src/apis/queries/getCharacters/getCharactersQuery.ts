import { DocumentNode, gql } from "@apollo/client";

export const GET_CHARACTERS: DocumentNode = gql`
  query Query($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      characters {
        gender
        id
        image
        name
        status
      }
    }
  }
`;
