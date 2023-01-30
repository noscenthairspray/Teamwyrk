// import { useState } from "react";
import styles from "./Payment.module.css";

//Payment section texts, payment field, total, divider, and bullet point terms
const Payment = () => {
  // const [total, setTotal] = useState(0);

  return (
    <>
      How much will you pay each person?
      <label name="payment">
        <input type="currency"
          placeholder="$ 0 /person" />
      </label>
      <div>
        Total (USD)
        <p>total</p>
      </div>
    </>
  )
};

export default Payment;
