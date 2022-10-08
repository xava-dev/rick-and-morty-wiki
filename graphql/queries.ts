import { gql } from "@apollo/client";

export const GET_EPISODES_WITH_NAME_QUERY = gql`
  query getEpisode {
    episodes {
      results {
        name
        episode
      }
    }
  }
`;

export const GET_EPISODES_WITH_CHARACTER_NAME_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;
