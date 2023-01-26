import React from "react";
import { Credentials } from "../../components/Forms";

import styles from "./SignUp.module.css";

//TODO: Add sign up submit button for credentials
const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftHalf} />
      <div className={styles.rightHalf}>
        <Credentials title="Sign up for WyrkTeam" submitBtnText="Sign up" />

        <div className={styles.dividerWrapper}>
          <p className={styles.divider}>or</p>
        </div>

        <button className={styles.googleButton}>
          <img src="images/access/google_icon.svg" alt="Google Logo" />
          Sign up with Google
        </button>
        <p className={styles.helperText}>
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;