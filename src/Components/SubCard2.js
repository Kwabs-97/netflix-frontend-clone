/** @format */

import React from "react";
import classes from "./SubCard2.module.css";
import profileImg from "../assets/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png";

function SubCard2() {
  return (
    <aside>
      <div className={classes.header}>
        <h1>Create profiles for kids</h1>
        <p>
          Send kids on adventure with their favorite characters in a space made just for them--free
          with your membership
        </p>
      </div>
      <div className={classes.main}>
        <img src={profileImg} alt="" />
      </div>
    </aside>
  );
}
export default SubCard2;
