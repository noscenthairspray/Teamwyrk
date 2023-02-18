import { SubHeader } from "../../../../../components/Typography";
import styles from "./Statement.module.css";

const Statement = ({ statement, position }) => {
  const { title, text, image } = statement;

  const stylePosition = position % 2 === 0 ? "Even" : "Odd";

  return (
    <div
      className={`${styles.container} ${styles[`container${stylePosition}`]}`}
    >
      <div className={styles.wrapperText}>
        <div className={styles.title}>
          <SubHeader color="secondary">{title}</SubHeader>
        </div>
        <p>{text}</p>
      </div>
      <div
        className={`${styles.wrapperEllipse} ${
          styles[`wrapperEllipse${stylePosition}`]
        }`}
      >
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Statement;
