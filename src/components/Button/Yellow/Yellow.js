import React from "react";
import styles from "./Yellow.module.css";

const Yellow = ({ color, event, type, onClick, children }) => {
  return (
    <button
      className={`${styles.color} ${styles[`yellow${event}`]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Yellow;
