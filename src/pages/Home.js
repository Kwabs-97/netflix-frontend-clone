/** @format */
import React from "react";
import Header from "../Components/Header";
import Hero1 from "../Components/Hero1";
import Divider from "../Components/Divider";
import DownloadsHero from "../Components/DownloadsHero";
import SubCard from "../Components/SubCard";
import SubCard2 from "../Components/SubCard2";
import FAQS from "../Components/FAQS";

function Home() {
  return (
    <>
      <Header />
      <Divider />
      <Hero1 />
      <Divider />
      <DownloadsHero />
      <Divider />
      <SubCard />
      <Divider />
      <SubCard2 />
      <Divider />
      <FAQS />
      <Divider />
    </>
  );
}

export default Home;
