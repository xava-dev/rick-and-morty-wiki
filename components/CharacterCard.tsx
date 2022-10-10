import Image from "next/image";

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  loading: boolean;
}

const CharacterCard = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  loading,
}: Character) => {
  if (loading)
    return (
      <div className="flex flex-col xl:flex-row bg-rm/10 rounded-lg animate-pulse">
        <div className="w-full xl:w-[300px] h-[300px] bg-rm/20 rounded-t-lg xl:rounded-l-lg xl:rounded-r-none"></div>
        <div className="w-full xl:w-[300px] h-[300px] flex flex-col pt-8 px-6 -mt-2 rounded-lg">
          <div className="text-xl font-bold bg-rm/20 animate-pulse w-2/3 h-6 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
          <div className="bg-rm/10 mt-2 animate-pulse w-1/4 xl:w-1/3 h-4 rounded-md"></div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col xl:max-h-[300px] xl:flex-row bg-rm/10 hover:bg-rm/20 rounded-lg transition-all duration-200">
      <div className="min-w-[300px] min-h-[300px] xl:max-w-[300px]">
        <Image
          src={image}
          width={600}
          height={600}
          alt={name}
          className="rounded-t-lg xl:rounded-l-lg xl:rounded-r-none"
        />
      </div>
      <div className="px-6 pt-2 pb-6 xl:pb-0 xl:pt-6">
        <h3 className="flex items-center text-xl xl:text-2xl font-bold text-rm">
          <span
            className={`${
              status === "Alive"
                ? "bg-green-600"
                : status === "Dead"
                ? "bg-red-600"
                : "bg-gray-600"
            }
            h-2 w-2 xl:h-3 xl:w-3 rounded-full mr-2`}
          ></span>
          {name}
        </h3>
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Species & Gender
        </p>
        <p className="text-rm/75">
          {species} - {gender}
        </p>
        {type ? (
          <>
            <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
              Type / subspecies
            </p>
            <p className="text-rm/75">{type}</p>
          </>
        ) : (
          ""
        )}
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Origin location
        </p>
        <p className="text-rm/75">{origin}</p>
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Last known location
        </p>
        <p className="text-rm/75">{location}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
