import React from "react";
import styles from "./Primary.module.css";

const Primary = ({ color, event, type, children, onClick }) => {
  return (
    <button
      className={`${styles.color} ${styles[`primary${event}`]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Primary;
