import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.upperContainer}>
        <div className={styles.imageWrapper}>
          <a
            href="https://www.linkedin.com/company/teamwyrk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/icons/linkedin.svg"} alt="linkedin"></img>
          </a>
        </div>
      </div>

      <div className={styles.lowerContainer}>
        <div className={styles.textWrapper}>
          <a href="mailto: team@teamwryk.com" className={styles.website}>
            team@teamwryk.com
          </a>
          <p className={styles.copyright}>
            © 2023 TeamWyrk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
