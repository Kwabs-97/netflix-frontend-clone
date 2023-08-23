/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import emailErrorSVG from "../assets/cancel-20px-svgrepo-com.svg";
import nextSVG from "../assets/next-svgrepo-com.svg";

import { useDispatch, useSelector } from "react-redux";

import { setEmail } from "../store/reducers/email-input";

import classes from "./emailForms.module.css";

function EmailForms() {
  const emailField = useSelector((state) => state.form.email);

  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const handleLinkClick = () => {
    inputRef.current.focus();
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    dispatch(setEmail(newEmail));
  };

  return (
    <div className={classes.formsContainer}>
      <div className={classes.formsInnerContainer}>
        <form className={classes.formContainer}>
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
          <div className={classes.inputContainer}>
            <div className={classes.emailAndErrorMessage}>
              <div className={`${classes.container} `}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={inputRef}
                  onChange={handleEmailChange}
                  className={`${emailField.hasValue ? classes.hasValue : ""}
                          `}
                />
                <label htmlFor="email">Email address</label>
              </div>
              {emailField.errorMessage && (
                <div className={classes.errorMessageContainer}>
                  {" "}
                  <img src={emailErrorSVG} alt="" width={16} height={16} />
                  <p className={classes.errorMessage}>{emailField.errorMessage}</p>
                </div>
              )}
            </div>

            <Link onClick={handleLinkClick}>
              <span className={classes.text}> Get St </span>
              <span>
                <img src={nextSVG} alt="" width={24} height={24} />
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailForms;
