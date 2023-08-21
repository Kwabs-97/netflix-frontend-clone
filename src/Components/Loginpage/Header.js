/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import classes from "./Header.module.css";
import NetflixSVG from "../../assets/netflix-svgrepo-com.svg";

function Header() {
  return (
    <header className={classes.loginHeader}>
      <Link to="/">
        {" "}
        <ReactSVG src={NetflixSVG} />
      </Link>
    </header>
  );
}

export default Header;
