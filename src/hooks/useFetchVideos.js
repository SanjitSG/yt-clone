import { useEffect, useState } from "react";
import { mostPopularVideosApi } from "../utils/constants";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(mostPopularVideosApi);
        const json = await data.json();
        setVideos(json.items);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("fetching logic executed");
      }
    };
    fetchData();
  }, []);

  return { videos };
};

export default useFetchVideos;
