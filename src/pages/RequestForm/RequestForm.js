import React from "react";
import Fields from "./Fields";
import Header from "./Header";
import styles from "./RequestForm.module.css";

//You can see your changes on url "/request/form"
//Page component for RequestForm that renders Header and Fields
const RequestForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {/* Header - Submit a request title and description */}
        <Header />
        {/* Fields - UserInput, Resume, Payment */}
        <Fields />
      </div>
    </div>
  );
};

export default RequestForm;
