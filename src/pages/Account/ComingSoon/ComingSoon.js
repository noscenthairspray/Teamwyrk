import styles from "./ComingSoon.module.css";

//Coming soon section + Deactivate Account section
const ComingSoon = () => {
  return (
    <>
      <div className={styles.title}>Coming Soon</div>
      <div>
        <div className={styles.comingSoonWrapper}>
          <p className={styles.notificationText}>
            Notification changes. In the future, users will be able to choose
            the frequency of requests, reminders, and other content from
            TeamWyrk.
          </p>
          <p className={styles.emailChangeText}>
            Email and password change. In the future, users will be able to log
            in using an email address and make changes directly from the
            settings page.
          </p>
        </div>
        <div className={styles.deactivateWrapper}>
          <div className={styles.deactivateSubtitle}>Deactivate Account</div>
          <p className={styles.deactivateText}>
            We’d hate to see you go, but you’re welcome to delete your account
            anytime. Just remember, once you delete it, it’s gone forever.
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
