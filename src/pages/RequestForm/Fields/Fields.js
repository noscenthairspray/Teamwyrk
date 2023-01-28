import React from "react";
import styles from "./Fields.module.css";
import Payment from "./Payment";
import Resume from "./Resume";
import UserInput from "./UserInput";

//This is the parent component for the fields - UserInput, Resume, Payment, Submit btn, Cancel btn
const Fields = () => {
  return (
    <div className={styles.container}>
      <UserInput />
      <Resume />
      <Payment />
      {/* Submit request button and cancel button */}
      {/* You can import the Yellow Button component from src/components/buttons if you want */}
    </div>
  );
};

export default Fields;
