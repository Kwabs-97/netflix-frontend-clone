/** @format */

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Main.module.css";

function Main() {
  //Managing email input state for setting placeholder

  const [emailInputValue, setemailInputValue] = useState("");

  const emailInputOnChangeHandler = (event) => {
    setemailInputValue(event.target.value);
  };

  //Managing password input state for setting placeholder
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");

  //Handling password Input is Focused
  const handleInputFocus = () => {
    setInputFocused(!inputFocused);
  };

  //Handling password visibility and conditionally rendering input text
  const togglePasswordVisibity = () => {
    setPasswordVisible(!passwordVisible);
  };
  const inputText = passwordVisible ? "text" : "password";

  const passwordInputOnChangeHandler = (event) => {
    setPasswordInputValue(event.target.value);
  };

  //Setting password error message

  const emailInputClassName =
    emailInputValue !== "" ? `${classes.emailInput} ${classes.emailHasValue} ` : classes.emailInput;

  const passwordInputClassName =
    passwordInputValue !== ""
      ? `${classes.passwordInput} ${classes.passwordHasValue} `
      : classes.passwordInput;

  return (
    <main className={classes.loginBody}>
      <div className={classes.loginPageContainer}>
        <div className={classes.loginContent}>
          <div className={classes.loginFormMain}>
            <h1 className={classes.loginPageTitle}>Sign In</h1>
            <form action="" className={classes.loginForm}>
              <div className={classes.emailData}>
                <div className={classes.emailContainer}>
                  <label>
                    <input
                      type="text"
                      className={emailInputClassName}
                      onChange={emailInputOnChangeHandler}
                    />

                    <label className={classes.inputPlaceholder}>Email or Phone Number</label>
                  </label>
                </div>
              </div>
              <div className={classes.inputData}>
                <div className={classes.passwordContainer}>
                  <label>
                    <input
                      type={inputText}
                      className={passwordInputClassName}
                      onChange={passwordInputOnChangeHandler}
                      onFocus={handleInputFocus}
                      onBlur={handleInputFocus}
                    />
                    <label className={classes.inputPlaceholder}>Password</label>

                    <button
                      className={classes.passwordVisibleBtn}
                      onClick={togglePasswordVisibity}
                      type="button"
                    >
                      {passwordVisible ? "HIDE" : "SHOW"}
                    </button>
                    {inputFocused && passwordInputValue.length < 4 && (
                      <p className={classes.passwordErrorMsg}>
                        {" "}
                        Your password must contain between 40 and 60 characters
                      </p>
                    )}
                  </label>
                </div>
              </div>
              <Link className={classes.signInBtn}>Sign In</Link>
              <div className={classes.formHelp}>
                <div className={classes.rememberMe}>
                  <div className={classes.customCheckbox}>
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className={classes.hiddenCheckbox}
                      defaultChecked
                    />
                    <label htmlFor="myCheckbox" className={classes.visibleCheckbox}></label>
                    <label htmlFor="myCheckbox" className={classes.checkboxLabel}>
                      Remember me
                    </label>
                  </div>
                </div>
                <Link>Need Help?</Link>
              </div>
            </form>
            <div className={classes.otherForm}>
              <div className={classes.signup}>
                New to Netflix?
                <Link className={classes.signupLink} to="/">
                  Sign up now
                </Link>
              </div>
              <div className={classes.terms}>
                <p>
                  <span>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                  </span>
                  <Link> Learn more.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
