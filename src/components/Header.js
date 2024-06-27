import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import SearchBar from "./SearchBar";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCacheResults = useSelector((store) => store.search);

  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      if (searchCacheResults[searchQuery]) {
        setSearchSuggestions(searchCacheResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // suggestion
  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      if (searchQuery) dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (err) {
      console.log(err);
    }
  };

  // toggleMenu
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {!showSearchBar && (
        <div className="flex md:grid-flow-col md:grid border-b-2 shadow-sm md:shadow-none md:border-none justify-between items-center">
          <div className="flex items-center md:col-span-3">
            <IoMenu
              className="hidden md:block mx-4 text-xl cursor-pointer"
              onClick={handleToggleMenu}
            />
            <Link
              to={"/"}
              className="flex items-center"
            >
              <img
                className="w-10 mx-2 md:mx-0 cursor-pointer"
                src="https://www.freeiconspng.com/uploads/youtube-icon-app-logo-png-9.png"
                width="350"
                alt="youtube icon app logo png"
              />
              <p className="font-bold mx-1 text-lg">YouTube</p>
            </Link>
          </div>
          <div
            id="search"
            className="hidden md:block col-span-8"
          >
            <SearchBar
              showSearchBar={showSearchBar}
              setShowSearchBar={setShowSearchBar}
              setSearchQuery={setSearchQuery}
              searchSuggestions={searchSuggestions}
            />
          </div>
          <div className="flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1">
            <AiOutlineSearch
              className="md:hidden"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
            <FaUserCircle className="md:text-4xl" />
          </div>
        </div>
      )}
      {showSearchBar && (
        <SearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
          setSearchQuery={setSearchQuery}
          searchSuggestions={searchSuggestions}
        />
      )}
    </>
  );
};

export default Header;
