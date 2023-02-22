import styles from "./Comparison.module.css";
import { BodyTwo, SubHeader } from "../../../../components/Typography";
import { comparison } from "../../data";
import BulletPoints from "./BulletPoints/BulletPoints";

const Comparison = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <div className={styles.title}>
          <SubHeader color="primary">How do we compare?</SubHeader>
        </div>
        <BodyTwo color="primary">
          Take a look at how we compare to other companies
        </BodyTwo>
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
