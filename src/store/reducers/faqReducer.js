/** @format */

import { createSlice } from "@reduxjs/toolkit";

const faqSlice = createSlice({
  name: "faqs",
  initialState: { showDetails: false },
  reducers: {
    toggle(state) {
      state.showDetails = !state.showDetails;
    },
  },
});

export const faqActions = faqSlice.actions;
export default faqSlice;
