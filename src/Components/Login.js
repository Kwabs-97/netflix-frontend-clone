/** @format */

import React from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import classes from "./Login.module.css";
import loginWrapperBackground from "../assets/loginWrapperBackground.jpg";
import NetflixSVG from "../assets/netflix-svgrepo-com.svg";
import { ReactSVG } from "react-svg";
import { setEmailandPhone } from "../store/reducers/form-reducer";

function Login() {
  const emailField = useSelector((state) => state.form.email);

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    dispatch(setEmailandPhone(newEmail));
  };
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginWrapperBackground}></div>
      <header className={classes.loginHeader}>
        <Link>
          {" "}
          <ReactSVG src={NetflixSVG} />
        </Link>
      </header>
      <main className={classes.loginBody}>
        <div className={classes.loginPageContainer}>
          <div className={classes.loginContent}>
            <div className={classes.loginFormMain}>
              <h1 className={classes.loginPageTitle}>Sign In</h1>
              <form action="" className={classes.loginForm}>
                <div className={classes.emailContainer}>
                  <div className={classes.inputPlacement}>
                    <div className={classes.phoneContainer}>
                      <label htmlFor="inputID" className={classes.label}>
                        <input type="text" autoComplete="email" onChange={handleEmailChange} />
                        <label htmlFor="">Email or Phone Number</label>
                      </label>
                    </div>
                  </div>
                  {emailField.errorMessage && <div> {emailField.errorMessage} </div>}
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      <footer className={classes.loginFooter}></footer>
    </div>
  );
}

export default Login;
