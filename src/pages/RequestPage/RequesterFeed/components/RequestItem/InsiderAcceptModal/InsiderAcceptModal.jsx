import styles from "./InsiderAcceptModal.module.css";

//TODO: PASS INSIDER INFO AS PROP TO SHOW ON MODAL
//TODO: FINISH UP STYLING FOR MODAL

//TODO: ADD IN FUNCTIONALITY TO SHOW ALERT TOAST WHEN DECLINE BUTTON IS CLICKED
//TODO: NAVIGATE TO STRIPE PAYMENT PAGE WHEN APPROVE AND PAY IS CLICKED


const InsiderAcceptModal = ({ notify, setOpenAcceptModal }) => {
  const handleDecline = () => {
    notify(<>
     <div className={styles.notify_message}>
      Please wait for another insider to accept your request!
     </div></>);
    setOpenAcceptModal(false);
  }
  const handleApprove = () => {
    notify("Approve Message");
    setOpenAcceptModal(false)
} 

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
            <button className={styles.approve_button} onClick={handleApprove}>Approve and Pay ↗</button>
            <button
              className={styles.decline_button}
              onClick={handleDecline}
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
