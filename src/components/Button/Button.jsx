import React from "react";
import "./Button.css";

const Button = ({ children, isSecondary, classes, onClick }) => {
  return (
    <button
      className={`button ${isSecondary && "secondary"} ${classes && classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
