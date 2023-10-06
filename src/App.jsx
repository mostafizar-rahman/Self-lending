import React, { useRef, useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Shared/Header";
import About from "./Components/About";
import VideoInfo from "./Components/VideoInfo";
import Testimoniales from "./Components/Testimoniales";
import Footer from "./Components/Shared/Footer";

const Home = () => {
  const ref = useRef(null);

  const [toogleAnimation, settoogleAnimation] = useState(false);

  // useEffect(() => {
  //   let main = document.querySelector(".containerDactive");

  //   function handleSCroll() {
  //     if (main !== null) {
  //       let topElm = main.offsetTop;
  //       let btmElm = main.offsetTop + main.clientHeight;
  //       let top_screen = window.scrollY;
  //       let bottom_screen = window.scrollY + window.innerHeight;
  //       if (bottom_screen > topElm && top_screen < btmElm) {
  //         setCounterStart(true);
  //       } else {
  //         setCounterStart(false);
  //       }
  //     }
  //   }

  //   window.addEventListener("scroll", handleSCroll);

  //   return () => window.removeEventListener("scroll", handleSCroll);
  // }, []);


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
