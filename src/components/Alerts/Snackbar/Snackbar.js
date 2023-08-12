import React from "react";
import styles from "./Snackbar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
const Snackbar = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.icon}>
          <CheckIcon fontSize="small" sx={{ color: "#2B5B41" }} />
        </div>
        <div>
          <b>E-Mail Sent!</b> Please wait for the requester to accept your help.{" "}
        </div>
      </div>
      <button className={styles.closeIcon} onClick={onClose}>
        <CloseIcon fontSize="small" sx={{ color: "#18181899" }} />
      </button>
    </div>
  );
};

export default Snackbar;
