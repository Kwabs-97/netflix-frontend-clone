/** @format */

import React from "react";
import classes from "./SubCard.module.css";
import Divider from "../../../features/Divider";

function SubCard() {
  return (
    <>
      <aside className={classes.aside}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Watch Everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className={classes.invisibleContent}></div>
        </div>
      </aside>
      <Divider />
    </>
  );
}

export default SubCard;
