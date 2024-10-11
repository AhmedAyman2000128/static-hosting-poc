import { configureStore } from "@reduxjs/toolkit";
import urlsReducer from "./UrlsReducer";
export default configureStore({
  reducer: {
    url: urlsReducer,
  },
});
