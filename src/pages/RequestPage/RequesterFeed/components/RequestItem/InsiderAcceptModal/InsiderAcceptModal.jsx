import styles from "./InsiderAcceptModal.module.css";
import { ReactComponent as Avatar } from "./Avatar.svg";
import { ReactComponent as LinkedInLogo } from "./LinkedInLogo.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

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
  const [insiderInfo, setInsiderInfo] = useState([]);
  useEffect(() => {
    const fetchInsiderInfo = async () => {
      const docRef = doc(db, "user", insiderID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInsiderInfo(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchInsiderInfo();
  }, []);

  /* Sends an email everytime the decline button is clicked */
  const handleDecline = async () => {
    /** add a new mail document */

    const docRef = await addDoc(collection(db, "mail"), {
      to: insiderInfo.email,
      message: {
        subject: "An Update on your Request",
        html: "You have been declined. You are receiving this email to inform you that (requester name) has declined your help. The request will be removed from your feed. Best, Teamwyrk",
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
            <button className={styles.approve_button}>Approve and Pay ↗</button>
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
