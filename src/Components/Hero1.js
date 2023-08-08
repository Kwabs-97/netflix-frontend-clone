/** @format */

import React from "react";
import classes from "./Hero1.module.css";
import netflixTV from "../assets/tv.png";

function Hero1() {
  return (
    <main className={classes.container}>
      <section className={classes.intro}>
        <h1>Enjoy on your TV</h1>
        <p>
          Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </p>
      </section>
      <section className={classes.netflixTV}>
        <div className={classes.vidContainer}>
          <img src={netflixTV} alt="" />
          <div className={classes.video}>
            <video autoPlay loop>
              <source src="Netflix Ghana - Watch TV Shows Online, Watch Movies Online.mp4" />
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero1;
