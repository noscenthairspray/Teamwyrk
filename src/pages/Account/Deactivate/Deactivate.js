import styles from "./Deactivate.module.css";
import { auth, deleteUserAndData } from "../../../firebase";


//Deactivate + Delete Account text
const Deactivate = () => {

     // Function that handles account deactivation
  const handleDelete = () => {
    deleteUserAndData ()
      .then((result) => {
        console.log(result.data); // handle the result here, such as displaying a success message
        // After successfully deleting user data, delete the user's account
        auth.currentUser
          .delete()
          .then(() => {
            console.log("User account deleted");
            // Here, you might want to do more, like navigate the user to the homepage
          })
          .catch((error) => {
            console.log("Error deleting user:", error.message);
            // Handle any errors here
          });
      })
      .catch((error) => {
        console.log("Error deleting user data:", error);
        // Handle any errors here
      });
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
        <div className={styles.title}>Delete Account</div>
        <button onClick={handleDelete}>Delete Account</button>
        <p className={styles.text}>
          We're sorry to see you go. If there's anything we can do to improve
          your experience, please let us know.
        </p>
      </div>
    </>
  );
};

export default Deactivate;