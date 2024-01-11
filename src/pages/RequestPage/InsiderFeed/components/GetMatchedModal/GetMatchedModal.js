import { Dialog, DialogActions, DialogContent } from "@mui/material";
import StyledButton from "../../../../../components/StyledButton";
import styles from "./GetMatchedModal.module.css";
import { useEffect, useState } from "react";
import { auth, db } from "../../../../../firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const GetMatchedModal = ({
  open,
  setOpenModal,
  userContacts,
  handleSnackbarToggle,
}) => {
  const { name } = userContacts;
  const id = userContacts["id"];

  const [userID, setUserID] = useState("");

  // Gets current Insider ID
  useEffect(() => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
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

  // This gets the request data using the request ID
  // when the 'Get Matched' button is clicked
  const handleContinue = async () => {
    const docRef = doc(db, "request", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      updateRequest(docRef);
    }
  };

  // Updates the request data by including the user data
  // attaches the insider to this specific request
  // also changed the status to "matched"
  const updateRequest = async (docRef) => {
    await updateDoc(docRef, {
      insider: userID,
      status: "matched",
    });
  };

  // Need to create a function that changes the button from 'Get Matched' to something else
  //

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
            onClick={() => {
              handleSnackbarToggle();
              setOpenModal(false);
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
