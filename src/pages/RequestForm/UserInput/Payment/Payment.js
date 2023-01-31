import { useState } from "react";
import styles from "./Payment.module.css";

//Payment section texts, payment field, total, divider, and bullet point terms
const Payment = () => {
  const [total, setTotal] = useState(0);

  return (
    <>
      How much will you pay each person?<span className={styles.red}>*</span>
      <br />
      <label htmlFor="payment">
        <input
          className={styles.paymentInput}
          name="payment"
          id="payment"
          type="currency"
          // value={setTotal(total)}
          placeholder="$ 0 /person" />
      </label>
      <div className={styles.totalDisplay}>
        <p>Total (USD)</p>
        <h3>$0.00</h3>
      </div>
    </>
  )
};

export default Payment;
