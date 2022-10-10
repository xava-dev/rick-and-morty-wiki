interface Episode {
  name: string;
  episode: string;
  airdate: string;
  loading: boolean;
}

const EpisodeCard = ({ name, episode, airdate, loading }: Episode) => {
  if (loading)
    return (
      <div className="cursor-pointer bg-rm/10 p-6 rounded-md animate-pulse">
        <h2 className="text-xl font-bold bg-rm/20 animate-pulse w-full h-6 rounded-lg"></h2>
        <p className="bg-rm/10 mt-2 animate-pulse w-2/3 h-4 rounded-md"></p>
      </div>
    );

  return (
    <div className="bg-rm/10 hover:bg-rm/20 p-6 rounded-lg transition-all duration-200">
      <h2 className="text-xl font-bold text-rm">{name}</h2>
      <p className="text-rm/50">
        {episode} - {airdate}
      </p>
    </div>
  );
};

export default EpisodeCard;
