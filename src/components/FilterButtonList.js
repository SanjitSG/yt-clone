import React from "react";
import { MdExplore } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";

const FilterButtonList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const list = ["All", "HTML", "CSS", "JavaScript", "ReactJS"];
  const mdList = [
    "NextJs",
    "Live",
    "Laptops",
    "Music",
    "Jukebox",
    "Recently uploaded",
    "Disney",
    "Namaste JS",
    "Mixes",
  ];

  const btnList = (list, style) =>
    list.map((btn, i) => (
      <Link
        key={i}
        to={"/?filter=" + btn}
      >
        <button
          className={`${filter === btn ? "bg-gray-800 text-gray-50" : "bg-gray-100"} ${style}`}
        >
          {btn}
        </button>
      </Link>
    ));

  const style = "p-1 px-2 m-1 rounded-lg";
  const mdStyle = "p-1 px-2 m-1 rounded-lg hidden md:block";
  return (
    <div>
      <div className="flex items-center border-b-2 md:border-none md:justify-center">
        <Link to={"/"}>
          <button className="flex items-center bg-gray-100 p-1 px-2 m-1 rounded-lg space-x-1">
            <MdExplore /> <span>Explore</span>
          </button>
        </Link>
        <span className="border-r-2 border-gray-200 h-6"></span>
        {btnList(list, style)}
        {btnList(mdList, mdStyle)}
      </div>
    </div>
  );
};

export default FilterButtonList;
