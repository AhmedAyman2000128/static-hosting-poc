import { createSlice } from "@reduxjs/toolkit";
const urlsSlice = createSlice({
  name: "usersSlice",
  initialState: {
    urls: [],
  },
  reducers: {
    addUrl: (state, action) => {
      state.urls = [...state.urls, action.payload];
    },
  },
});
export const { addUrl } = urlsSlice.actions;
export default urlsSlice.reducer;
