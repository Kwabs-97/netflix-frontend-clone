/** @format */

import React from "react";
import classes from "./FooterItems.module.css";

import { Link } from "react-router-dom";

function FooterItems({ name, link }) {
  return (
    <li className={classes} key={name}>
      <Link to={link}>{name.slice(0,1).toUpperCase().concat(name.slice(1))}</Link>;
    </li>
  );
}

export default FooterItems;
