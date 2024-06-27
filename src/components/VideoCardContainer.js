import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { SEARCH_API, SEARCH_RESULT_API, YOUTUBE_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
const VideoCardContainer = () => {
  // initial state variables
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const videos = useSelector((store) => store.videoLib.videos);

  useEffect(() => {
    getVideos();
  }, []);

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
    dispatch(addVideos(onlyVideos));
  };

  if (!videos) return <div>{console.log("no videos")}</div>;
  if (videos) {
    return (
      <div className="md:flex md:flex-wrap md:justify-center px-2 pt-2">
        {videos.map((video) => {
          const videoId = !filter ? video.id : video.id.videoId;
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
