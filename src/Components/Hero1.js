/** @format */

import React from "react";
import classes from "./Hero1.module.css";
import netflixTV from "../assets/tv.png";

import Divider from "./Divider";

function Hero1() {
  return (
    <>
      <main className={classes.container}>
        <div className={classes.heroContainer}>
          <section className={classes.intro}>
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and
              more.
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
        </div>
      </main>
      <Divider />
    </>
  );
}

export default Hero1;
