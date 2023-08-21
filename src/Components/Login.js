/** @format */

import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

// import { useForm } from "react-hook-form";

import classes from "./Login.module.css";
// import loginWrapperBackground from "../assets/loginWrapperBackground.jpg";

import FooterLinks from "./Footer-items";
import Header from "./Loginpage/Header";
import Main from "./Loginpage/Main";
import Footer from "./Loginpage/Footer";

function Login() {
  //Managing input state for setting placeholder

  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Login;
