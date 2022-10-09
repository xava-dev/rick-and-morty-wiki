import EpisodeCard from "./EpisodeCard";
import { GET_EPISODES_BY_CHARACTER } from "../graphql/queries";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useQuery } from "@apollo/client";

export const EpisodeDataWithSearch = (props: any) => {
  const { search } = props;

  const {
    data: dataChar,
    loading: loadingChar,
    error: errorChar,
  } = useQuery(GET_EPISODES_BY_CHARACTER, {
    variables: { name: search },
  });

  const skeletonArray = Array.from(Array(20).keys());

  if (loadingChar)
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
        {skeletonArray.map((episode: any, index: number) => {
          return <EpisodeCard key={index} loading={true} />;
        })}
      </div>
    );
  if (errorChar) return <p>{errorChar?.message}</p>;

  const episodesByChar = dataChar?.characters.results[0]?.episode;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
      {episodesByChar?.map((episode: any, index: number) => {
        return (
          <EpisodeCard
            key={index}
            name={episode.name}
            episode={episode.episode}
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
