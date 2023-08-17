/** @format */

import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import FooterItems from "./FooterItems";

import webSVG from "../assets/web-svgrepo-com.svg";
import dropdownSVG from "../assets/dropdown-svgrepo-com (1).svg";
import Login from "./Login";

function Footer() {
  const links = [
    {
      name: "FAQ",
      link: "https://help.netflix.com/support/412",
    },

    {
      name: "help Center",
      link: "https://help.netflix.com/en/",
    },
    {
      name: "account",
      link: "https://www.netflix.com/gh/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount",
    },
    {
      name: "media Center",
      link: "https://media.netflix.com/",
    },
    {
      name: "inverstor Relations",
      link: "http://ir.netflix.com/",
    },
    {
      name: "jobs",
      link: "https://jobs.netflix.com/jobs",
    },
    {
      name: "Ways to Watch",
      link: "https://devices.netflix.com/en/",
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
    {
      name: "Contact Us",
      link: "https://help.netflix.com/contactus",
    },

    {
      name: "Speed Test",
      link: "fast.com",
    },
    {
      name: "Legal Notice",
      link: "https://help.netflix.com/legal/notices",
    },
    {
      name: "Only on Netflix",
      link: "https://www.netflix.com/gh/browse/genre/839338",
    },
  ];

  return (
    <footer className={classes.linksFooter}>
      <div className={classes.footerContainer}>
        <div className={classes.contact}>
          <Link to="https://help.netflix.com/en/contactus">Questions? Contact Us</Link>
        </div>
        <div className={classes.linksContainer}>
          <div className={classes.linksInnerContainer}>
            <ul>
              {links.map((link) => (
                <FooterItems name={link.name} link={link.link} />
              ))}
            </ul>
          </div>
        </div>

        <div className={classes.languageContainer}>
          <div className={classes.languageInnerContainer}>
            <div>
              <ReactSVG
                src={webSVG}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "20px");
                  svg.setAttribute("height", "20px");
                  svg.setAttribute("style", "padding: 6px");
                }}
              />
            </div>
            <select name="languageSelect" id="">
              <option value="en-Gh" label="English" defaultChecked>
                English
              </option>
            </select>
            <div>
              <ReactSVG
                src={dropdownSVG}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "20px");
                  svg.setAttribute("height", "20px");
                  svg.setAttribute("style", "padding: 6px");
                }}
              />
            </div>
          </div>
        </div>
        <p>Netflix Ghana</p>
        <Login />
      </div>
    </footer>
  );
}

export default Footer;
