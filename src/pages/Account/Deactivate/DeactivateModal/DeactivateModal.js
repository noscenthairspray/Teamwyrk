import React, { useState } from "react";
import styles from "../DeleteModal/DeleteModal.module.css";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import DeactivateEmailTemplate from "../DeactiviateEmailTemplate";
import { signOut } from "firebase/auth";

/** Modal is a React component that displays a modal dialog
 * allows users to confirm or cancel deletion on their account
 *
 * Props:
 * - closeModal: State if state to false, modal closes
 * - user: Object that holds the user's account information
 */
const DeactivateModal = ({ closeModal, user }) => {
  const navigate = useNavigate();

  /** Function to deactivate account 'Continue' is clicked */
  const handleDeactivate = async () => {
    // grab the user doc from the firestore
    const docRef = doc(db, "user", user.uid);
    const userDoc = await getDoc(docRef);

    // assign the users role to a varible
    const role = userDoc.data().role;
    try {
      // if the user's role is a requester then delete all request
      if (role === "requester") {
        const q = query(
          collection(db, "request"),
          where("uid", "==", user.uid) // Filter by logged-in user's uid
        );
        const querySnapshot = await getDocs(q);
        const requestsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        requestsData.forEach((req) => {
          deleteDoc(doc(db, "request", req.id));
        });
      }
      // if user's role is an insider, set all the request they are matched on back to matching status.
      else {
        const q = query(
          collection(db, "request"),
          where("insider", "==", user.uid) // Filter by logged-in user's uid
        );
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        const requestsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        requestsData.forEach((req) => {
          updateDoc(doc(db, "request", req.id), {
            insider: null,
            status: "matching",
          });
        });
      }

      navigate("/signin");
      signOut(auth);
    } catch (error) {}
  };

  /** Function to send a deactivate email when 'Continue' is clicked */
  const handleDeactivateEmail = async () => {
    // userName: user's name
    const emailTemplate = DeactivateEmailTemplate(user.displayName);

    try {
      // Adds new email document
      await addDoc(collection(db, "mail"), {
        to: user.email,
        message: {
          subject: "Account Deactivation Confirmation ",
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
            &nbsp;
            <p>
              Please note that deactivating your account will delete any request
              you are associated with. As a reminder,
            </p>
            <ul>
              <li>
                Deactivating your account will remove all request from any
                Insiders you are matched with.
              </li>
              <li>
                Your data will not be kept and will no longer be acceptable to
                other users.
              </li>
              <li>
                Deactivated users must log back into their account if they wish
                to use the platform again.
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
                  handleDeactivate();
                  handleDeactivateEmail();
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

export default DeactivateModal;
