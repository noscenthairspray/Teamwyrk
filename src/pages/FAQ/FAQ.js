import CTA from "../../components/CTA";
import FAQQuestion from "./components/FAQQuestion/FAQQuestion";
import { questions } from "./data";

import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.questionLayout}>
        {questions.map((props) => (
          <FAQQuestion {...props} key={props.title} />
        ))}
      </div>
      <CTA buttonText="Join the waitlist" />
    </div>
  );
};

export default FAQ;
