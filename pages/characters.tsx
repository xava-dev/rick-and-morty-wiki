import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavigationTabs from "../components/NavigationTabs";
import CharacterSection from "../components/CharacterSection";

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
        <div className="mx-auto mt-6 mb-4">
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
