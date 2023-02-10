import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../../components/Button";
import styles from "./RequestHeader.module.css";

const RequestHeader = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Requests</h1>
      <Link to="/request/form">
        <Button color="yellow" type="default">
          Submit a request
        </Button>
      </Link>
    </div>
  );
};

export default RequestHeader;
