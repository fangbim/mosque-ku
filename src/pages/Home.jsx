import React from "react";
import DailySurah from "../components/DailySurah";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import MPVBanner from "../components/MPVBanner";
import ListFeatures from "../components/ListFeatures";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <MPVBanner />
      </section>
      <section id="features">
        <ListFeatures />
      </section>
      <DailySurah />
      <Feedback />
      <section id="aboutus">
        <Footer />
      </section>
    </>
  );
}

export default Home;
