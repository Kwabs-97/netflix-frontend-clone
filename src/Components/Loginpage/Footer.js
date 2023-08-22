/** @format */

import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "../Home/Footer/Footer-items";

import classes from "./Footer.module.css";

function Footer() {
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
  );
}

export default Footer;
