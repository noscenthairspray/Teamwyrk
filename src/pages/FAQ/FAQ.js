import CTA from "../../components/CTA";
import { Header } from "../../components/Typography";
import FAQQuestion from "./components/FAQQuestion/FAQQuestion";
import { questions } from "./data";

import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">Frequently Asked Questions</Header>
      </div>
      <div className={styles.questionLayout}>
        {questions.map((props) => (
          <FAQQuestion {...props} key={props.title} />
        ))}
      </div>
      <CTA buttonText="Get Started" />
    </div>
  );
};

export default FAQ;
