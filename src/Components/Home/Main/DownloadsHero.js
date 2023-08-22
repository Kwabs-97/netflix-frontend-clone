/** @format */

import React from "react";
import classes from "./DownloadsHero.module.css";

import DownloadsHeroImage from "../../../assets/mobile-0819.jpg";
import subImg from "../../../assets/boxshot.png";
import DownloadingIcon from "../../../assets/download-icon.gif";
import Divider from "../../../features/Divider";

function DownloadsHero() {
  return (
    <>
      <main className={classes.downloadsCenter}>
        <div className={classes.downloadsContainer}>
          <section className={classes.intro}>
            <h2>Download your shows to watch offline</h2>
            <p>Save your favorites easily and always have something to watch</p>
          </section>
          <section className={classes.downloads}>
            <div className={classes.downloadsImg}>
              <div className={classes.mainDownloadsImg}>
                <img src={DownloadsHeroImage} alt="" className={classes.mainImg} />
                <div className={classes.subDownloadsContainer}>
                  <div className={classes.imgSub}>
                    <img src={subImg} alt="" className="subImg" />
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
        </div>
      </main>
      <Divider />
    </>
  );
}

export default DownloadsHero;
