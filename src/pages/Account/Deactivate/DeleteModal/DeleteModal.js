import React from "react";

import styles from "./DeleteModal.module.css";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <h1>This is a test Modal </h1>
        </div>
        <div className={styles.body}>
          <p>The continue functionality has not been implemented.</p>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.cancelBtn}
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
          <button className={styles.continueBtn}> Continue </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
