/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FAQItem from "./FAQItems"; // Import the newly created FAQItem component
import classes from "./FAQS.module.css";

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
            {/* Render first FAQ item */}
            <FAQItem
              question="What is Netflix?"
              answer={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`}
              isActive={toggleFaqs}
              onToggle={toggleHandler}
            />
            <FAQItem
              question="How much does Netflix cost?"
              answer={`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.`}
              isActive={toggleFaqs}
              onToggle={toggleHandler}
            />
            <FAQItem
              question="Where can I watch?"
              answer={`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n\n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
              isActive={toggleFaqs}
              onToggle={toggleHandler}
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FAQS;
