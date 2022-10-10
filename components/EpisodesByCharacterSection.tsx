import EpisodeCard from "./EpisodeCard";
import { GET_EPISODES_BY_CHARACTER } from "../graphql/queries";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useQuery } from "@apollo/client";

interface Episode {
  name: string;
  episode: string;
  air_date: string;
  loading: boolean;
}

export const EpisodeDataWithSearch = ({ search }: { search: string }) => {
  const { data, loading, error } = useQuery(GET_EPISODES_BY_CHARACTER, {
    variables: { name: search },
  });

  const skeletonArray = Array.from(Array(20).keys());

  if (loading)
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 my-10 lg:mx-20">
        {skeletonArray.map((item: {}, index: number) => {
          return (
            <EpisodeCard
              key={index}
              loading={true}
              name=""
              episode=""
              airdate=""
            />
          );
        })}
      </div>
    );
  if (error) return <p className="text-rm">{error?.message}</p>;

  const episodesByChar = data?.characters.results[0]?.episode;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 my-10 lg:mx-20">
      {episodesByChar?.map((episode: Episode, index: number) => {
        return (
          <EpisodeCard
            key={index}
            name={episode.name}
            episode={episode.episode}
            airdate={episode.air_date}
            loading={false}
          />
        );
      }) || (
        <p className="text-rm mx-auto col-span-4">
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
