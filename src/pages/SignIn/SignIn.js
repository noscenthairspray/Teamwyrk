import React from "react";
import { Credentials } from "../../components/Forms";
import {auth, provider, signInWithPopup} from "../../firebase/auth/"
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftHalf} />
      <div className={styles.rightHalf}>
        <Credentials title="Sign in to WyrkTeam" submitBtnText="Sign in" />

        <div className={styles.dividerWrapper}>
          <p className={styles.divider}>or</p>
        </div>

        <button className={styles.googleButton} onClick={signInWithPopup(auth, provider)}>
          <img src="images/access/google_icon.svg" alt="Google Logo" />
          Sign in with Google
        </button>
        <p className={styles.helperText}>
          {`Don't have an account yet? `}
          <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
