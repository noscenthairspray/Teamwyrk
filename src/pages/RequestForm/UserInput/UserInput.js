import { useState } from "react";
import styles from "./UserInput.module.css";
import Yellow from "../../../components/Button/Yellow";
import Resume from "./Resume";
import Payment from "./Payment";

//Input fields for Select Service, Full Name, etc...
//I would save the Select a service field for last since it's the most complicated

const UserInput = ({ userInputs, setUserInputs }) => {
  const initialFormState = {
    fullName: "",
    email: "",
    desiredCompany: "",
    desiredRole: "",
    jobListingUrl: ""
  }

  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandle = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const submitHandle = (e) => {
    e.preventDefault();
    setUserInputs([...userInputs, formData])
    setFormData({ ...initialFormState })
  }
  return (
    <>
      <form onSubmit={submitHandle}>
        <fieldset className={styles.topFieldset}>
          <label
            className={styles.label} htmlFor="services">Select a service<span className={styles.red}>*</span>
          </label>
          <select
            id="services"
            className={styles.select}
            required={true}>
            <option
              selected={true}
              disabled={true}
              value="">Select one</option>
            <option value="referrals">Referrals</option>
            <option value="resume-review">Resume Review</option>
            <option value="career-coaching">Career Coaching</option>
          </select>


          <label>Full name<span className={styles.red}>*</span>
            <input
              className={styles.formInput}
              id="fullName"
              name="fullName"
              type="text"
              placeholder="E.g. Jane Doe"
              onChange={changeHandle}
              required={true}
              value={formData.fullName} />
          </label>
          <label htmlFor="email">Email<span className={styles.red}>*</span>
            <input
              className={styles.formInput}
              id="email"
              name="email"
              type="email"
              required={true}
              placeholder="E.g. janedoe@gmail.com"
              onChange={changeHandle}
              value={formData.email} />
          </label>
          <label htmlFor="desiredCompany">Your desired company<span className={styles.red}>*</span>
            <input
              className={styles.formInput}
              id="desiredCompany"
              name="desiredCompany"
              type="text"
              placeholder="E.g. Microsoft"
              required={true}
              onChange={changeHandle}
              value={formData.desiredCompany} />
          </label>
          <label htmlFor="desiredRole">Your desired role<span className={styles.red}>*</span>
            <input
              className={styles.formInput}
              name="desiredRole"
              id="desiredRole"
              type="text"
              placeholder="E.g. Product Manager"
              required={true}
              onChange={changeHandle}
              value={formData.desiredRole} />
          </label>
          <label htmlFor="jobListingUrl">Job listing url (for referrals)
            <input
              className={styles.formInput}
              name="jobListingUrl"
              id="jobListingUrl"
              type="url"
              placeholder="http://"
              onChange={changeHandle}
              value={formData.jobListingUrl} />
          </label>
        </fieldset>
        <fieldset className={styles.resume}>
          <Resume />
        </fieldset>
        <fieldset>
          <Payment />
        </fieldset>
        <hr />
        <ul className={styles.fontStyling}>
          <li>
            Insiders who answer will receive the subtotal shown above.
          </li>
          <li>
            Communication and payment to Insiders will be completed off platform.
          </li>
          <li>
            Information shared is only  between you and the Insider.
          </li>
        </ul>
        <fieldset>
          <Yellow
            type="submit">
            Submit request
          </Yellow>
          <button className={styles.cancelButton}>Cancel</button>
        </fieldset>
      </form>
      <p className={styles.fontStyling}>*You will not be able to edit your request after submission.</p>
    </>
  )
};

export default UserInput;
