import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EpisodesSection from "../components/EpisodesSection";
import NavigationTabs from "../components/NavigationTabs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta
          name="description"
          content="Search episodes and characters from Rick and Morty"
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
        <EpisodesSection />
      </main>
    </>
  );
};

export default Home;
