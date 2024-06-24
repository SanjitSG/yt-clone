import React, { useEffect, useState } from "react";
import VideoInfo from "./VideoInfo";
import { VIDEO_DETAILS_API } from "../utils/constants";

const VideoPreview = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    setVideo(json.items[0]);
  };
  if (video.length === 0) return null;
  return (
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[30rem] h-60 w-full rounded-lg"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <VideoInfo video={video} />
      </div>
      {/* comments */}
    </div>
  );
};

export default VideoPreview;
