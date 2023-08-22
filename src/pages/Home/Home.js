/** @format */
import React from "react";

import Header from "../../Components/Home/Header/Header";
import Hero1 from "../../Components/Home/Main/Hero1";
import DownloadsHero from "../../Components/Home/Main/DownloadsHero";
import SubCard from "../../Components/Home/Main/SubCard";
import SubCard2 from "../../Components/Home/Main/SubCard2";
import FAQS from "../../Components/Home/Main/FAQS";
import Footer from "../../Components/Home/Footer/Footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Hero1 />
      <DownloadsHero />
      <SubCard />
      <SubCard2 />
      <FAQS />
      <Footer />
    </>
  );
}

export default Home;
