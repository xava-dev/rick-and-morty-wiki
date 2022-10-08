const EpisodeCard = (props: any) => {
  const { name, episode } = props;

  if (name === "loadingskeleton")
    return (
      <div className="cursor-pointer bg-rm/10 p-6 rounded-md animate-pulse">
        <h2 className="text-xl font-bold bg-rm/20 animate-pulse w-full h-6 rounded-lg"></h2>
        <p className="bg-rm/10 mt-2 animate-pulse w-1/4 h-4 rounded-md"></p>
      </div>
    );

  return (
    <div className="cursor-pointer bg-rm/10 hover:bg-rm/30 p-6 rounded-md">
      <h2 className="text-xl font-bold text-rm">{name}</h2>
      <p className="text-rm/50">{episode}</p>
    </div>
  );
};

export default EpisodeCard;
