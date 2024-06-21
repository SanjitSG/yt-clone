import React from "react";
import VideoCard from "./VideoCard";
import useFetchVideos from "../../hooks/useFetchVideos";

const VideoCardContainer = () => {
  const { videos } = useFetchVideos();

  if (!videos) return null; //return shimmer ui

  if (videos) {
    console.log("videos:", videos);
    return (
      <div className="md:flex md flex-wrap md:justify-center">
        {videos.map((video) => {
          return <VideoCard video={video.snippet} />;
        })}
      </div>
    );
  }
};

export default VideoCardContainer;
