import Statement from "./Statement";
import styles from "./Showcase.module.css";
import { statement } from "../../data";

const Showcase = () => {
  return (
    <div className={styles.container}>
      {statement.map((s, idx) => (
        <Statement statement={s} position={idx} key={idx} />
      ))}
    </div>
  );
};

export default Showcase;
