import Link from "next/link";
import { useRouter } from "next/router";

const NavigationTabs = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex flex-row mb-4 lg:mb-6">
      <Link href="/">
        <a
          className={`${
            router.pathname == "/"
              ? "text-rm border-b-2 border-b-rm"
              : "text-rm/50 hover:border-b-2 border-b-rm/50"
          } text-xs md:text-base px-2 lg:px-6 py-2 transition-all duration-200`}
        >
          <h2>Episodes</h2>
        </a>
      </Link>
      <Link href="/episodes">
        <a
          className={`${
            router.pathname == "/episodes"
              ? "text-rm border-b-2 border-b-rm"
              : "text-rm/50 hover:border-b-2 border-b-rm/50"
          } text-xs md:text-base px-2 lg:px-6 py-2 transition-all duration-200`}
        >
          <h2>Episodes with Character</h2>
        </a>
      </Link>
      <Link href="/characters">
        <a
          className={`${
            router.pathname == "/characters"
              ? "text-rm border-b-2 border-b-rm"
              : "text-rm/50 hover:border-b-2 border-b-rm/50"
          } text-xs md:text-base px-2 lg:px-6 py-2 transition-all duration-200`}
        >
          <h2>Characters</h2>
        </a>
      </Link>
    </div>
  );
};
export default NavigationTabs;
