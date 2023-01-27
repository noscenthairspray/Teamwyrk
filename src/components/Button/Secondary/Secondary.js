import React from "react";
import styles from "./Secondary.module.css";

const Secondary = ({ type, onClick, children }) => {
  return (
    <button
      className={`${styles.secondary} ${styles[`secondary${type}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Secondary;
