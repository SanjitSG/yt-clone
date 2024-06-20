import React from "react";
import VideoCard from "./VideoCard";
import { mostPopularVideosApi } from "../../utils/constants";

const VideoCardContainer = () => {
  // call search api
  // get videos - store it in store - get video cards from store
  const [searchResult, setSearchResult] = useState([]);
  use;
  return (
    <div className="w-screen p-2 border border-red-600">
      <VideoCard />
    </div>
  );
};

export default VideoCardContainer;
