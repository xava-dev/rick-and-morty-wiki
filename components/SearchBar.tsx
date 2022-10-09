import { useState } from "react";

const SearchBar = (props: any) => {
  const { placeholder } = props;
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value.toLowerCase());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setSearch(text);
  };

  return (
    <form className="mx-auto" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
        className="w-80 lg:w-96 h-12 rounded-l-md px-4 bg-gray-700 placeholder:text-gray-500 border border-gray-700 focus:border-rm focus:bg-gray-900 text-rm outline-none transition-all duration-200"
      />
      <input
        type="submit"
        value="Search"
        className="h-12 bg-rm/50 px-6 rounded-r-md cursor-pointer hover:bg-rm/75 transition-all duration-200"
      />
    </form>
  );
};

export default SearchBar;
