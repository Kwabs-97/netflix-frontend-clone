/** @format */

import { createSlice } from "@reduxjs/toolkit";
import isValidEmail from "email-validator";

const setErrorMessage = (value) => {
  if (typeof value === "string" && value.trim() === "") {
    return "Please enter a valid email or phone number";
  }
  if (typeof value === "string" && value.length < 5) {
    return "Please a valid email";
  }
  if (typeof value === "number" && value.length < 5) {
    return "Please enter a valid phone number";
  }
};

const formReducer = createSlice({
  name: "form",
  initialState: {
    email: {
      value: "",
      hasValue: false,
      isValid: false,
      errorMessage: "",
    },
  },
  reducers: {
    setEmailandPhone: (state, action) => {
      state.email.value = action.payload;
      state.email.isValid = isValidEmail.validate(action.payload);
      state.email.errorMessage = setErrorMessage(action.payload);
    },
  },
});

export default formReducer.reducer;
export const { setEmailandPhone } = formReducer.actions;
