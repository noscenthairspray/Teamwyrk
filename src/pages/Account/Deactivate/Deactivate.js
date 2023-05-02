import styles from "./Deactivate.module.css";

//Deactivate + Delete Account text
const Deactivate = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.deactivateWrapper}>
          <div className={styles.title}>Deactivate Account</div>
          <p className={styles.text}>
            Need a break? We understand. If you are sure you want to deactivate
            your account, you may do so by selecting the link above.
          </p>
        </div>
        <div className={styles.title}>Delete Account</div>
        <p className={styles.text}>
          We're sorry to see you go. If there's anything we can do to improve
          your experience, please let us know.
        </p>
      </div>
    </>
  );
};

export default Deactivate;
