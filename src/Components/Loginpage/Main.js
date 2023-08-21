/** @format */

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Main.module.css";

function Main() {
  //Managing input state for setting placeholder

  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  //setting className for positioning placeholder
  const inputClassName =
    inputValue !== "" ? `${classes.emailInput} ${classes.hasValue} ` : classes.emailInput;

  return (
    <main className={classes.loginBody}>
      <div className={classes.loginPageContainer}>
        <div className={classes.loginContent}>
          <div className={classes.loginFormMain}>
            <h1 className={classes.loginPageTitle}>Sign In</h1>
            <form action="" className={classes.loginForm}>
              <div className={classes.emailContainer}>
                <label>
                  <input type="text" className={inputClassName} onChange={onChangeHandler} />
                  <label className={classes.inputPlaceholder}>Email or Phone Number</label>
                </label>
              </div>
              <div className={classes.emailContainer}>
                <label>
                  <input type="password" className={inputClassName} onChange={onChangeHandler} />
                  <label className={classes.inputPlaceholder}>Password</label>
                </label>
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
                <Link className={classes.signupLink}>Sign up now</Link>
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
