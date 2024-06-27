import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { SEARCH_RESULT_API, YOUTUBE_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
const VideoCardContainer = () => {
  // initial state variables
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getVideos().catch((err) => {
      console.log(err.message);
    });
    setIsLoading(true);
    setVideos(null);
  }, [searchParams, filter]);

  // fetch videos from YouTube API
  const getVideos = async () => {
    const data = await fetch(!filter ? YOUTUBE_API : SEARCH_RESULT_API + filter);
    const json = await data.json();

    const onlyVideos = json.items.filter((video) => {
      if (!filter) {
        return video.kind === "youtube#video";
      } else {
        return video.id.kind === "youtube#video";
      }
    });
    setIsLoading(false);
    setVideos(onlyVideos);
  };

  if (isLoading) return <ShimmerUI />;
  if (!videos) {
    return (
      <div className="md:flex md:flex-wrap md:justify-center">
        <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
          Oops! looks like we have exceeded youtube API quota
        </div>
      </div>
    );
  }

  if (videos) {
    {
      console.log(videos);
    }
    return (
      <div className="md:flex md:flex-wrap md:justify-center px-2 pt-2">
        {videos.map((video) => {
          const videoId = !filter ? video.id : video.etag;
          return (
            <Link
              key={videoId}
              to={"/watch?v=" + videoId}
            >
              <VideoCard
                video={video}
                filter={filter}
              />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default VideoCardContainer;
