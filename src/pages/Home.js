/** @format */
import React from "react";

import Header from "../Components/Header";
import Hero1 from "../Components/Hero1";
import Divider from "../Components/Divider";
import DownloadsHero from "../Components/DownloadsHero";
import SubCard from "../Components/SubCard";
import SubCard2 from "../Components/SubCard2";
import FAQS from "../Components/FAQS";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />

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
