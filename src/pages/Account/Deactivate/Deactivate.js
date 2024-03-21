import { useState } from "react";
import styles from "./Deactivate.module.css";
import Modal from "./DeleteModal";
import DeactivateModal from "./DeactivateModal/DeactivateModal";

/** Deactivate is a React component that displays two buttons.
 * One button is for account deactivation and the other is for delection.
 * Deletion button opens up a DeleteModal.
 *
 * Props:
 * - user: Object that holds the user's account information
 */
const Deactivate = ({ user }) => {
  // State to hold Delete Modal and Deactivate Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.deactivateWrapper}>
          <button
            className={styles.title}
            onClick={() => {
              setIsDeactivateModalOpen(true);
            }}
          >
            Deactivate Account
          </button>
          {isDeactivateModalOpen && (
            <DeactivateModal
              closeModal={setIsDeactivateModalOpen}
              user={user}
            />
          )}
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
