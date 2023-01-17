import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.upperContainer}>
        <div className={styles.imageWrapper}>
          {/* TODO: add teamwyrk linkedIn path */}
          <a href="#">
            <img src={"images/landing_page/linkedin.svg"} alt="linkedin"></img>
          </a>
        </div>
      </div>

      <div className={styles.lowerContainer}>
        <div className={styles.textWrapper}>
          <a href="mailto: team@teamwryk.com" className={styles.website}>
            team@teamwryk.com
          </a>
          <p className={styles.copyright}>
            © 2022 TeamWyrk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
