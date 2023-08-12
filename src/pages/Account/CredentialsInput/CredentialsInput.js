import styles from "./CredentialsInput.module.css";
import { useForm } from "react-hook-form";
import StyledButton from "../../../components/StyledButton";

const CredentialsInput = () => {
  const { register } = useForm();

  return (
    <form className={styles.accountForm}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="janedoe1@gmail.com"
        {...register("email", {
          required: true,
        })}
      />
      <div className={styles.emailButton}>
        <StyledButton type="submit" disabled>
          Update email
        </StyledButton>
        <div className={styles.buttonText}>
          You are currently logged in using Gmail. To change your email, <br />
          contact us.
        </div>
      </div>
      <label htmlFor="password">Current Password</label>
      <input
        type="text"
        id="password"
        name="password"
        {...register("password", {
          required: true,
        })}
      />
      <label htmlFor="new-password">New Password</label>
      <input
        type="text"
        id="new-password"
        name="new-password"
        {...register("new-password", {
          required: true,
        })}
      />
      <label htmlFor="email">Confirm Password</label>
      <input
        type="text"
        id="confirm"
        name="confirm"
        {...register("confirm", {
          required: true,
        })}
      />
      <div>
        <StyledButton type="submit" disabled>
          Update Password
        </StyledButton>
        <span className={styles.buttonText}>
          Password change is disabled when using Google log-in.
        </span>
      </div>
    </form>
  );
};

export default CredentialsInput;
