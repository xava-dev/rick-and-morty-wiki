import type { NextPage } from "next";
import Head from "next/head";
import NavigationTabs from "../components/NavigationTabs";
import EpisodesByCharacterSection from "../components/EpisodesByCharacterSection";
import Logo from "../components/Logo";

const EpisodesWithCharacter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Episodes by Characters | Rick and Morty Wiki</title>
        <meta
          name="description"
          content="Search episodes played by certain characters from Rick and Morty"
        />
        <link rel="icon" href="/rickandmorty.png" />
      </Head>

      <main className="w-full flex flex-col justify-center px-6">
        <Logo />
        <NavigationTabs />
        <EpisodesByCharacterSection />
      </main>
    </>
  );
};

export default EpisodesWithCharacter;
