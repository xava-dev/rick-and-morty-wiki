import EpisodeCard from "./EpisodeCard";
import {
  GET_EPISODE_BY_NAME,
  GET_EPISODE_BY_CODE,
  GET_EPISODES_BY_CHARACTER,
} from "../graphql/queries";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useQuery } from "@apollo/client";

export const EpisodeDataWithSearch = (props: any) => {
  const { search } = props;

  const {
    data: dataName,
    loading: loadingName,
    error: errorName,
  } = useQuery(GET_EPISODE_BY_NAME, {
    variables: { name: search },
  });

  const {
    data: dataCode,
    loading: loadingCode,
    error: errorCode,
  } = useQuery(GET_EPISODE_BY_CODE, {
    variables: { episode: search },
  });

  const skeletonArray = Array.from(Array(20).keys());

  if (loadingName || loadingCode)
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
        {skeletonArray.map((episode: any, index: number) => {
          return <EpisodeCard key={index} loading={true} />;
        })}
      </div>
    );
  if (errorName || errorCode)
    return <p>{errorName?.message || errorCode?.message}</p>;

  const episodesByName = dataName?.episodes.results;
  const episodesByCode = dataCode?.episodes.results;

  let episodes;
  if (episodesByName.length > 0) {
    episodes = episodesByName;
  } else if (episodesByCode.length > 0) {
    episodes = episodesByCode;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:mx-20">
      {episodes?.map((episode: any, index: number) => {
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

const EpisodesSection = () => {
  let [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        placeholder="Search episodes by name or code..."
      />
      <EpisodeDataWithSearch search={search} />
    </>
  );
};

export default EpisodesSection;
