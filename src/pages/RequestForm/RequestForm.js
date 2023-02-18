import UserInput from "./UserInput";
import FormHeader from "./FormHeader";
import styles from "./RequestForm.module.css";

const RequestForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <FormHeader />
        <div className={styles.formControl}>
          <UserInput />
        </div>
      </div>
      <div className={styles.bubble}>
        <img src="/images/request_form/bubble.svg" alt="pay bubble" />
      </div>
    </div>
  );
};

export default RequestForm;
