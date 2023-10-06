import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import googlePlay from "../../assets/icons/google-play.png";
import { AiFillApple } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="relative max-w-[1250px] mx-auto overflow-hidden  bg-white h-full">
      {/* ------------- Top */}
      <div className="w-full  bg-linear pt-24 pb-36 ">
        <div className="max-w-[1000px] mx-auto px-3">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 space-y-5 sm:space-y-0">
            <div className="text-center">
              <b className="text-lg mb-3 inline-block">About us</b>
              <ul>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Features
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Our Stroy
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <b className="text-lg mb-3 inline-block">Discover</b>
              <ul>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Self's Blog
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Knowlwdge Base
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Customer Stroies
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <b className="text-lg mb-3 inline-block">Compnay</b>
              <ul>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Self's Blog
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Knowlwdge Base
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Customer Stroies
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <b className="text-lg mb-3 inline-block">Follow us</b>
              <ul>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm mb-3 inline-block">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* -------------- Bootom */}
      <div className="w-full min-h-[420px] rounded-t-[50%] py-16 bg-white -mt-20 h-full scale-x-[1.4] ">
        <div className=" sm:w-[45%] w-[70%] px-3 flex mx-auto flex-col items-center ">
          <Logo />
          <ul className="sm:flex sm:space-x-6 space-x-0 block space-y-3 sm:space-y-0 mt-3 text-center">
            <li>
              <a href="" className="text-[13px] ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] ">
                Terms & Condation{" "}
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] ">
                Compliance
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] ">
                Curd Agreements
              </a>
            </li>
          </ul>
          <div className="flex sm:flex-row flex-col space-y-3 sm:space-y-0 sm:space-x-6 space-x-0  mt-5">
            <Button style="bg-transparent border-black border text-black py-3 px-5 text-black flex items-center gap-3">
              <AiFillApple className="text-xl" />
              <span> App Store</span>
            </Button>
            <Button style="bg-transparent border-black border text-black py-3 px-5 text-black flex items-center gap-3">
              <img src={googlePlay} alt="" className="w-5" />
              <span> Google Play</span>
            </Button>
          </div>
          <div className="max-w-2xl mx-auto text-center mt-7">
            <small className="text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              nemo quibusdam aperiam praesentium ullam eveniet nam fugiat
              cupiditate. Fugiat voluptas aut exercitationem asperiores et iste
              ab harum incidunt in nulla aperiam, repudiandae alias, iure
              excepturi enim optio rem doloribus, hic quos! Eaque saepe,
              consequatur sequi dolorum esse veritatis inventore.
            </small>

            <small className="text-black/60 block mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              nemo quibusdam aperiam praesentium ullam eveniet nam fugiat
              cupiditate. Fugiat voluptas aut exercitationem asperiores et iste
            </small>
            <small className="text-black/60 block mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              nemo quibusdam aperiam praesentium
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
