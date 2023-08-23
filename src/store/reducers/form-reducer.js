/** @format */

import { createSlice } from "@reduxjs/toolkit";
import isValidEmail from "email-validator";



const validatePassword = (value) => {
  return value.length > 5 && value.length <= 60;
};

const setPasswordErrorMessage = (value) => {
  if (value.trim() === "") {
    return "Your password must contain 4 to 60 characters";
  }
  if (value.length < 5) {
    return "Please enter a valid password";
  }
  return;
};

const formReducer = createSlice({
  name: "form",
  initialState: {
    email: {
      value: "",
      hasValue: false,
      isValid: false,
      emailErrorMessage: "",
    },
    password: {
      value: "",
      hasValue: false,
      isValid: false,
      passwordErrorMessage: "",
    },
  },
  reducers: {
    setEmailandPhone: (state, action) => {
      state.email.value = action.payload;
      state.email.isValid = isValidEmail.validate(action.payload);
      state.email.emailErrorMessage =
        action.payload.trim() === ""
          ? "Please enter a valid email or phone number"
          : action.payload.length < 5 || !isValidEmail.validate(action.payload)
          ? "Please enter a valid email"
          : "";
      state.email.hasValue = action.payload.trim() !== "";
    },
    SetPassword: (state, action) => {
      state.password.value = action.payload;
      state.password.isValid = validatePassword(action.payload);
      state.password.passwordErrorMessage = setPasswordErrorMessage(action.payload);
      state.password.hasValue = action.payload.trim() !== "";
    },
  },
});

export default formReducer.reducer;
export const { setEmailandPhone, SetPassword } = formReducer.actions;
