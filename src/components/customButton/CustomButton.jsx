import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, className, ...otherProps }) => (
  <button className={`custom-button + ${className}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
