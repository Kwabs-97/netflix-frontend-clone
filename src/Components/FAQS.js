/** @format */

import React from "react";
import classes from "./FAQS.module.css";
import plusSVG from "../assets/plus-svgrepo-com.svg";
import closeSVG from "../assets/close-svgrepo-com.svg";
function FAQS() {
  return (
    <footer>
      <div className={classes.footer}>
        <h2>Frequently Asked Questions</h2>

        <div className={classes.container}>
          <ul>
            <li>
              <h3>
                <button>
                  <span>What is Netflix?</span>
                  <img src={plusSVG} alt="" />
                </button>
              </h3>
              <div className={classes.details}>
                <span>
                  Netflix is a streaming service that offers a wide variety of award-winning TV
                  shows, movies, anime, documentaries, and more on thousands of internet-connected
                  devices. <br />
                  <br />
                  You can watch as much as you want, whenever you want without a single commercial –
                  all for one low monthly price. There's always something new to discover and new TV
                  shows and movies are added every week!
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FAQS;
