import { DocumentNode, gql } from "@apollo/client";

export const GET_EPISODES: DocumentNode = gql`
  query Query {
    episodes {
      info {
        next
        pages
        prev
        count
      }
      results {
        air_date
        name
        id
        episode
        created
      }
    }
  }
`;
