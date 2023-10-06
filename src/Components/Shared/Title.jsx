import React from "react";

const Title = ({ children }) => {
  return (
    <h5 className="font-bold text-xl sm:text-2xl md:text-3xl text-center sm:leading-[50px] leading-[35px]">
      {children}
    </h5>
  );
};

export default Title;
