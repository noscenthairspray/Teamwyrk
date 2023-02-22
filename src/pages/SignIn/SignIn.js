import React from "react";
import { Link } from "react-router-dom";
import { Credentials } from "../../components/Forms";
import { auth, provider, signInWithGoogle } from "../../firebase/auth/";
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

        <button className={styles.googleButton} onClick={signInWithGoogle}>
          <img src="/icons/google.svg" alt="Google Icon" />
          Sign in with Google
        </button>
        <p className={styles.helperText}>
          Don't have an account yet?{" "}
          <Link to="/signup" replace>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
