import React from "react";
import Button from "./Shared/Button";
import videoImag from "../assets/images/videoImg2.jpg";
import playButton from "../assets/icons/play-button.png";
import Title from "./Shared/Title";

const VideoInfo = () => {
  return (
    <section className="max-w-[1250px] mx-auto overflow-hidden bg-white pt-24 pb-44">
      <div className="max-w-[950px] mx-auto px-3">
        <Title>
          Payment history makes up 35% of your credit score. Open a credit
          builder account and make your monthly payments on time to build a
          positive history.
        </Title>
        <div className="flex justify-center mt-10">
          <Button style="bg-transparent border-black border text-black py-3 px-7">
            About Credit Builder
          </Button>
        </div>
      </div>
      <div className="h-[350px] rounded-t-[50%] scale-125 mt-52 relative">
        <img
          src={videoImag}
          alt=""
          className="h-[350px] w-full object-cover rounded-t-[50%] scale-125"
        />
        <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex  flex-col items-center rounded-md rounded-t-[50%] scale-125">
          <h1 className="text-white sm:text-2xl text-xl font-bold text-center mt-[60px]">See how it works in <br /> less than 1 minute</h1>
          <img src={playButton} alt="" className="w-10 mt-[70px]" />
        </div>
      </div>
    </section>
  );
};

export default VideoInfo;
