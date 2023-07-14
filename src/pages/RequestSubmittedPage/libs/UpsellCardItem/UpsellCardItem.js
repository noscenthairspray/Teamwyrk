import { Link } from "react-router-dom"
import styles from "./UpsellCardItem.module.css";



const UpsellCardItem = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      In the meantime, feel free to explore our range of quality services.
      </div>
      <div className={styles.featureCard}>
        <div className={styles.individualCard}>
          <img src="/images/landing_page/woman_laptop.png" alt="woman laptop" />
          <div className={styles.textWrapper}>
            <h3 className={styles.cardTitle}>Referral Service</h3>
            <p>
              Having trouble getting a contact at your target company? Connect
              with a insider who can make the referral for you.
            </p>
            <h4 className={styles.cardLink}> 
              <Link to="/request/form"> <span>Get Started</span></Link>
            </h4>
          </div>
        </div>
        <div className={styles.individualCard}>
          <img src="/images/landing_page/clipboard.png" alt="clipboard" />
          <div className={styles.textWrapper}>
            <h3 className={styles.cardTitle}>Resume Review</h3>
            <p>
              Our community of insiders will review your resume, maximizing your
              chances of getting an interview with the company you want.
            </p>
            <h4 className={styles.cardLink}> 
              <Link to="/request/form"> <span>Get Started</span></Link>
            </h4>
          </div>
        </div>
        <div className={styles.individualCard}>
          <img src="/images/landing_page/woman_phone.png" alt="woman phone" />
          <div className={styles.textWrapper}>
            <h3 className={styles.cardTitle}>Interview Prep</h3>
            <p>
              Practice for your interview with insiders from your target
              companies so that when you get in front of the hiring manager,
              you're ready.
            </p>
            <h4 className={styles.cardLink}> 
              <Link to="/request/form"> <span>Get Started</span></Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellCardItem;
