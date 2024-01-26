import { useState } from "react";
import styles from "./Deactivate.module.css";
import Modal from "./DeleteModal";
import DeactivateEmailTemplate from "./DeactiviateEmailTemplate";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

//Deactivate + Delete Account te
const Deactivate = ({ user }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeactivate = async () => {
    const emailTemplate = DeactivateEmailTemplate(user.displayName);

    try {
      // Adds new email document
      const docRef = await addDoc(collection(db, "mail"), {
        to: user.email,
        message: {
          subject: "Your Account has been deactivated",
          html: emailTemplate,
        },
      });
    } catch (error) {
      // Error sending email
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.deactivateWrapper}>
          <button
            className={styles.title}
            onClick={() => {
              handleDeactivate();
            }}
          >
            Deactivate Account
          </button>
          <p className={styles.text}>
            Need a break? We understand. If you are sure you want to deactivate
            your account, you may do so by selecting the link above.
          </p>
        </div>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        >
          Delete Account
        </button>
        {isDeleteModalOpen && (
          <Modal closeModal={setIsDeleteModalOpen} user={user} />
        )}
        <p className={styles.text}>
          We're sorry to see you go. If there's anything we can do to improve
          your experience, please let us know.
        </p>
      </div>
    </>
  );
};

export default Deactivate;
