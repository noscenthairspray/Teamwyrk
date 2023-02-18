import styles from "./FormHeader.module.css";

const FormHeader = () => {
  return (
    <>
      <h1 className={styles.title}>Submit a Request</h1>
      <p className={styles.description}>
        Submit a request and Insiders will reach out personally via email if
        there’s a match.
      </p>
    </>
  );
};

export default FormHeader;
