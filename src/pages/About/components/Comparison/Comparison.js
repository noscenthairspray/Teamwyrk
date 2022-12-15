import styles from "./Comparison.module.css";
import { comparison } from "../../data";
import BulletPoints from "./BulletPoints/BulletPoints";

const Comparison = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h2>How do we compare?</h2>
        <p>Take a look at how we compare to other companies</p>
      </div>
      <div className={styles.containerBulletPoints}>
        <BulletPoints comparisonData={comparison.teamwork} title="TeamWyrk" />
        <BulletPoints
          comparisonData={comparison.competitors}
          title="Competitors"
        />
      </div>
    </div>
  );
};

export default Comparison;
