import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
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
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  if (!videos) return <div>{console.log("no videos")}</div>;
  if (videos) {
    return (
      <div className="md:flex md:flex-wrap md:justify-center">
        {videos.map((video) => {
          const videoId = !filter ? video.id : video.id.videoId;
          return (
            <Link
              key={videoId}
              to={"/watch?v" + videoId}
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
