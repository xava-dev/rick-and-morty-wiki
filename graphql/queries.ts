import { gql } from "@apollo/client";

export const GET_EPISODE_BY_NAME = gql`
  query getEpisodeByName($name: String!) {
    episodes(filter: { name: $name }) {
      results {
        name
        episode
      }
    }
  }
`;

export const GET_EPISODE_BY_CODE = gql`
  query getEpisodeByCode($episode: String!) {
    episodes(filter: { episode: $episode }) {
      results {
        name
        episode
      }
    }
  }
`;

export const GET_EPISODES_BY_CHARACTER = gql`
  query getEpisodesByCharacter($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        episode {
          name
          episode
        }
      }
    }
  }
`;

export const GET_CHARACTERS_BY_NAME = gql`
  query getCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
