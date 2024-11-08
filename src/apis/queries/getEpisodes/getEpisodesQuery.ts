import { DocumentNode, gql } from "@apollo/client";

export const GET_EPISODES: DocumentNode = gql`
  query Query($page: Int) {
    episodes(page: $page) {
      info {
        count
        next
        pages
        prev
      }
      results {
        name
        id
        episode
        created
        air_date
      }
    }
  }
`;
