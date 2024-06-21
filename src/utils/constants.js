export const ytCategories =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  process.env.REACT_APP_YT;

export const mostPopularVideosApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&locale=IN&key=" +
  process.env.REACT_APP_YT;
