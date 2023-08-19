/** @format */

import React from "react";
import classes from "./SubCard2.module.css";
import profileImg from "../assets/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png";
import Divider from "./Divider";

function SubCard2() {
  return (
    <>
      <aside className={classes.profile}>
        <div className={classes.profileContainer}>
          <div className={classes.heading}>
            <h2>Create profiles for kids</h2>
            <p>
              Send kids on adventure with their favorite characters in a space made just for
              them--free with your membership
            </p>
          </div>
          <div className={classes.main}>
            <img src={profileImg} alt="" />
          </div>
        </div>
      </aside>
      <Divider />
    </>
  );
}
export default SubCard2;
