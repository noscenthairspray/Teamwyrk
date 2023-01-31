import React from "react";
import styles from "./Secondary.module.css";

const Secondary = ({ event, type, children, onClick }) => {
  return (
    <button
      className={`${styles.secondary} ${styles[`secondary${event}`]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Secondary;
