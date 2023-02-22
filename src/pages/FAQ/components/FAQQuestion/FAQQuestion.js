import { BodyTwo, SubHeader } from "../../../../components/Typography";
import styles from "./FAQQuestion.module.css";

const FAQQuestion = ({ title, body }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SubHeader color="primary">{title}</SubHeader>
      </div>
      <BodyTwo color="darkBlue">{body}</BodyTwo>
    </div>
  );
};

export default FAQQuestion;
