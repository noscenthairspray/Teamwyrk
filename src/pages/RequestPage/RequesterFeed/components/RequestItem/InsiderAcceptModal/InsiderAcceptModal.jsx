import styles from "./InsiderAcceptModal.module.css";
import { ReactComponent as Avatar } from "./Avatar.svg";
import { ReactComponent as LinkedInLogo } from "./LinkedInLogo.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import getDeclineHTMLEmail from "./declineHTML";

// import { Block } from "@mui/icons-material";

//TODO: PASS INSIDER INFO AS PROP TO SHOW ON MODAL
//TODO: FINISH UP STYLING FOR MODAL

//TODO: ADD IN FUNCTIONALITY TO SHOW ALERT TOAST WHEN DECLINE BUTTON IS CLICKED
//TODO: NAVIGATE TO STRIPE PAYMENT PAGE WHEN APPROVE AND PAY IS CLICKED

// TODO: Fix the stylings of the email
// Should the email be in a template?

// TODO: Get requester name
// TODO: Change the pill state after declined/accept

const InsiderAcceptModal = ({ setOpenAcceptModal, insiderID }) => {
  const [insiderInfo, setInsiderInfo] = useState({});

  useEffect(() => {
    const fetchInsiderInfo = async () => {
      const docRef = doc(db, "user", insiderID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInsiderInfo(docSnap.data());
      }
    };
    fetchInsiderInfo();
  }, [insiderID]);

  const handleAccept = async () => {
    const userName = insiderInfo.name || 'User';
    // The jsx file needs to comply to getAccepted you need to create one per the
    // design sample
    const personalizedHtmlContent = getDeclineHTMLEmail(userName);
    try {
      const docRef = await addDoc(collection(db, "mail"), {
        to: insiderInfo.email,
        message: {
          subject: "Your Assistance Request Accepted",
          html: personalizedHtmlContent,
        },
      });
    } catch (error) {
      console.log("Error sending email", error);
    }
    // Additional actions can be added here
  };

  const handleDecline = async () => {
    const userName = insiderInfo.name || 'User';
    const personalizedHtmlContent = getDeclineHTMLEmail(userName);
    const docRef = await addDoc(collection(db, "mail"), {
      to: insiderInfo.email,
      message: {
        subject: "An Update on your Request",
        html: personalizedHtmlContent,
      },
    });
  };

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
              onClick={() => {
                handleAccept();
                setOpenAcceptModal(false);
              }}
            >
              Approve ↗
            </button>

            <button
              className={styles.decline_button}
              onClick={() => {
                handleDecline();
                setOpenAcceptModal(false);
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
