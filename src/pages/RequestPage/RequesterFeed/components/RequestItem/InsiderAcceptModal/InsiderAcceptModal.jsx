import styles from "./InsiderAcceptModal.module.css";
import { ReactComponent as Avatar } from "./Avatar.svg";
import { ReactComponent as LinkedInLogo } from "./LinkedInLogo.svg";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, update, ref } from "firebase/firestore";
import DeclinedEmailTemplate from "./DeclinedEmailTemplate";

// import { Block } from "@mui/icons-material";

//TODO: PASS INSIDER INFO AS PROP TO SHOW ON MODAL
//TODO: FINISH UP STYLING FOR MODAL

//TODO: ADD IN FUNCTIONALITY TO SHOW ALERT TOAST WHEN DECLINE BUTTON IS CLICKED

// TODO: Change the pill state after declined/accept

/**
 * InsiderAcceptModel is a React component that display a modal dialog
 * allows users to see the Insider that matched with their request
 * and decided whether to accept or declined the Insider's help.
 *
 * Props:
 * - setOpenModal: Function to update the 'open' state
 * - insiderID: A string of the Insider's ID
 * - requestData: Object that holds the request information
 */

const InsiderAcceptModal = ({
  setOpenAcceptModal,
  insiderID,
  requestData,
  setRequestStatus,
}) => {
  // State to hold the Insider's info (includes email, name, profile image, role)
  const [insiderInfo, setInsiderInfo] = useState([]);

  /** Effect hook to get the Insider's info from Firebase using the Insider's ID prop */
  useEffect(() => {
    const fetchInsiderInfo = async () => {
      const docRef = doc(db, "user", insiderID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInsiderInfo(docSnap.data());
      }
    };

    // Catches if no Insider is matched to the request
    if (insiderID !== null) {
      fetchInsiderInfo();
    }
  }, []);

  // Function updates the status on the request document in firestore
  const updateRequestInsiderStatus = async () => {
    await updateDoc(doc(db, "request", requestData.id), {
      status: "matched",
    })
      .then(setRequestStatus("matched"))
      .then(setOpenAcceptModal(false));
    // console.log("This is the updated status: matched");
  };

  /** Function to send an email everytime the decline button is clicked */
  const handleDecline = async () => {
    // Sender: Requester
    // Target: Insider
    const emailTemplate = DeclinedEmailTemplate(
      requestData.name,
      insiderInfo.name,
      requestData.services
    );

    try {
      // Adds a new mail document
      const mailDocRef = await addDoc(collection(db, "mail"), {
        to: insiderInfo.email,
        message: {
          subject: "Service request no longer needed",
          html: emailTemplate,
        },
      });
      // console.log(insiderInfo);

      // Get the request info from Firebase using the request ID
      const requestDocRef = doc(db, "request", requestData.id);

      // Update the Insider ID from the request data and change status to "matching"
      const removeInsider = await updateDoc(requestDocRef, {
        insider: null,
        status: "matching",
      });
      setRequestStatus("matching");
    } catch (error) {
      // Error sending mail
    }
  };

  // Component render
  return (
    <>
      <div className={styles.modal__container}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <div className={styles.modal_container_button}>
              <button onClick={() => setOpenAcceptModal(false)}>
                <strong>X</strong>
              </button>
            </div>
            <h3 className={styles.header_title}>
              <strong>An Insider has decided to take on your request!</strong>
            </h3>
          </div>
          <div className={styles.modal_body}>
            <div className={styles.image_container}>
              <Avatar />
            </div>
            <div className={styles.details_container}>
              <div className={styles.name}>Abc Xyz</div>
              <div className={styles.company_name}>Google</div>
              <div className={styles.designation}>Product Manager</div>
              <div className={styles.social}>
                <span>
                  <LinkedInLogo />
                </span>
                <span
                  style={{
                    padding: "10px",
                    marginTop: "auto",
                    textDecoration: "underline",
                  }}
                >
                  <a href="www.linkedin.com" target="_blank">
                    View Linkedin
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.approve_button}
              onClick={updateRequestInsiderStatus}
            >
              Approve and Pay ↗
            </button>
            <button
              className={styles.decline_button}
              onClick={() => {
                setOpenAcceptModal(false);
                handleDecline();
              }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsiderAcceptModal;
