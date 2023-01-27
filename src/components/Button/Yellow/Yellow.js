import React from "react";
import styles from "./Yellow.module.css";

const Yellow = ({ type, onClick, children }) => {
  return (
    <button
      className={`${styles.yellow} ${styles[`yellow${type}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Yellow;
