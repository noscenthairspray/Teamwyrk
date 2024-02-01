import React, { useEffect, useState } from "react";
import styles from "./DeleteModal.module.css";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import DeleteEmailTemplate from "./DeleteEmailTemplate";

/** Modal is a React component that displays a modal dialog
 * allows users to confirm or cancel deletion on their account
 *
 * Props:
 * - closeModal: State if state to false, modal closes
 * - user: Object that holds the user's account information
 */
const Modal = ({ closeModal, user }) => {
  const navigate = useNavigate();
  const [deactivate, setDeactivate] = useState(false);

  const userAccountInfo = user;

  useEffect(() => {
    const handleDeactivate = async (title) => {
      // TODO
      // await somedeactivatefunctionforFB();
    };

    if (deactivate) {
      navigate("/signin");
      handleDeactivate().catch(console.error);
    }
  }, [deactivate, navigate]);

  /** Function to send a delete email when 'Continue' is clicked */
  const handleDeleteEmail = async () => {
    // userName: user's name
    const emailTemplate = DeleteEmailTemplate(userAccountInfo.displayName);

    try {
      // Adds new email document
      const docRef = await addDoc(collection(db, "mail"), {
        to: userAccountInfo.email,
        message: {
          subject: "Account Deletion Confirmation ",
          html: emailTemplate,
        },
      }); 
    } catch (error) {
      // Error sending email
    }
  };

  return (
    <div className={styles.modelWrapper}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.title}>
            <img src="/images/profile/alert.svg" alt="deactivate_alert_logo" />
            <h1>Is this goodbye?</h1>
          </div>
          <div className={styles.body}>
            <p>
              Please note that deleting your account is final. As a reminder,
            </p>
            <ul>
              <li>
                Deleting your account will permanently restrict access to all
                notifications, emails and other modes of contact
              </li>
              <li>
                Your data will not be kept and will no longer be acceptable to
                other users.
              </li>
              <li>
                Deleted users must create a new account if they wish to use the
                platform again.
              </li>
            </ul>
            <p>
              If you have ay questions or concerns about deleting your account,
              please contact our support team.
            </p>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttons}>
              <StyledButton
                className={styles.continueBtn}
                color="primary"
                onClick={() => {
                  setDeactivate(true);
                  handleDeleteEmail();
                }}
              >
                {" "}
                Continue{" "}
              </StyledButton>
              <StyledButton
                className={styles.cancelBtn}
                onClick={() => closeModal(false)}
                color="secondary"
              >
                Cancel
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
