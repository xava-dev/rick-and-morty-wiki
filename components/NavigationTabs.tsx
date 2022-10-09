import Link from "next/link";

const NavigationTabs = () => {
  return (
    <div className="mx-auto flex flex-row mb-6 space-x-6">
      <Link href="/">
        <a>Episodes</a>
      </Link>
      <Link href="/episodes">
        <a>Episodes with Character</a>
      </Link>
      <Link href="/characters">
        <a>Character</a>
      </Link>
    </div>
  );
};
export default NavigationTabs;
