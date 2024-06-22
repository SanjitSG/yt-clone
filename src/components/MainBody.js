import React from "react";
import FilterButtonList from "./FilterButtonList";
import VideoCardContainer from "./VideoCardContainer";
import { useSelector } from "react-redux";
const MainBody = () => {
  const showFilterList = useSelector((store) => store.app.showFilterList);
  return (
    <div>
      {showFilterList && <FilterButtonList />}
      <VideoCardContainer />
    </div>
  );
};

export default MainBody;
