/** @format */

import React from "react";
import classes from "./DownloadsHero.module.css";

import DownloadsHeroImage from "../assets/mobile-0819.jpg";
import subImg from "../assets/boxshot.png";
import DownloadingIcon from "../assets/download-icon.gif";

function DownloadsHero() {
  return (
    <main className={classes.downloadsContainer}>
      <section className={classes.intro}>
        <h1>Download your shows to watch offline</h1>
        <p>Save your favorites easily and always have something to watch</p>
      </section>
      <section className={classes.downloads}>
        <div className={classes.downloadsImg}>
          <div className={classes.mainDownloadsImg}>
            <img src={DownloadsHeroImage} alt="" width="425" height="350"/>
            <div className={classes.subDownloadsContainer}>
              <div className={classes.imgSub}>
                <img src={subImg} alt="" />
              </div>
              <div className={classes.downloadsTitle}>
                <h1>Stranger Things</h1>
                <p>Downloading...</p>
              </div>
              <div className={classes.downloadingIcon}>
                <img src={DownloadingIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DownloadsHero;
