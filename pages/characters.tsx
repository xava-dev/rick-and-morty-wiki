import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavigationTabs from "../components/NavigationTabs";
import EpisodesByCharacterSection from "../components/EpisodesByCharacterSection";
import CharacterSection from "../components/CharacterSection";

const Characters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta
          name="description"
          content="Search episodes played by certain characters from Rick and Morty"
        />
        <link rel="icon" href="/rickandmorty.png" />
      </Head>

      <main className="w-full flex flex-col justify-center px-6">
        <div className="mx-auto my-8">
          <Image
            src="/rickandmorty.svg"
            width={600}
            height={200}
            alt="Rick and Morty logo"
          />
        </div>
        <NavigationTabs />
        <CharacterSection />
      </main>
    </>
  );
};

export default Characters;