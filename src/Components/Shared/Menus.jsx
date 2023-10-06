import React from "react";
import { FaTimes } from "react-icons/fa";

const Menus = ({ handleMenuHide }) => {
  return (
    <div>
      {/* --------- Close icon */}
      <div
        className="lg:hidden block absolute right-[12px] top-[12px] py-2"
        onClick={handleMenuHide}
      >
        <FaTimes className="text-2xl cursor-pointer" />
      </div>
      {/* -----------Menus */}
      <ul className="flex flex-col lg:flex-row lg:items-center items-start lg:space-x-12 space-x-0 p-5 lg:p-0 leading-[50px] lg:leading-none mt-6 lg:mt-0">
        <li>
          <a href={""} className="  hover:text-secondary transition-all py-5  ">
            Home
          </a>
        </li>
        <li>
          <a
            href={""}
            className="  hover:text-secondary transition-all py-5 flex items-center space-x-2 "
          >
            <span>Service</span>
          </a>
        </li>
        <li>
          <a href={""} className="  hover:text-secondary transition-all py-5 ">
            Price
          </a>
        </li>
        <li>
          <a href={""} className="  hover:text-secondary transition-all py-5 ">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
