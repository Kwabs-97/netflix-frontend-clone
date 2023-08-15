/** @format */

import { configureStore } from "@reduxjs/toolkit";
import faqSlice from "./reducers/faqReducer";
import formReducer from "./reducers/formReducer";

const store = configureStore({
  reducer: {
    faqReducer: faqSlice.reducer,
    form: formReducer,
  },
});

export default store;
