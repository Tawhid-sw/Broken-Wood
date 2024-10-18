import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
};

export const Slice = createSlice({
  name: "brokenwood",
  initialState,
  reducers: {
    setBannerData: (stste, action) => {
      stste.bannerData = action.payload;
    },
  },
});

export const { setBannerData } = Slice.actions;
export default Slice.reducer;
