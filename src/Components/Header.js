/** @format */

import { Link } from "react-router-dom";
import { useRef } from "react";

import netflixSVG from "../assets/netflix-svgrepo-com.svg";
import nextSVG from "../assets/next-svgrepo-com.svg";
import classes from "./MainNav.module.css";

function MainNav() {
  const inputRef = useRef(null);
  const handleLinkClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <header className={classes.container}>
        <div className={classes.content}>
          <nav className={classes}>
            <div className={classes.navContainer}>
              <span className={classes.netflixSVG}>
                <img src={netflixSVG} alt="" />
              </span>
              <span>
                <Link>Sign In</Link>
              </span>
            </div>
          </nav>

          <main className={classes.mainContainer}>
            <div className={classes.heroContainer}>
              <h1>Ulimited movies, TV shows, and more</h1>
              <p>Watch anywhere. Cancel anytime</p>

              <div className={classes.formsContainer}>
                <div className={classes.formsInnerContainer}>
                  <form className={classes.formContainer}>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                    <div className={classes.inputContainer}>
                      <div className={classes.container}>
                        <input type="email" name="email" id="email" ref={inputRef} />
                        <label htmlFor="email">Email address</label>
                      </div>

                      <Link onClick={handleLinkClick}>
                        <span className={classes.text}> Get Started </span>
                        <span>
                          <img src={nextSVG} alt="" width={24} height={24} />
                        </span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className={classes.gradientOverlay}></div>
      </header>
    </>
  );
}

export default MainNav;
