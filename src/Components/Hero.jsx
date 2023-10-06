import React from "react";
import Button from "./Shared/Button";
import videoImg from "../assets/images/videoImg.png";
import msn from "../assets/images/msn.png";
import yahoo from "../assets/images/yahoo.png";
import nerd from "../assets/images/nerd.png";
import forbes from "../assets/images/forbes.png";
import travel from "../assets/images/travel.png";
import playButton from "../assets/icons/play-button.png";
import bg1 from "../assets/images/bg1.png";

const Hero = () => {
  return (
    <section className="max-w-[1250px] mx-auto px-3 bg-white pb-6 pt-[170px] relative overflow-x-hidden">
      <div className="absolute -right-24 w-80 h-80 bg-primary rounded-full"></div>      {/* right side shape*/}
      <div className="absolute -left-56 bottom-0 w-80 h-80 bg-primary rounded-full"></div>  {/* left bottom side shape*/}
    
      <div className="max-w-[950px] mx-auto ">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="max-w-sm mx-auto md:mx-0 md:text-start text-center relative ">
            <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl leading-tight ">
              Build caredit history and <span>save money</span>
            </h1>
            <small className="inline-block mt-4 mb-10 leading-6 text-[15px] text-black/75">
              By making your monthly payments on time, you can build credit
              history saving mony. Starting at $25 per month.
            </small>
            <br />
            <Button style={"sm:py-4 py-3 sm:px-9 px-7 text-white"}>
              Start building credit
            </Button>
            {/*  video demo start */}
            <div className="md:mt-16 mt-12 items-center flex space-x-3 justify-center md:justify-start ">
              <div className="rounded-md cursor-pointer relative ">
                <img
                  src={videoImg}
                  alt=""
                  className="w-20 bg-gray-200 rounded-md"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 bg-opacity-50 flex justify-center items-center rounded-md">
                  <img src={playButton} alt="" className="w-6" />
                </div>
              </div>
              <div>
                <b>Introducing Self</b>
                <br />
                <a href="" className="underline text-sm">
                  Watch the video
                </a>
              </div>
            </div>{" "}
            {/*  video demo end */}
          </div>
          <div className="flex md:justify-end justify-center mt-5">
            <img src={bg1} alt="" className="md:absolute top-[100px]" />
          </div>
        </div>
        {/* ----------- Brands logo */}
        <div className=" w-full relative overflow-x-auto ">
          <div className="min-w-[600px] flex  justify-between  items-center w-full  mt-16">
            <img src={msn} alt="" className="w-24 h-10 object-contain  " />
            <img src={yahoo} alt="" className="w-24 h-10 object-contain  " />
            <img src={travel} alt="" className="w-24 h-10 object-contain  " />
            <img src={forbes} alt="" className="w-24 h-10 object-contain  " />
            <img src={nerd} alt="" className="w-24 h-10 object-contain  " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
