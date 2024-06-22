import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videoLib: videoSlice,
  },
});

export default store;
