import React from "react";
import Primary from "./Primary";
import Secondary from "./Secondary";
import Yellow from "./Yellow";
const Button = ({ color, event, type, onClick, children }) => {
  const getButtonComponent = () => {
    switch (color) {
      case "primary":
        return (
          <Primary color={color} event={event} type={type} onClick={onClick}>
            {children}
          </Primary>
        );
      case "secondary":
        return (
          <Secondary color={color} event={event} type={type} onClick={onClick}>
            {children}
          </Secondary>
        );
      case "yellow":
        return (
          <Yellow color={color} event={event} type={type} onClick={onClick}>
            {children}
          </Yellow>
        );
      default:
    }
  };
  return getButtonComponent();
};

export default Button;
