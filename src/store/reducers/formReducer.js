/** @format */

import { createSlice } from "@reduxjs/toolkit";
import isValidEmail from "email-validator";

// const emailIsValid = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

const inputSlice = createSlice({
  name: "input",
  initialState: {
    email: {
      value: "",
      isValid: false,
      errorMessage: "",
      hasValue: false,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.email.value = action.payload;
      state.email.isValid = isValidEmail.validate(action.payload);
      state.email.errorMessage =
        action.payload.length < 4
          ? "Email is required"
          : !state.email.isValid
          ? "Please a correct email address"
            : "";
      state.email.hasValue = action.payload.trim() !== '';
    },
    clearValidations: (state) => {
      state.email.errorMessage = "";
    },
  },
});

export const { setEmail, clearValidations } = inputSlice.actions;
export default inputSlice.reducer;
