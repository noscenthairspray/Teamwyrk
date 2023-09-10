import styles from "./InsiderAcceptModal.module.css";
import { ReactComponent as Avatar } from './Avatar.svg';
import { ReactComponent as LinkedInLogo } from './LinkedInLogo.svg';

// import { Block } from "@mui/icons-material";

//TODO: PASS INSIDER INFO AS PROP TO SHOW ON MODAL
//TODO: FINISH UP STYLING FOR MODAL

//TODO: ADD IN FUNCTIONALITY TO SHOW ALERT TOAST WHEN DECLINE BUTTON IS CLICKED
//TODO: NAVIGATE TO STRIPE PAYMENT PAGE WHEN APPROVE AND PAY IS CLICKED

const InsiderAcceptModal = ({ setOpenAcceptModal }) => {
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
              <div className={styles.name}>
                Abc Xyz
              </div>
              <div className={styles.company_name}>
                Google
              </div>
              <div className= {styles.designation}>
                Product Manager
              </div>
              <div className= {styles.social}>
                <span><LinkedInLogo /></span><span style={{ padding: '10px' , marginTop: "auto" , textDecoration : 'underline'}}><a href="www.linkedin.com" target="_blank">View Linkedin</a></span>
              </div>
            </div>
        </div>
          <div className={styles.actions}>
            <button className={styles.approve_button}>Approve and Pay ↗</button>
            <button
              className={styles.decline_button}
              onClick={() => setOpenAcceptModal(false)}
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
