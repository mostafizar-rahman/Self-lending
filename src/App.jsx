import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Shared/Header";
import About from "./Components/About";
import VideoInfo from "./Components/VideoInfo";
import Testimoniales from "./Components/Testimoniales";
import Footer from "./Components/Shared/Footer";

const Home = () => {
  const [toogleAnimation, settoogleAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        settoogleAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const handleClick = () => {
    settoogleAnimation(true);
  };
  return (
    <div
      className={`relative max-w-[1250px] mx-auto ${
        toogleAnimation ? "containerActive" : "containerDactive"
      } `}
    >
      <header
        className={`fixed  top-0 z-40 max-w-[1250px] w-full flex justify-between `}
      >
        <Header />
      </header>

      <main
        className={` ${toogleAnimation ? "heroActive" : "heroDactive"}`}
        onClick={handleClick}
      >
        <Hero />
        <About />
        <VideoInfo />
        <Testimoniales />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
