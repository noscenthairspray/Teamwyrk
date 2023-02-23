import React from "react";
import { Link } from "react-router-dom";
import { Credentials } from "../../components/Forms";
import { signInWithGoogle } from "../../firebase/auth/";
import styles from "./SignUp.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthState } from "../../hooks/useAuthState";

const SignUp = () => {
  const { isAuthenticated } = useAuthState();
  const navigate = useNavigate();

  //if the user is authenticated, redirect to the home page
  if (isAuthenticated) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftHalf} />
      <div className={styles.rightHalf}>
        <Credentials title="Sign up for WyrkTeam" submitBtnText="Sign up" />

        <div className={styles.dividerWrapper}>
          <p className={styles.divider}>or</p>
        </div>

        <button
          className={styles.googleButton}
          onClick={() => signInWithGoogle(navigate)}
        >
          <img src="/icons/google.svg" alt="Google Icon" />
          Sign up with Google
        </button>
        <p className={styles.helperText}>
          Already have an account?{" "}
          <Link to="/signin" replace>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
