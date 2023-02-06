import React from "react";
import Button from "../../../../components/Button";
import styles from "./RequestItem.module.css";

const RequestItem = ({ handleClickEmail }) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.avatar}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
      </div>
      <div className={styles.requestContent}>
        <div className={styles.userInfo}>
          <p className={styles.date}>1/22/23</p>
          <p className={styles.name}>
            <b>James</b> is requesting a <b>referall.</b>
          </p>
          <p className={styles.apply}>
            Applying for Product Manager roles @ DocuSign
          </p>
          <p className={styles.resume}>
            <a href="#">
              <img
                src="/icons/resume.svg"
                alt="resume"
                className={styles.resumeIcon}
              />
              View Resume
            </a>
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <p className={styles.price}>$ 1/person</p>
          <Button color="primary" event="default" onClick={handleClickEmail}>
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
