import React from "react";
import Button from "../../../../../components/Button";
import styles from "./RequestHeader.module.css";

const RequestHeader = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Requests</h1>
      <Button variant="yellow" type="default">
        Submit a request
      </Button>
    </div>
  );
};

export default RequestHeader;
