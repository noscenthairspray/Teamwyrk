import React from "react";
import Primary from "./Primary";
import Secondary from "./Secondary";

const Button = ({ variant, type, children }) => {
  const getButtonComponent = () => {
    console.log(variant);
    switch (variant) {
      case "primary":
        return <Primary type={type}>{children}</Primary>;
      case "secondary":
        return <Secondary type={type}>{children}</Secondary>;
      default:
    }
  };
  return getButtonComponent();
};

export default Button;
