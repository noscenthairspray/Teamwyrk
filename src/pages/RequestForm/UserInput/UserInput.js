import { useState } from "react";
import styles from "./UserInput.module.css";
import Yellow from "../../../components/Button/Yellow";
import Resume from "./Resume";
import Payment from "./Payment";

//Input fields for Select Service, Full Name, etc...
//I would save the Select a service field for last since it's the most complicated

const UserInput = () => {
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
    setFormData({ ...initialFormState })
  }
  return (
    <>
      <form method="post" action="" onSubmit={submitHandle}>
        <label>Select a service
          <select>
            <option>Select a service</option>
            <option>Referrals</option>
            <option>Resume Review</option>
            <option>Career Coaching</option>
          </select>
        </label>
        <label>Full name
          <input
            type="name"
            placeholder="E.g. Jane Doe"
            onChange={changeHandle}
            value={formData.fullName} />
        </label>
        <label>Email
          <input type="email"
            placeholder="E.g. janedoe@gmail.com"
            onChange={changeHandle}
            value={formData.email} />
        </label>
        <label>Desired company
          <input
            type="text"
            placeholder="E.g. Microsoft"
            onChange={changeHandle}
            value={formData.desiredCompany} />
        </label>
        <label>Desired role
          <input
            type="text"
            placeholder="E.g. Product Manager"
            onChange={changeHandle}
            value={formData.desiredRole} />
        </label>
        <label>Job listing url (for referrals)
          <input
            type="url"
            placeholder="http://"
            onChange={changeHandle}
            value={formData.jobListingUrl} />
        </label>
        <Resume />
        <Payment />
        <Yellow>
          Submit request
        </Yellow>
      </form>
    </>
  )
};

export default UserInput;
