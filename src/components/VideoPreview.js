import React from "react";

const VideoPreview = ({ videoId }) => {
  return (
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[30rem] h-60 w-full rounded-lg"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>{/* video info */}</div>
      {/* comments */}
    </div>
  );
};

export default VideoPreview;
