/** @format */

import { configureStore } from "@reduxjs/toolkit";
import faqSlice from "./reducers/faqReducer";
import emailInput from "./reducers/email-input";
import formReducer from "./reducers/form-reducer";

const store = configureStore({
  reducer: {
    faqReducer: faqSlice.reducer,
    email: emailInput,
    form: formReducer,
  },
});

export default store;
