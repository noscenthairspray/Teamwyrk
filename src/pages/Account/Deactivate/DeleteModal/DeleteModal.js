import React,{useEffect, useState} from "react";
import styles from "./DeleteModal.module.css";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import {useNavigate} from "react-router-dom"

const Modal = ({ closeModal }) => {
  const navigate = useNavigate()
  const [deactivate, setDeactivate] = useState(false);
 
 

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
              <StyledButton className={styles.continueBtn} color="primary" onClick={() => setDeactivate(true)} >
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
