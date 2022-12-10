import styles from "./FAQQuestion.module.css";

const FAQQuestion = ({ title, body }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.questionTitle}>{title}</span>
      </div>
      <p className={styles.questionBody}>{body}</p>
    </div>
  );
};

export default FAQQuestion;
