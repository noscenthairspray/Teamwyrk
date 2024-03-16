import { BodyTwo, SubHeader } from "../../../../components/Typography";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerText}>
          <div className={styles.title}>
            <SubHeader color="primary">
              Our Insiders have over 10+ years of experience
            </SubHeader>
          </div>
          <BodyTwo color="primary">
            From skilled employees to industry veterans, we are bringing you the
            best in the business. Whether it’s Product Management, Design, or
            Engineering, our Insiders will guide you in the right direction.
          </BodyTwo>
        </div>

        <div className={styles.containerImage}>
          <img src="/images/about_page/experience_1.png" alt="experience_1" />
          <img src="/images/about_page/experience_2.png" alt="experience_2" />
          <img src="/images/about_page/experience_3.png" alt="experience_3" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
