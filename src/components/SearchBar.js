import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ showSearchBar, setShowSearchBar, setSearchQuery, searchSuggestions }) => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(true);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    setIsSearchBoxOpen(false);
    navigate(`results/?search_query=${searchQuery}`);
  };

  return (
    <div className="my-2">
      <div className="flex items-center shadow-lg md:shadow-none">
        <BiArrowBack
          className="mx-2 md:hidden"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch(query);
            }
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchBoxOpen(true);
            setQuery(e.target.value);
          }}
          onFocus={() => {
            setIsSearchBoxOpen(true);
          }}
          value={query}
          type="text"
          className="bg-gray-100 outline-blue-400 rounded-full p-1 px-5 m-2 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
          placeholder="Search"
        />
        <button
          className="hidden md:block md:bg-gray-100 p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0"
          onClick={() => handleSearch(query)}
        >
          <BiSearch />
        </button>
      </div>
      {isSearchBoxOpen && searchSuggestions.length > 0 && (
        <div className="border-2 rounded-xl w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm">
          <ul>
            {searchSuggestions.map((item, i) => (
              <li
                key={i}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSearch(item);
                }}
              >
                <div className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100 cursor-pointer">
                  <AiOutlineSearch /> {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
