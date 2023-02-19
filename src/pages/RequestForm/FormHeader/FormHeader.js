import { Header } from "../../../components/Typography";
import styles from "./FormHeader.module.css";

const FormHeader = () => {
  return (
    <>
      <div className={styles.title}>
        <Header color="darkBlue">Submit a request</Header>
      </div>
      <p className={styles.description}>
        Submit a request and Insiders will reach out personally via email if
        there’s a match.
      </p>
    </>
  );
};

export default FormHeader;
