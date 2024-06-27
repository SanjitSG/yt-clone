import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API } from "../utils/constants";
import ShimmerResult from "./ShimmerResult";
import ResultVideoCard from "./ResultVideoCard";

const Results = () => {
  const [video, setVideo] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getVideos().catch((e) => {
      setIsLoading(false);
      setVideo(null);
      console.log(e.message);
    });
  }, [search_query]);

  const getVideos = async () => {
    const data = await fetch(SEARCH_RESULT_API + search_query);
    const json = await data.json();
    const onlyVideos = json.items.filter((video) => {
      return video.id.kind === "youtube#video";
    });
    setIsLoading(false);
    setVideo(onlyVideos);
  };

  if (isLoading) return <ShimmerResult />;

  if (!video) {
    return (
      <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
        <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
          OOPS! looks like we have exceeded yt api quota
        </div>
      </div>
    );
  }

  return (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-full">
      {video.map((video) => {
        return (
          <Link
            key={video?.id?.videoId}
            to={"/watch?v=" + video?.id?.videoId}
          >
            <ResultVideoCard
              key={video.id.videoId}
              info={video}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Results;
