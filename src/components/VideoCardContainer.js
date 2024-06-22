import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
const VideoCardContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoLib.videos);

  useEffect(() => {
    getVideos();
  }, []);

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
          return (
            <Link
              key={video.id}
              to={"/watch?v" + video.id}
            >
              <VideoCard video={video} />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default VideoCardContainer;
