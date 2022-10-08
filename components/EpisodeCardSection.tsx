import EpisodeCard from "./EpisodeCard";
import { Query } from "@apollo/client/react/components";
import { GET_EPISODES_WITH_NAME_QUERY } from "../graphql/queries";
import SearchBar from "./SearchBar";
import { useState } from "react";

const EpisodeCardSection = () => {
  let [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        placeholder="Search episodes by name or code..."
      />
      <Query query={GET_EPISODES_WITH_NAME_QUERY}>
        {({ data, loading, error }: any) => {
          if (loading)
            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
                <EpisodeCard name="loadingskeleton" />
              </div>
            );
          if (error) return <p>{error.message}</p>;
          const episodes = data?.episodes.results;

          return (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
              {episodes
                .filter(
                  (episode: any) =>
                    episode.name.toLowerCase().includes(search) ||
                    episode.episode.toLowerCase().includes(search)
                )
                .map((episode: any, index: number) => {
                  return (
                    <EpisodeCard
                      key={index}
                      name={episode.name}
                      episode={episode.episode}
                    />
                  );
                })}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default EpisodeCardSection;
