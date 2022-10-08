const EpisodeCard = (props: any) => {
  const { name, episode } = props;

  return (
    <div className="cursor-pointer bg-rm/10 hover:bg-rm/30 p-6 rounded-md border-yellow-300">
      <h2 className="text-xl font-bold text-rm">{name}</h2>
      <p className="text-rm/50">{episode}</p>
    </div>
  );
};

export default EpisodeCard;
