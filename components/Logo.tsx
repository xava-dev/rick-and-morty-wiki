import Image from "next/image";

const Logo = () => {
  return (
    <div className="mx-auto mt-4 mb-2 lg:mt-6 lg:mb-4">
      <Image
        src="/rickandmorty.svg"
        width={600}
        height={200}
        alt="Rick and Morty logo"
      />
    </div>
  );
};

export default Logo;
