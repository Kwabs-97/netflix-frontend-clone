/** @format */

import { configureStore } from "@reduxjs/toolkit";
import faqSlice from "./faq-slice";

const store = configureStore({
  reducer: {
    faqReducer: faqSlice.reducer,
  },
});

export default store;
