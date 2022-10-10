import { useState } from "react";

const SearchBar = ({
  placeholder,
  setSearch,
}: {
  placeholder: string;
  setSearch: any;
}) => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value.toLowerCase());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch(text);
  };

  return (
    <form className="mx-auto w-full md:w-1/2 lg:w-fit" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
        className="w-full lg:w-96 h-12 rounded-md lg:rounded-l-md lg:rounded-r-none px-4 bg-gray-700 placeholder:text-gray-500 border border-gray-700 focus:border-rm focus:bg-gray-900 text-rm outline-none transition-all duration-200"
      />
      <input
        type="submit"
        value="Search"
        className="w-full lg:w-fit h-12 bg-rm px-6 mt-2 lg:mt-0 rounded-md lg:rounded-r-md lg:rounded-l-none cursor-pointer hover:bg-rm/75 transition-all duration-200"
      />
    </form>
  );
};

export default SearchBar;
