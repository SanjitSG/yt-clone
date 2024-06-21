import moment from "moment";
import React from "react";
import { RxDotFilled } from "react-icons/rx";

const VideoCard = ({ video }) => {
  console.log(video);
  const { thumbnails, title, channelTitle, publishedAt } = video;

  return (
    <div className="space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-2 cursor-pointer p-1 rounded-lg">
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="rounded-xl w-full"
      />
      <div className="flex flex-col px-2">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex item-center text-xs font-semibold text-gray-500">
          <p>
            {channelTitle} <RxDotFilled />
          </p>
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
