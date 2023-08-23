/** @format */

import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setEmailandPhone, SetPassword } from "../../store/reducers/form-reducer";

import classes from "./Main.module.css";

function Main() {
  const emailField = useSelector((state) => state.form.email);
  const passwordField = useSelector((state) => state.form.password);

  const dispatch = useDispatch();

  //Managing email input state for setting placeholder

  const emailChangeHandler = (event) => {
    dispatch(setEmailandPhone(event.target.value));
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordInputRef = useRef(null);
  //Handling password visibility and conditionally showing or hiding password
  const togglePasswordVisibity = () => {
    setPasswordVisible(!passwordVisible);
    // passwordInputRef.current.focus();
    setTimeout(() => {
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
        passwordInputRef.current.selectionStart = passwordInputRef.current.value.length;
      }
    }, 0);
  };
  const inputText = passwordVisible ? "text" : "password";

  const passwordChangeHandler = (event) => {
    dispatch(SetPassword(event.target.value));
  };

  //Setting password error message

  const emailInputClassName = emailField.hasValue
    ? `${classes.emailInput} ${classes.emailHasValue} `
    : classes.emailInput;

  const passwordClassName = passwordField.hasValue
    ? `${classes.passwordInput} ${classes.passwordHasValue} `
    : classes.passwordInput;

  console.log(passwordField);

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
                      onChange={emailChangeHandler}
                    />

                    <label className={classes.inputPlaceholder}>Email or Phone Number</label>
                  </label>
                </div>
                {emailField.emailErrorMessage && (
                  <p className={classes.passwordErrorMsg}>{emailField.emailErrorMessage}</p>
                )}
              </div>
              <div className={classes.passwordData}>
                <div className={classes.passwordContainer}>
                  <label>
                    <input
                      type={inputText}
                      className={passwordClassName}
                      onChange={passwordChangeHandler}
                      ref={passwordInputRef}
                    />
                    <label className={classes.inputPlaceholder}>Password</label>

                    <button
                      className={classes.passwordVisibleBtn}
                      onClick={togglePasswordVisibity}
                      type="button"
                    >
                      {passwordVisible ? "HIDE" : "SHOW"}
                    </button>
                  </label>
                </div>
                {passwordField.passwordErrorMessage && (
                  <p className={classes.passwordErrorMsg}>{passwordField.passwordErrorMessage}</p>
                )}
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
