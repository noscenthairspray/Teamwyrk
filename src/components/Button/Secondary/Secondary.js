import React from "react";
import styles from "./Secondary.module.css";

const Secondary = ({ type, children }) => {
  return (
    <button className={`${styles.secondary} ${styles[`secondary${type}`]}`}>
      {children}
    </button>
  );
};

export default Secondary;
