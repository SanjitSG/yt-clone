import React from "react";

const FilterBtn = ({ name }) => {
  return (
    <div>
      <button className="py-1 px-2 m-2 bg-slate-200 rounded-md font-medium">{name}</button>
    </div>
  );
};

export default FilterBtn;
