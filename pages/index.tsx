import type { NextPage } from "next";
import Head from "next/head";
import EpisodesSection from "../components/EpisodesSection";
import NavigationTabs from "../components/NavigationTabs";
import Logo from "../components/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Episodes | Rick and Morty Wiki</title>
        <meta
          name="description"
          content="Search episodes and characters from Rick and Morty"
        />
        <link rel="icon" href="/rickandmorty.png" />
      </Head>

      <main className="w-full flex flex-col justify-center px-6">
        <Logo />
        <NavigationTabs />
        <EpisodesSection />
      </main>
    </>
  );
};

export default Home;
