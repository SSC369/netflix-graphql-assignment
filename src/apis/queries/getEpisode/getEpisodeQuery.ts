import { DocumentNode, gql } from "@apollo/client";

export const GET_EPISODE: DocumentNode = gql`
  query Query($episodeId: ID!) {
    episode(id: $episodeId) {
      air_date
      created
      episode
      id
      name
    }
  }
`;
