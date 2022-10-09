import Link from "next/link";
import { useRouter } from "next/router";

const NavigationTabs = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex flex-row mb-6 space-x-6">
      <Link href="/">
        <a
          className={`${
            router.pathname == "/"
              ? "text-white bg-rm/50"
              : "text-rm/50 hover:bg-rm/10 hover:text-rm"
          } px-6 py-2 rounded-md transition-all duration-200`}
        >
          Episodes
        </a>
      </Link>
      <Link href="/episodes">
        <a
          className={`${
            router.pathname == "/episodes"
              ? "text-white bg-rm/50"
              : "text-rm/50 hover:bg-rm/10 hover:text-rm"
          } px-6 py-2 rounded-md transition-all duration-200`}
        >
          Episodes with Character
        </a>
      </Link>
      <Link href="/characters">
        <a
          className={`${
            router.pathname == "/characters"
              ? "text-white bg-rm/50"
              : "text-rm/50 hover:bg-rm/10 hover:text-rm"
          } px-6 py-2 rounded-md transition-all duration-200`}
        >
          Characters
        </a>
      </Link>
    </div>
  );
};
export default NavigationTabs;
