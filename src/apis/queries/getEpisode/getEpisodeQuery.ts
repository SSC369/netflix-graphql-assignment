import { gql } from "@apollo/client";

export const GET_EPISODE = gql`
  query Query($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      name
      created
      episode
      air_date
    }
  }
`;
