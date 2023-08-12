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
       <div className={styles.subtitle}>
        <strong>Note:</strong> Signing in using your email address is currently inactive. 
        However, we've made it possible for you to sign in using your Gmail account. 
        Select the "Sign up with Google" button below and you'll be all set!
        </div>
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
