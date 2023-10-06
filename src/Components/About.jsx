import React from "react";
import phbg1 from "../assets/images/pgbg1.png";
import phbg2 from "../assets/images/pgbg2.png";
import money from "../assets/icons/money.png";
import Button from "./Shared/Button";
import { AiOutlineCheck } from "react-icons/ai";
const About = () => {
  return (
    <section className="max-w-[1250px] mx-auto px-3 bg-white pt-16">
      <div className="max-w-[950px] mx-auto">
        {/* --------- Card1 */}
        <div className="grid md:grid-cols-[45%_35%] justify-center md:justify-between">
          <div className="max-w-md text-center md:text-start flex items-center flex-col md:block">
            <div className="w-8 h-8 p-2 rounded-full flex justify-center items-center bg-[#09C9FF]">
              <img src={money} alt="" className="w-6 object-cover" />
            </div>
            <h4 className="font-bold  sm:text-2xl text-xl md:max-w-[200px] mt-5">
              Build credit while you save money
            </h4>
            <small className="mt-3 mb-9 leading-6 inline-block ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nam
              temporibus quam, reiciendis ea doloribus laudantium vero,
              perferendis illum magni corrupti fuga error. Delectus,
              repellendus.
            </small>
            <div className="mb-7 md:mb-0">
              <Button style="bg-transparent border-black border text-black py-3 px-8 text-black">
                Learn More
              </Button>
            </div>
          </div>
          <div className="max-w-sm w-full mx-auto">
            <div className="bg-primary rounded-[15%]  p-7 pt-[300px] relative max-w-sm w-full mx-auto">
              <img
                src={phbg1}
                alt=""
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
        </div>
        {/* -------- Card2 */}
        <div className="grid md:grid-cols-[35%_45%] justify-center md:justify-between md:mt-32 mt-20">
          <div className="order-1 md:order-0">
            <div className="bg-primary rounded-[15%] w-full p-7 pt-[300px] relative max-w-sm mx-auto">
              <img
                src={phbg2}
                alt=""
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
          <div className="order-0 md:order-1 max-w-md text-center md:text-start flex flex-col items-center md:block">
            <div className="w-8 h-8 p-2 rounded-full flex justify-center items-center bg-[#09C9FF]">
              <img src={money} alt="" className="w-6 object-cover" />
            </div>
            <h4 className="font-bold  sm:text-2xl text-xl md:max-w-[250px] mt-5">
              Track & Pay with self visa Caedit Card
            </h4>
            <small className="mt-3 mb-9 leading-6 inline-block ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nam
              temporibus quam, reiciendis ea doloribus laudantium vero,
              perferendis illum magni corrupti fuga error. Delectus,
              repellendus.
            </small>
            <div className="mb-7 md:mb-0">
              <Button style="bg-transparent border-black border text-black py-3 px-8 text-black">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        {/* ----------- features */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-between  mt-20">
          <div className="text-center ">
            <div className="w-8 h-8 rounded-full border border-[#09C9FF] flex justify-center items-center mx-auto">
              <AiOutlineCheck className="text-[#09C9FF]" />
            </div>
            <h5 className="font-semibold text-lg mt-5 mb-2">
              Available Everywhere
            </h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              voluptatem!
            </small>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full border border-[#09C9FF] flex justify-center items-center mx-auto">
              <AiOutlineCheck className="text-[#09C9FF]" />
            </div>
            <h5 className="font-semibold text-lg mt-5 mb-2">
              Credit & Payment Histoy
            </h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              voluptatem!
            </small>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full border border-[#09C9FF] flex justify-center items-center mx-auto">
              <AiOutlineCheck className="text-[#09C9FF]" />
            </div>
            <h5 className="font-semibold text-lg mt-5 mb-2">
              Secured Credit Card
            </h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              voluptatem!
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
