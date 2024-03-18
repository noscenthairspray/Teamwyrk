import styles from "./Resume.module.css";
import { InputError } from "../../../../components/Alerts/Error";

const Resume = ({ register, errors, watch, onResumeChange }) => {
  const inputFile = watch("resume");

  return (
    <>
      <label htmlFor="resume">
        Upload your resume (5MB size limit. Pdf or doc only)
        <span className={styles.redAsterick}>*</span>
      </label>
      <div className={styles.fileButtonBlock}>
        <input
          type="file"
          id="resume"
          hidden
          {...register("resume", {
            required: true,
            onChange: (e) => {onResumeChange(e)},
            validate: {
              isFileValid: (value) => {
                const validTypes = [
                  "application/pdf",
                  "application/msword",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ];
                return validTypes.includes(value[0]?.type);
              },
            },
          })}
        />

        {inputFile?.[0]?.name && (
          <span className={styles.fileName}>{inputFile?.[0]?.name}</span>
        )}

        {!inputFile?.length ? (
          <>
            <label htmlFor="resume" className={styles.attachLabelBtn}>
              <img
                src="/images/request_form/resume_icon.svg"
                alt="resume icon"
                className={styles.resumeIcon}
              />
              Attach a file
            </label>
          </>
        ) : (
          <label htmlFor="resume" className={styles.replaceLabelBtn}>
            Replace
          </label>
        )}
      </div>
      {errors.resume && errors.resume.type === "required" && (
        <InputError text="Please upload a file." />
      )}
      {errors.resume && errors.resume.type === "isFileValid" && (
        <InputError text="Please upload a valid file (.pdf or .docx)." />
      )}
    </>
  );
};

export default Resume;
