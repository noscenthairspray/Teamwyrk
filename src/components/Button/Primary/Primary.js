import React from "react";
import styles from "./Primary.module.css";

const Primary = ({ type, children }) => {
  return (
    <button className={`${styles.primary} ${styles[`primary${type}`]}`}>
      {children}
    </button>
  );
};

export default Primary;
