import React from "react";
import { BiArrowBack, BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="my-2">
      <div className="flex items-center shadow-lg md:shadow-none">
        <BiArrowBack className="ml-2 md:hidden" />
        <input
          type="text"
          className="bg-gray-100 outline-blue-400 rounded-full p-1 px-5 m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
          placeholder="Search"
        />
        <button className="hidden md:block md:bg-gray-100 p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0">
          <BiSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
