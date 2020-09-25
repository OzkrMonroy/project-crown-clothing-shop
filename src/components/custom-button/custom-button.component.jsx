import React from "react";
import "./custom-button.styles.scss";

const CustommButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-signin': ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustommButton;
