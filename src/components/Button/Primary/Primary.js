import React from "react";
import styles from "./Primary.module.css";

const Primary = ({ type, children, onClick }) => {
  return (
    <button
      className={`${styles.primary} ${styles[`primary${type}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Primary;
