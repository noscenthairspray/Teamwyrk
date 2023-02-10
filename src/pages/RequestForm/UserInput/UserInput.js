import { useState } from "react";
import styles from "./UserInput.module.css";
import Yellow from "../../../components/Button/Yellow";
import Resume from "./Resume";
import Terms from "./Terms";
import { InputError } from "../../../components/Alerts/Error";
import { Link } from "react-router-dom";
import { validateEmailUrl } from "../../../utils/validate";

const initialFormState = {
  services: "",
  fullName: "",
  email: "",
  desiredCompany: "",
  desiredRole: "",
  jobListingUrl: "",
  resumeFile: "",
  payment: "",
};

const initialErrorState = {
  services: false,
  fullName: false,
  email: false,
  desiredCompany: false,
  desiredRole: false,
  jobListingUrl: false,
  resumeFile: false,
  payment: false,
};

const UserInput = () => {
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState({ ...initialErrorState });
  const changeHandle = ({ target }) => {
    //TODO: Refactor - move to helper function
    if (target.name === "jobListingUrl") {
      var expr = /^[a-zA-Z/0-9.:;!*%&#?$+~@()=_-]*$/;
      //check for url only chars
      if (!expr.test(target.value)) return;

      const url = validateEmailUrl(target.value);
      setFormData((prev) => ({
        ...prev,
        [target.name]: url,
      }));
      setError((prev) => ({ ...prev, [target.name]: false }));
      return;
    }
    if (target.name === "payment") {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value.replace(/[^0-9]/g, ""),
      }));
      setError((prev) => ({ ...prev, [target.name]: false }));
      return;
    }
    if (target.name === "email") {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value.trim(),
      }));

      if (!target.value) {
        setError((prev) => ({
          ...prev,
          [target.name]: false,
        }));
      } else {
        const checkEmail = target.value.includes("@");
        setError((prev) => ({
          ...prev,
          [target.name]: checkEmail ? false : true,
        }));
        return;
      }
    }
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
    setError((prev) => ({ ...prev, [target.name]: false }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    for (let key in formData) {
      //check for empty fields, skip jobListingUrl (optional)
      if (!formData[key]) {
        if (key === "jobListingUrl") continue;
        setError((prev) => ({ ...prev, [key]: true }));
      }
    }
  };

  return (
    <>
      <form onSubmit={submitHandle} className={styles.requestForm}>
        <fieldset className={styles.topFieldset}>
          <p className={styles.requiredText}>
            <span className={styles.redAsterisk}>*</span>Required information.
          </p>
          <label htmlFor="services">
            Select a service<span className={styles.redAsterisk}>*</span>
          </label>
          <select
            id="services"
            className={styles.select}
            onChange={changeHandle}
            name="services"
          >
            <option
              selected={true}
              disabled
              value=""
              className={styles.selectOne}
            >
              Select one
            </option>
            <option value="referrals">Referrals</option>
            <option value="resume-review">Resume Review</option>
            <option value="career-coaching">Career Coaching</option>
          </select>
          {error.services ? (
            <InputError text="Please select one service." />
          ) : null}

          <label htmlFor="fullName">
            Full name<span className={styles.redAsterisk}>*</span>
          </label>
          <input
            className={styles.formInput}
            id="fullName"
            name="fullName"
            type="text"
            placeholder="E.g. Jane Doe"
            onChange={changeHandle}
            value={formData.fullName}
          />
          {error.fullName ? (
            <InputError text="Please enter your full name." />
          ) : null}

          <label htmlFor="email">
            Email<span className={styles.redAsterisk}>*</span>{" "}
          </label>
          <input
            className={styles.formInput}
            id="email"
            name="email"
            placeholder="E.g. janedoe@gmail.com"
            onChange={changeHandle}
            value={formData.email}
          />
          {error.email ? (
            <InputError text="Please enter a valid email address." />
          ) : null}

          <label htmlFor="desiredCompany">
            Your desired company<span className={styles.redAsterisk}>*</span>
          </label>
          <input
            className={styles.formInput}
            id="desiredCompany"
            name="desiredCompany"
            placeholder="E.g. Microsoft"
            onChange={changeHandle}
            value={formData.desiredCompany}
          />
          {error.desiredCompany ? (
            <InputError text="Please enter your desired company." />
          ) : null}

          <label htmlFor="desiredRole">
            Your desired role<span className={styles.redAsterisk}>*</span>{" "}
          </label>
          <input
            className={styles.formInput}
            name="desiredRole"
            id="desiredRole"
            type="text"
            placeholder="E.g. Product Manager"
            onChange={changeHandle}
            value={formData.desiredRole}
          />
          {error.desiredRole ? (
            <InputError text="Please enter your desired role." />
          ) : null}

          <label htmlFor="jobListingUrl">
            Job listing url for referrals (optional)
          </label>
          <input
            className={styles.formInput}
            name="jobListingUrl"
            id="jobListingUrl"
            type="url"
            placeholder="https://"
            onChange={changeHandle}
            value={formData.jobListingUrl}
          />
          {error.jobListingUrl ? (
            <InputError text="Please enter a valid URL." />
          ) : null}
        </fieldset>

        <fieldset className={styles.resumeFieldset}>
          <Resume
            formData={formData}
            setFormData={setFormData}
            setError={setError}
          />
          {error.resumeFile && !formData.email ? (
            <InputError text="Please attach a resume." />
          ) : null}
        </fieldset>

        <fieldset className={styles.topFieldset}>
          <label htmlFor="payment">
            How much will you pay each person?
            <span className={styles.redAsterisk}>*</span>
          </label>
          <div>
            <input
              className={styles.paymentInput}
              name="payment"
              id="payment"
              maxLength="3"
              onChange={changeHandle}
              value={formData.payment || ""}
              placeholder="$ 0   / person"
            />
            <span
              className={styles.paymentCaption}
              style={{
                color: formData?.payment && formData?.payment > 100 && "red",
              }}
            >
              *You must enter a value (0-100).
            </span>
          </div>
          {error.payment ? <InputError text="Please enter a number." /> : null}

          <div className={styles.totalDisplay}>
            <p>Total (USD)</p>
            <h3>{formData.payment ? `$${formData.payment}.00` : "$0.00"}</h3>
          </div>
        </fieldset>

        <hr />

        <Terms />
        <fieldset>
          <Yellow type="submit">Submit request</Yellow>
          <Link to="/request">
            <button className={styles.cancelButton}>Cancel</button>
          </Link>
          <p className={styles.submitCaption}>
            *You will not be able to edit your request after submission.
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default UserInput;
