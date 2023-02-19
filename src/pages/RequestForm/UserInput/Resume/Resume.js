import { useState } from "react";
import { InputError } from "../../../../components/Alerts/Error";
import { CircularProgress } from "@mui/material";
import styles from "./Resume.module.css";

//TODO: Add Loading State when user is uploading file
const Resume = ({ formData, setFormData, setError }) => {
  const [uploadError, setUploadError] = useState("");

  const handleFileUpload = ({ target }) => {
    const file = target.files[0];
    const maxSize = 5 * 1024 * 1024; //5mb
    if (!file) {
      setUploadError("");
      setFormData((prev) => ({ ...prev, [target.name]: "" }));
      return;
    }
    if (file?.size > maxSize) {
      setUploadError("Your file size is larger than 5MB. Try again.");
      return;
    }
    //pdf & doc
    if (file?.type !== "application/pdf" && file?.type !== "application/doc") {
      setUploadError("The file was not a pdf or docx file. Try again.");
      return;
    }
    setUploadError("");
    setError((prev) => ({ ...prev, [target.name]: false }));
    setFormData((prev) => ({ ...prev, [target.name]: file }));
  };

  return (
    <>
      <p className={styles.resumeTitle}>
        Upload your resume (5MB size limit. Pdf or doc only.){" "}
        <span className={styles.redAsterick}>*</span>
      </p>
      <input
        accept=".pdf,.doc"
        id="outlined-button-file"
        name="resumeFile"
        multiple
        type="file"
        hidden
        onChange={handleFileUpload}
      />
      {formData.resumeFile && (
        <span className={styles.fileChosen}>{formData.resumeFile.name}</span>
      )}

      {!formData?.resumeFile ? (
        <>
          {/* <div className={styles.loadingWrapper}>
            <CircularProgress size={25} sx={{ color: "#37447e" }} />
            <span>Uploading resume...</span>
          </div> */}

          <label for="outlined-button-file" className={styles.attachLabelBtn}>
            <img
              src="/images/request_form/resume_icon.svg"
              alt="resume icon"
              className={styles.resumeIcon}
            />
            Attach a file
          </label>
        </>
      ) : (
        <label for="outlined-button-file" className={styles.replaceLabelBtn}>
          Replace
        </label>
      )}
      {uploadError ? <InputError text={uploadError} /> : null}
    </>
  );
};

export default Resume;
