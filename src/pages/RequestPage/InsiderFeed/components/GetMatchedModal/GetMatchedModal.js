import { Dialog, DialogActions, DialogContent } from "@mui/material";
import StyledButton from "../../../../../components/StyledButton";
import styles from "./GetMatchedModal.module.css";
import { useEffect, useState } from "react";
import { auth, db } from "../../../../../firebase";
import { doc, updateDoc, getDoc, collection, addDoc } from "firebase/firestore";
import EmailTemplate from './ContinueEmailTemplate' // Create as many templates as you want and switch them out
import { Subject } from "@mui/icons-material";

/**
 * GetMatchedModal is a React component that displays a modal dialog,
 * allowing users to proceed with matching an insider to their request.
 * 
 * Props:
 * - open: Boolean controlling the visibility of the modal
 * - setOpenModal: Function to update the 'open' state
 * - userContacts: Object containing the name and id of the user to contact
 * - handleSnackbarToggle: Function to toggle a snackbar/notification
 */

const GetMatchedModal = ({
  open,
  setOpenModal,
  userContacts,
  handleSnackbarToggle,
                           setPendingRequest,
}) => {
  // Destructuring to extract the name and id from userContacts prop
  const { name } = userContacts;
  const id = userContacts["id"];

  // State to hold the user's ID (UID)
  const [userID, setUserID] = useState("");

  // Effect hook to get the current insider's ID after authentication
  useEffect(() => {
    const user = auth.currentUser;
    if (user !== null) {
      // Using the authenticated user's details
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      setUserID(uid);
    }
  }, []);

  /**
   * handleContinue is called when the 'Continue' button is clicked.
   * It fetches the request data and sends an email to the user using Firestore.
   */
  const handleContinue = async () => {
    console.log("request id:", id);
    const docRef = doc(db, "request", id);
    const docSnap = await getDoc(docRef);
    const user = auth.currentUser;

    // If the target user exists then email them when 
    // Continue gets clicked
    if (docSnap.exists()) {
      // Sender, Target
      const emailTemplate = EmailTemplate(user.displayName, docSnap.data().name);
      try {
        const docRef = await addDoc(collection(db, "mail"), {
          to: docSnap.data().email,
          message: {
            subject: "Your Assistance Request Accepted",
            html: emailTemplate,
          },
        });
      } catch (error) {
        // Error sending mail
      }
      updateRequest(docRef);
    } else {
      // docSnap.data() will be undefined in this case
    }
  };

  /**
   * updateRequest updates the Firestore document to reflect the matched status.
   * 
   * @param {firebase.firestore.DocumentReference} docRef - Reference to the Firestore document to update.
   */
  const updateRequest = async (docRef) => {
    await updateDoc(docRef, {
      insider: userID,
      status: "matched",
    });
  };

  // Need to create a function that changes the button from 'Get Matched' to something else
  //

  // Component render
  return (
    <>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={() => setOpenModal(false)}
        PaperProps={{
          sx: { borderRadius: "20px", maxWidth: 785, p: "40px" },
        }}
      >
        <DialogContent sx={{ width: 705 }}>
          <p className={styles.modalText}>
            By clicking continue, you are giving TeamWyrk the consent to email{" "}
            <span className={styles.textHighlight}>{`${name} `}</span>
            an automated message to continue the matching process. This request
            will be moved to your{" "}
            <span className={styles.textHighlight}>in-progress</span> tab.
          </p>
        </DialogContent>
        <DialogActions
          sx={{
            width: 705,
            gap: "25px",
          }}
        >
          <StyledButton color="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </StyledButton>
          <StyledButton
            color="primary"
            onClick={async () => {
              handleSnackbarToggle();
              setOpenModal(false);




              await setPendingRequest(userContacts.requestId);
              handleContinue();


            }}
          >
            Continue
          </StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GetMatchedModal;