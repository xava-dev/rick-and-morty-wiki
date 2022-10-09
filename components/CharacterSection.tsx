import EpisodeCard from "./EpisodeCard";
import { GET_CHARACTERS_BY_NAME } from "../graphql/queries";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import CharacterCard from "./CharacterCard";

export const CharacterDataWithSearch = (props: any) => {
  const { search } = props;

  const { data, loading, error } = useQuery(GET_CHARACTERS_BY_NAME, {
    variables: { name: search },
  });

  const skeletonArray = Array.from(Array(4).keys());

  if (loading)
    return (
      <div className="grid md:grid-cols-2 gap-4 my-10 lg:mx-20">
        {skeletonArray.map((character: any, index: number) => {
          return <CharacterCard key={index} loading={true} />;
        })}
      </div>
    );
  if (error) return <p>{error?.message}</p>;

  const characters = data?.characters.results;

  return (
    <div className="grid md:grid-cols-2 gap-4 my-10 lg:mx-20">
      {characters?.map((character: any, index: number) => {
        return (
          <CharacterCard
            key={index}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            origin={character.origin.name}
            location={character.location.name}
            image={character.image}
          />
        );
      }) || (
        <p className="mx-auto">No results found. Try a different search.</p>
      )}
    </div>
  );
};

const CharacterSection = () => {
  let [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        placeholder="Search characters by name..."
      />
      <CharacterDataWithSearch search={search} />
    </>
  );
};

export default CharacterSection;
