/** @format */
import React from "react";
import Header from "../Components/Header";
import Hero1 from "../Components/Hero1";
import Divider from "../Components/Divider";
import DownloadsHero from "../Components/DownloadsHero";

function Home() {
  return (
    <>
      <Header />
      <Divider />
      <Hero1 />
      <Divider />
      <DownloadsHero />
      <Divider />
    </>
  );
}

export default Home;
