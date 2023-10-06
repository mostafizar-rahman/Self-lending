import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from "./Shared/Title";
import Button from "./Shared/Button";
const testimonialesList = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s",
    name: "Jon Deo",
    spaek:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis dicta, impedit quod eos omnis?",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s",
    name: "Jon Deo",
    spaek:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis dicta, impedit quod eos omnis?",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s",
    name: "Jon Deo",
    spaek:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis dicta, impedit quod eos omnis?",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s",
    name: "Jon Deo",
    spaek:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis dicta, impedit quod eos omnis?",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s",
    name: "Jon Deo",
    spaek:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis dicta, impedit quod eos omnis?",
  },
];
const Testimoniales = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "lg:ml-[150px]",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1250px] mx-auto overflow-x-hidden bg-white pb-24">
      <Title>Real people, real result</Title>
      <div className=" flex justify-center mt-3">
        <small className="text-center max-w-xs block">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sunt
          placeat neque maxime inventore odio
        </small>
      </div>
      <div className="mt-8">
        <Slider {...settings}>
          {testimonialesList.map(({ id, image, name, spaek }) => {
            return (
              <div key={id} className="bg-primary rounded-2xl py-5 px-4 ">
                <div className="w-10 h-10 rounded-full bg-white">
                  <img
                    src={image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <p className="text-sm mt-4 font-normal text-black/90">
                  {spaek}
                </p>
                <b className="mt-2 inline-block text-[15px]">-{name}</b>
              </div>
            );
          })}
        </Slider>
      </div>
      <button className="w-full mt-9 flex justify-center">
        <Button style="bg-transparent border-black border text-black py-3 px-8 text-black">
          Read More
        </Button>
      </button>
    </div>
  );
};

export default Testimoniales;
