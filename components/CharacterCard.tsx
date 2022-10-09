import Image from "next/image";

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
}: {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  loading: boolean;
}) => {
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
          <p className="bg-rm/10 mt-2 animate-pulse w-1/6 h-4 rounded-md"></p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-row bg-rm/10 hover:bg-rm/20 rounded-lg transition-all duration-200">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="rounded-l-lg"
      />
      <div className="flex flex-col px-6 pt-4">
        <h2 className="text-2xl font-bold text-rm">{name}</h2>
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Status
        </p>
        <p className="text-rm/75">{status}</p>
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Species
        </p>
        <p className="text-rm/75">{species}</p>
        {type ? (
          <>
            <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
              Type
            </p>
            <p className="text-rm/75">{type}</p>
          </>
        ) : (
          ""
        )}
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Gender
        </p>
        <p className="text-rm/75">{gender}</p>
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Origin
        </p>
        <p className="text-rm/75">{origin}</p>
        <p className="text-rm/25 text-[10px] font-bold uppercase mt-2">
          Location
        </p>
        <p className="text-rm/75">{location}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
