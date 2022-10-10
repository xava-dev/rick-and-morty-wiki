import type { NextPage } from "next";
import Head from "next/head";
import NavigationTabs from "../components/NavigationTabs";
import CharacterSection from "../components/CharacterSection";
import Logo from "../components/Logo";

const Characters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Characters | Rick and Morty Wiki</title>
        <meta
          name="description"
          content="Search characters from Rick and Morty"
        />
        <link rel="icon" href="/rickandmorty.png" />
      </Head>

      <main className="w-full flex flex-col justify-center px-6">
        <Logo />
        <NavigationTabs />
        <CharacterSection />
      </main>
    </>
  );
};

export default Characters;
