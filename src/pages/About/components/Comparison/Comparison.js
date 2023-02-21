import styles from "./Comparison.module.css";
import { BodyTwo, Header } from "../../../../components/Typography";
import { comparison } from "../../data";
import BulletPoints from "./BulletPoints/BulletPoints";

const Comparison = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <div className={styles.title}>
          <Header color="primary">How do we compare?</Header>
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
