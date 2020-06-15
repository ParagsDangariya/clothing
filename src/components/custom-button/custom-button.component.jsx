import React from "react";

import "./custom-buttom.style.scss";

const CustomButton = ({ children, isGooglesignIn, ...otherProps }) => (
  <button
    className={`${isGooglesignIn ? "GooglesignIn" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
