import React, { useState } from "react";
import { IoArrowBackSharp, IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ setShowSearchBar, showSearchBar }) => {
  const [query, setQuery] = useState("");
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  return (
    <div className="my-2 mx-1">
      <div className="flex items-center shadow-md md:shadow-none">
        <IoArrowBackSharp
          className="ml-1 md:hidden"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
            setIsSearchBoxOpen(true);
          }}
          placeholder="Search"
          value={query}
          className="bg-gray-100 outline-blue-400 rounded-full px-2 py-1 m-1 w-full md:py-2 md:px-3 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
        />
        <button className="hidden md:bg-gray-200 md:block p-[0.61rem] text-xl rounded-r-full border-2 border-l-0">
          <IoSearchOutline />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
