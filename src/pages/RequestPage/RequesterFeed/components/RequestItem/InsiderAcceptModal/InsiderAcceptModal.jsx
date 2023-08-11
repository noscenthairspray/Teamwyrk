import styles from "./InsiderAcceptModal.module.css";

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
          <div className={styles.modal_body} />
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
