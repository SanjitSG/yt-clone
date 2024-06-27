import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoLib",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = [...action.payload];
    },
    removeVideos: (state) => {
      state.videos = [];
    },
  },
});

export const { addVideos, removeVideos } = videoSlice.actions;
export default videoSlice.reducer;
