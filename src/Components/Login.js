/** @format */

import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

// import { useForm } from "react-hook-form";

import classes from "./Login.module.css";
// import loginWrapperBackground from "../assets/loginWrapperBackground.jpg";
import NetflixSVG from "../assets/netflix-svgrepo-com.svg";
import { ReactSVG } from "react-svg";

import FooterLinks from "./Footer-items";

function Login() {
  //Managing input state for setting placeholder

  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  //setting className for positioning placeholder
  const inputClassName =
    inputValue !== "" ? `${classes.emailInput} ${classes.hasValue} ` : classes.emailInput;

  console.log(inputClassName, "inputClassName");
  console.log(classes.hasValue, "classes.hasValue");

  //data for footer Links
  const footerLinks = [
    {
      name: "FAQ",
      link: "https://help.netflix.com/support/412",
    },
    {
      name: "help Center",
      link: "https://help.netflix.com/en/",
    },
    {
      name: "Terms of Use",
      link: "https://help.netflix.com/legal/termsofuse",
    },
    {
      name: "Privacy",
      link: "https://help.netflix.com/legal/privacy",
    },
    {
      name: "Cookie Preferences",
      link: "https://www.netflix.com/gh/#",
    },
    {
      name: "Cooperative Information",
      link: "https://help.netflix.com/legal/corpinfo",
    },
  ];

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

      <footer className={classes.footerWrapper}>
        <div className={classes.footerDivider}></div>
        <div className={classes.siteFooter}>
          <p className={classes.footerTop}>
            <Link>Got Questions, Contact us.</Link>
          </p>
          <ul className={classes.linksContainer}>
            {footerLinks.map((link) => (
              <FooterLinks name={link.name} link={link.link} />
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Login;
