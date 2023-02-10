import styles from "./Terms.module.css";

const Terms = () => {
  return (
    <div className={styles.termsWrapper}>
      <ul className={styles.termsList}>
        <li>Insiders who answer will receive the subtotal shown above.</li>
        <li>
          Communication and payment to Insiders will be completed off platform.
        </li>
        <li>Information shared is only between you and the Insider.</li>
      </ul>
    </div>
  );
};

export default Terms;
