import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCacheResults = useSelector((store) => store.search);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="w-screen flex md:grid-flow-col md:grid border-b-2 shadow-sm md:shadow-none md:border-none">
      <div className="flex items-center md:col-span-3 ">
        <IoMenu
          className="hidden md:block mx-4 text-xl cursor-pointer"
          onClick={handleToggleMenu}
        />
        <Link
          to={"/"}
          className="flex items-center"
        >
          <img
            className="w-10 cursor-pointer"
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
        <SearchBar showSearchBar={showSearchBar} />
      </div>
    </div>
  );
};

export default Header;
