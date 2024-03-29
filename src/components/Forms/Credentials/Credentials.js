import React from "react";
import { SubHeader } from "../../Typography";
import styles from "./Credentials.module.css";

//Sign up with credentials not implemented yet
//Disable input fields for now
const Credentials = ({ title, submitBtnText }) => {
  return (
    <form className={styles.credentialsForm}>
      <div className={styles.title}>
        <SubHeader color="black">{title}</SubHeader>
      </div>
      <div className={styles.emailWrapper}>
        <div className={styles.inputText}>Email</div>
        <input type="email" id="email" name="email" disabled />
      </div>
      <div className={styles.passwordWrapper}>
        <div className={styles.inputText}>Password</div>
        <input type="password" id="password" name="password" disabled />
      </div>
      <button className={styles.submitButton} disabled>
        {submitBtnText}
      </button>
    </form>
  );
};

export default Credentials;
