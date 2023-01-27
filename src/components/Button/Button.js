import React from "react";
import Primary from "./Primary";
import Secondary from "./Secondary";
import Yellow from "./Yellow";
const Button = ({ variant, type, onClick, children }) => {
  const getButtonComponent = () => {
    switch (variant) {
      case "primary":
        return (
          <Primary type={type} onClick={onClick}>
            {children}
          </Primary>
        );
      case "secondary":
        return (
          <Secondary type={type} onClick={onClick}>
            {children}
          </Secondary>
        );
      case "yellow":
        return (
          <Yellow type={type} onClick={onClick}>
            {children}
          </Yellow>
        );
      default:
    }
  };
  return getButtonComponent();
};

export default Button;
