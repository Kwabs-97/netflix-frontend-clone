/** @format */

import React from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import classes from "./Login.module.css";
import loginWrapperBackground from "../assets/loginWrapperBackground.jpg";
import NetflixSVG from "../assets/netflix-svgrepo-com.svg";
import { ReactSVG } from "react-svg";
import { setEmailandPhone } from "../store/reducers/form-reducer";

function Login() {
  const form = useForm({
    defaultValues: {
      emailOrNumber: "",
    },
    mode: "onBlur",
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  // const handleEmailChange = (event) => {
  //   const newEmail = event.target.value;
  //   dispatch(setEmailandPhone(newEmail));
  // };
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginWrapperBackground}></div>
      <header className={classes.loginHeader}>
        <Link to="/">
          {" "}
          <ReactSVG src={NetflixSVG} />
        </Link>
      </header>
      <main className={classes.loginBody}>
        <div className={classes.loginPageContainer}>
          <div className={classes.loginContent}>
            <div className={classes.loginFormMain}>
              <h1 className={classes.loginPageTitle}>Sign In</h1>
              <form action="" className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.emailContainer}>
                  <label>
                    <input type="text" className={classes.emailInput} />
                    <label className={classes.inputPlaceholder}>Email or Phone Number</label>
                  </label>
                </div>
                <div className={classes.emailContainer}>
                  <label>
                    <input type="password" className={classes.emailInput} />
                    <label className={classes.inputPlaceholder}>Password</label>
                  </label>
                </div>
                <Link>Sign In</Link>
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
