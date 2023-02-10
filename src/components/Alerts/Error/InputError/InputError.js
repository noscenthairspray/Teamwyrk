import styles from "./InputError.module.css";

const InputError = ({ text }) => {
  return (
    <p className={styles.errorMsg}>
      <img
        className={styles.errorIcon}
        src="/images/request_form/error_icon.svg"
        alt="error icon"
      />
      {text}
    </p>
  );
};

export default InputError;
