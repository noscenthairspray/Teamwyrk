import styles from "./Deactivate.module.css";
import { auth, addEmailToMailCollection } from "../../../firebase";


//Deactivate + Delete Account text
const Deactivate = () => {
  // Function that handles account deactivation
  const handleDelete = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );
    if (confirmed) {
      try {
        /*// Send email to the user being deleted
        await addEmailToMailCollection({
          to: auth.currentUser.email,
          message: {
            subject: 'Goodbye from TeamWyrk',
            html: 'Sorry to see you go!',
          },
        });
        */
        // Delete user account from Firebase Authentication
        await auth.currentUser.delete();

        console.log('User account and data deleted successfully');
      } catch (error) {
        console.error('Error deleting user account and data:', error.message);
        // Handle error (display an error message or take appropriate action)
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.deactivateWrapper}>
          <div className={styles.title}>Deactivate Account</div>
          <p className={styles.text}>
            Need a break? We understand. If you are sure you want to deactivate
            your account, you may do so by selecting the link above.
          </p>
        </div>
        <div className={styles.title}></div>
        <button className={styles.title} onClick={handleDelete}>Delete Account</button>
        <p className={styles.text}>
          We're sorry to see you go. If there's anything we can do to improve
          your experience, please let us know.
        </p>
      </div>
    </>
  );
};

export default Deactivate;