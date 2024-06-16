import { FaChromecast, FaRegBell, FaRegUserCircle, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    // header
    <div>
      {/* image */}
      <div id="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logo"
        />
        {/* button group */}
        <div>
          <FaChromecast />
          <FaRegBell />
          <FaSearch />
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;
