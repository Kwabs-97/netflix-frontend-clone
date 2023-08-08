/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./FAQS.module.css";
import plusSVG from "../assets/plus-svgrepo-com.svg";
import closeSVG from "../assets/close-md-svgrepo-com.svg";
import { faqActions } from "../store/faq-slice";

function FAQS() {
  const toggleFaqs = useSelector((state) => state.faqReducer.showDetails);
  console.log(toggleFaqs);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(faqActions.toggle());
  };

  return (
    <footer>
      <div className={classes.footer}>
        <h2>Frequently Asked Questions</h2>

        <div className={classes.container}>
          <ul>
            <li>
              <h3>
                <button onClick={toggleHandler}>
                  <span>What is Netflix?</span>
                  <div onClick={toggleHandler}>
                    {toggleFaqs ? <img src={closeSVG} alt="" /> : <img src={plusSVG} alt="" />}
                  </div>
                </button>
              </h3>
              <div div className={`${classes.details} ${toggleFaqs ? classes.active : ""}`}>
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
