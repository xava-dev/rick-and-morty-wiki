import Link from "next/link";
import { useRouter } from "next/router";

const NavigationTabs = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex flex-row mb-6">
      <Link href="/">
        <a
          className={`${
            router.pathname == "/"
              ? "text-rm border-b-2 border-b-rm"
              : "text-rm/50 hover:border-b-2 border-b-rm/50"
          } px-6 py-2 transition-all duration-200`}
        >
          Episodes
        </a>
      </Link>
      <Link href="/episodes">
        <a
          className={`${
            router.pathname == "/episodes"
              ? "text-rm border-b-2 border-b-rm"
              : "text-rm/50 hover:border-b-2 border-b-rm/50"
          } px-6 py-2 transition-all duration-200`}
        >
          Episodes with Character
        </a>
      </Link>
      <Link href="/characters">
        <a
          className={`${
            router.pathname == "/characters"
              ? "text-rm border-b-2 border-b-rm"
              : "text-rm/50 hover:border-b-2 border-b-rm/50"
          } px-6 py-2 transition-all duration-200`}
        >
          Characters
        </a>
      </Link>
    </div>
  );
};
export default NavigationTabs;
