import React, { useEffect, useState } from "react";
import { ytCategories } from "../../utils/constants";
import FilterBtn from "./FilterBtn";

const Buttonlist = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await fetch(ytCategories);
    const json = await data.json();
    setCategories(json.items);
  };

  return (
    <div className="flex w-60 md:w-full overflow-x-scroll md:overflow-x-hidden">
      <FilterBtn name={"Explore"} />
      {categories
        .filter((item) => item.snippet.title.length <= 8)
        .map((item, i) => {
          return (
            <FilterBtn
              name={item.snippet.title}
              key={i}
            />
          );
        })}
    </div>
  );
};

export default Buttonlist;
