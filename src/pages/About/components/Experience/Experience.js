import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <div className={styles.title}>
          <h2>Our insiders have over 10+ years of experience</h2>
        </div>
        <p className={styles.description}>
          Whether it’s Product Management, Design, or Engineering, our reviewers
          aren’t just people working for companies. The collective ranges from
          skilled employees to industry veterans, bringing you the best we have
          to offer.
        </p>
      </div>

      <div className={styles.containerImage}>
        <img src="/images/about_page/experience_1.png" alt="experience_1" />
        <img src="/images/about_page/experience_2.png" alt="experience_2" />
        <img src="/images/about_page/experience_3.png" alt="experience_3" />
      </div>
    </div>
  );
};

export default Experience;
