import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props: any) => {
  const { placeholder } = props;
  return (
    <form className="mx-auto">
      <input
        onChange={(e) => props.setSearch(e.target.value)}
        type="search"
        placeholder={placeholder}
        className="w-80 lg:w-96 h-12 rounded-md px-4 bg-gray-700 placeholder:text-gray-500 border border-gray-700 focus:border-rm focus:bg-gray-900 text-rm outline-none transition-all duration-200"
      />
    </form>
  );
};

export default SearchBar;
