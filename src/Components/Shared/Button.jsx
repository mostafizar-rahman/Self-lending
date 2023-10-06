import React from "react";

const Button = ({children, style}) => {
  return (
    <a href="" className={`py-2 px-5 bg-secondary rounded-full text-sm ${style}`}>
      {children}
    </a>
  );
};

export default Button;
