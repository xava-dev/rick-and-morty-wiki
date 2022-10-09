import EpisodeCard from "./EpisodeCard";
import { GET_EPISODES_BY_CHARACTER } from "../graphql/queries";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useQuery } from "@apollo/client";

export const EpisodeDataWithSearch = ({ search }: { search: string }) => {
  const { data, loading, error } = useQuery(GET_EPISODES_BY_CHARACTER, {
    variables: { name: search },
  });

  const skeletonArray = Array.from(Array(20).keys());

  if (loading)
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
        {skeletonArray.map((item: any, index: number) => {
          return <EpisodeCard key={index} loading={true} name="" episode="" />;
        })}
      </div>
    );
  if (error) return <p>{error?.message}</p>;

  const episodesByChar = data?.characters.results[0]?.episode;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
      {episodesByChar?.map((episode: any, index: number) => {
        return (
          <EpisodeCard
            key={index}
            name={episode.name}
            episode={episode.episode}
            loading={false}
          />
        );
      }) || (
        <p className="mx-auto text-rm">
          No episodes found. Try a different search.
        </p>
      )}
    </div>
  );
};

const EpisodesByCharacterSection = () => {
  let [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        placeholder="Search episodes by character..."
      />
      <EpisodeDataWithSearch search={search} />
    </>
  );
};

export default EpisodesByCharacterSection;
