/** @format */

import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import netflixSVG from "../assets/netflix-svgrepo-com.svg";
import nextSVG from "../assets/next-svgrepo-com.svg";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <>
      <header className={classes.container}>
        <div className={classes.content}>
          <nav className={classes}>
            <div className={classes.navContainer}>
              <span>
                <ReactSVG src={netflixSVG} />
              </span>
              <span>
                <Link>Sign In</Link>
              </span>
            </div>
          </nav>

          <main className={classes.mainContainer}>
            <div className={classes.heroSection}>
              <h1>Ulimited movies, TV shows and more</h1>
            </div>
            <div className={classes.heroSection2}>
              <span>Watch anywhere. Cancel anytime</span>
            </div>
            <div>
              <form className={classes.formContainer}>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className={classes.container}>
                  <input type="email" name="email" id="email" />
                  <label htmlFor="email">Email address</label>
                </div>
                <Link>
                  Get Started{" "}
                  <span>
                    <img src={nextSVG} alt="" width={24} height={24} />
                  </span>
                </Link>
              </form>
            </div>
          </main>
        </div>
        <div className={classes.gradientOverlay}></div>
      </header>
    </>
  );
}

export default MainNav;
