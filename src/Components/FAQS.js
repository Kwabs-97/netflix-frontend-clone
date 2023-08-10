/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import nextSVG from "../assets/next-svgrepo-com.svg";

import FAQItem from "./FAQItems"; // Import the newly created FAQItem component
import classes from "./FAQS.module.css";

function FAQS() {
  const faqsData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: " How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n\n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. \n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleHandler = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <footer>
      <div className={classes.footer}>
        <h2>Frequently Asked Questions</h2>

        <div className={classes.container}>
          <ul>
            {faqsData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={index === activeIndex}
                onToggle={() => toggleHandler(index)}
              />
            ))}
            {/* Render first FAQ item */}
          </ul>
          <div className={classes.newsletter}>
            <div className={classes.newsletterContainer}>
              <form action="">
                <h3 className="ready">
                  Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div className={classes.form}>
                  <div className={classes.emailContainer}>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <Link>
                    Get Started <img src={nextSVG} alt="" width={24} height={24} />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FAQS;
