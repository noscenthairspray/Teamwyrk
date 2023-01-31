import React from "react";
import styles from "./Yellow.module.css";

const Yellow = ({ event, type, onClick, children }) => {
  return (
    <button
      className={`${styles.yellow} ${styles[`yellow${event}`]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Yellow;
