import styles from "./CardItem.module.css";

const CardItem = () => {
  return (
    <div className={styles.container}>
      <h1>A platform to jump start your next role</h1>
      <div className={styles.featureCard}>
        <div className={styles.individualCard}>
          <img src="/images/landing_page/woman_laptop.png" alt="woman laptop" />
          <div className={styles.textWrapper}>
            <h2 className={styles.cardTitle}>Referral Service</h2>
            <p>
              Having trouble getting a contact at your target company? Connect
              with a insider who can make the referral for you.
            </p>
          </div>
        </div>
        <div className={styles.individualCard}>
          <img src="/images/landing_page/clipboard.png" alt="clipboard" />
          <div className={styles.textWrapper}>
            <h2 className={styles.cardTitle}>Resume Review</h2>
            <p>
              Our community of insiders will review your resume, maximizing your
              chances of getting an interview with the company you want.
            </p>
          </div>
        </div>
        <div className={styles.individualCard}>
          <img src="/images/landing_page/woman_phone.png" alt="woman phone" />
          <div className={styles.textWrapper}>
            <h2 className={styles.cardTitle}>Interview Prep</h2>
            <p>
              Practice for your interview with insiders from your target
              companies so that when you get in front of the hiring manager,
              YOU'RE ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
