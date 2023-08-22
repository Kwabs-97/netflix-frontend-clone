/** @format */

import { Link } from "react-router-dom";
import { useRef } from "react";

import Divider from "../../../features/Divider";

import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../../store/reducers/email-input";

import netflixSVG from "../../../assets/netflix-svgrepo-com.svg";
import classes from "./MainNav.module.css";

import Newsletter from "../../../features/Newsletter";

function MainNav() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const handleLinkClick = () => {
    inputRef.current.focus();
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    dispatch(setEmail(newEmail));
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
                <Link to="/login">Sign In</Link>
              </span>
            </div>
          </nav>

          <main className={classes.mainContainer}>
            <div className={classes.heroContainer}>
              <h1>Ulimited movies, TV shows, and more</h1>
              <p>Watch anywhere. Cancel anytime</p>
              <Newsletter />
            </div>
          </main>
        </div>
        <div className={classes.gradientOverlay}></div>
        <Divider />
      </header>
    </>
  );
}

export default MainNav;
