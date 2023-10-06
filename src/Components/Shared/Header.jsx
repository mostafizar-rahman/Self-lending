import React, { useState } from "react";
import Logo from "./Logo";
import Menus from "./Menus";
import Button from "./Button";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDropdown = () => {
    setIsMenuOpen(true);
  };
  const handleMenuHide = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="px-4 bg-white w-full">
      <div className=" flex justify-between items-center py-1 ">
        <div className="flex items-center md:space-x-24 space-x-0 ">
          <Logo />
          {/* ----------- Menu for large devices */}
          <nav className={`lg:block hidden `}>
            <Menus handleMenuHide={handleMenuHide} />
          </nav>
          {/* ------- Menu for small divices */}
          <nav
            className={`lg:hidden block fixed z-50  ${
              isMenuOpen ? "left-0" : "-left-full"
            } transition-all top-0 min-w-[300px] h-full  bg-gray-200`}
          >
            <Menus handleMenuHide={handleMenuHide} />
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <a href="" className="text-sm font-medium">
            Log in
          </a>
          <Button style={"text-white"}>Get started</Button>

          <div className="lg:hidden block" onClick={handleDropdown}>
            <FaBars className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
