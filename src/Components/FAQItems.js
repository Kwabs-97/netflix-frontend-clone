/** @format */

import React from "react";
import classes from "./FAQS.module.css";
import plusSVG from "../assets/plus-svgrepo-com.svg";
import closeSVG from "../assets/close-md-svgrepo-com.svg";

function FAQItem({ question, answer, isActive, onToggle }) {
  
  
  return (
    <li>
      <h3>
        <button onClick={onToggle}>
          <span>{question}</span>
          <div>{isActive ? <img src={closeSVG} alt="" /> : <img src={plusSVG} alt="" />}</div>
        </button>
      </h3>
      <div className={`${classes.details} ${isActive ? classes.active : ""}`}>
        {/* Use JSX for the answer content */}
        {answer.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </li>
  );
}

export default FAQItem;
