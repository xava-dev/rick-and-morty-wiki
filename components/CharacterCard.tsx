import Image from "next/image";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;

const CharacterCard = (props: any) => {
  const { name, status, species, type, origin, location, image, loading } =
    props;

  if (loading)
    return (
      <div className="cursor-pointer bg-rm/10 h-[300px] rounded-md animate-pulse">
        <div className="w-[300px] h-[300px] bg-rm/20"></div>
        <div className="flex flex-col p-6 mt-4 ml-[300px] -mt-[300px]">
          <h2 className="text-xl font-bold bg-rm/20 animate-pulse w-1/2 h-6 rounded-lg"></h2>
          <p className="bg-rm/10 mt-2 animate-pulse w-1/6 h-4 rounded-md"></p>
          <p className="bg-rm/10 mt-2 animate-pulse w-1/6 h-4 rounded-md"></p>
          <p className="bg-rm/10 mt-2 animate-pulse w-1/6 h-4 rounded-md"></p>
          <p className="bg-rm/10 mt-2 animate-pulse w-1/6 h-4 rounded-md"></p>
          <p className="bg-rm/10 mt-2 animate-pulse w-1/6 h-4 rounded-md"></p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-row cursor-pointer bg-rm/10 hover:bg-rm/30 rounded-md transition-all duration-200">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="rounded-l-md"
      />
      <div className="flex flex-col p-8">
        <h2 className="text-xl font-bold text-rm">{name}</h2>
        <p className="text-rm/50">Status: {status}</p>
        <p className="text-rm/50">Species: {species}</p>
        {type ? <p className="text-rm/50">Type: {type}</p> : ""}
        <p className="text-rm/50">Origin: {origin}</p>
        <p className="text-rm/50">Location: {location}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
