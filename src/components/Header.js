import { IoLogoOctocat, IoMenu, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "./MainContainerComponents/SearchBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    console.log("toggling Menu");
    dispatch(toggleMenu());
  };

  return (
    <>
      {!showSearchBar && (
        <div className="flex md:grid-flow-col md:grid justify-between items-center border-b-2 shadow-sm md:shadow-none md:border-none">
          <div className="flex items-center md:col-span-3">
            <button onClick={toggleMenuHandler}>
              <IoMenu className="hidden md:block mx-4 text-xl cursor-pointer" />
            </button>
            <Link
              to="/"
              className="flex items-center"
            >
              <img
                // src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
                src="https://www.freeiconspng.com/uploads/deal-with-it-nyan-cat-glasses-png-28.png"
                alt="cat logo"
                className="w-10 cursor-pointer"
              />
              <b className="text-lg cursor-pointer">MeowTube</b>
            </Link>
          </div>

          <div className="hidden md:block col-span-8">
            <SearchBar />
          </div>

          <div className="flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1">
            <IoSearchOutline
              className="md:hidden"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />

            <IoLogoOctocat className="md:text-4xl" />
          </div>
        </div>
      )}
      {showSearchBar && (
        <SearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      )}
    </>
  );
};

export default Header;
