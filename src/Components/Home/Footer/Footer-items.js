/** @format */

import React from "react";
import { Link } from "react-router-dom";

function FooterLinks(props) {
  return (
    <li>
      <Link to={props.link}>
        {props.name.slice(0, 1).toUpperCase().concat(props.name.slice(1))}
      </Link>
    </li>
  );
}

export default FooterLinks;
