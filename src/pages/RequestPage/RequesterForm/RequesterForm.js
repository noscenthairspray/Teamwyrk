import React, { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./RequesterForm.module.css";
import FormHeader from "./FormHeader";
import Terms from "./Terms";
import Resume from "./Resume";
import { InputError } from "../../../components/Alerts/Error";
import { uploadFileToStorage } from "../../../utils/firebase-api";
import { addRequestToDB } from "../../../firebase";
import { CircularProgress } from "@mui/material";
import { useAuthState } from "../../../hooks/useAuthState";
import StyledButton from "../../../components/StyledButton";
import { UpsellScreen } from "./UpsellScreen";

const RequesterForm = () => {
  const { user, isAuthenticated } = useAuthState();

  const [paymentValue, setPaymentValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // This state is for the confirmation(upsell) screen after the request is submitted successfully

  //adding state to track if required fields are set for coloring the submit button
  const [areReqFieldsSet, setAreReqFieldsSet] = useState({
    service_chosen: false,
    full_name: false,
    email: false,
    desired_company: false,
    desired_role: false,
    resume: false,
    payment: false,
  });

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  //custom onResumeChange function to track if resume field is set
  const onResumeChange = (e) => {
    setAreReqFieldsSet((prev) => ({ ...prev, resume: e.target.files?.length > 0 }));
  };

  const onPaymentChange = (e) => {
    //Required when using handlePaymentKeyPress
    setError("payment", false);
    const newValue = e.target.value;
    setPaymentValue(newValue);
    //update state to track if payment is set
    setAreReqFieldsSet((prev) => ({ ...prev, payment: newValue.trim() !== "" }));
  };

  const handlePaymentKeyPress = (e) => {
    //Prevent typing of non-numeric characters in pay input
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9\b]+$/;
    if (!regex.test(keyValue)) {
      e.preventDefault();
    }
  };

  const handleJobListingUrlBlur = (e) => {
    //if user forgets https:// add to url when out of focus
    const url = e.target.value;
    if (url.trim() !== "" && !url.startsWith("https://")) {
      e.target.value = `https://${url}`;
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let updateData = { ...data };
    const resumeUrl = await uploadFileToStorage(data.resume[0], user);
    updateData.resume = resumeUrl; // add resume url to updateData object

    try {
      await addRequestToDB(updateData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      //navigate("/request");
    } catch (error) {
      console.error("Error submitting request:", error);
      setIsSubmitted(false);
      // handle error
    }
  };

  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return !isSubmitted ? (
    <div className={styles.container}>
      <FormHeader />
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.requiredText}>
            <span className={styles.redAsterisk}>*</span>Required information.
          </p>

          <fieldset>
            <label htmlFor="services">
              Select a service<span className={styles.redAsterisk}>*</span>
            </label>
            <select
              className={styles.select}
              id="services"
              required
              {...register("services", { 
                required: true,
                //added custom onChange to track if service is set
                onChange: (e) => {
                  setAreReqFieldsSet({...areReqFieldsSet, service_chosen: e.target.value !== ""})
                } 
               })}
            >
              <option value="" hidden>
                Select one
              </option>
              <option value="referral">Referral</option>
              <option value="resume-review">Resume Review</option>
              <option value="career-coaching">Career Coaching</option>
            </select>
            {errors.services && (
              <InputError text="Please select one service." />
            )}
          </fieldset>

          <fieldset>
            <label htmlFor="name">
              Full Name<span className={styles.redAsterisk}>*</span>{" "}
            </label>
            <input
              type="text"
              id="name"
              placeholder="E.g. Jane Doe"
              {...register("name", {
                required: true,
                //added custom onChange to track if name is set
                onChange: (e) => {
                  setAreReqFieldsSet({...areReqFieldsSet, full_name: e.target.value !== ""})
                },
              })}
            />
            {errors.name && <InputError text="Please enter your full name." />}
          </fieldset>

          <fieldset>
            <label htmlFor="email">
              Email<span className={styles.redAsterisk}>*</span>{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="E.g. janedoe@gmail.com"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
                //added custom onChange to track if email is set
                onChange: (e) => {
                  setAreReqFieldsSet({...areReqFieldsSet, email: e.target.value !== ""})
                }
              })}
            />
            {errors.email && (
              <InputError text="Please enter a valid email address." />
            )}
          </fieldset>

          <fieldset>
            <label htmlFor="desired_company">
              Your desired company
              <span className={styles.redAsterisk}>*</span>
            </label>
            <input
              type="text"
              id="desired_company"
              placeholder="E.g. Microsoft"
              {...register("desired_company", {
                required: true,
                //added custom onChange to track if desired company is set
                onChange: (e) => {
                  setAreReqFieldsSet({...areReqFieldsSet, desired_company: e.target.value !== ""})
                }
              })}
            />
            {errors["desired_company"] && (
              <InputError text="Please enter your desired company." />
            )}
          </fieldset>

          <fieldset>
            <label htmlFor="desired_role">
              Your desired role<span className={styles.redAsterisk}>*</span>{" "}
            </label>
            <input
              type="text"
              id="desired_role"
              placeholder="E.g. Product Manager"
              {...register("desired_role", {
                required: true,
                //added custom onChange to track if desired role is set
                onChange: (e) => {
                  setAreReqFieldsSet({...areReqFieldsSet, desired_role: e.target.value !== ""})
                }
              })}
            />
            {errors["desired_role"] && (
              <InputError text="Please enter your desired role." />
            )}
          </fieldset>

          <fieldset>
            <label htmlFor="job_listing_url">
              Job listing url for referrals (optional)
            </label>
            <input
              type="url"
              id="job_listing_url"
              placeholder="https://"
              {...register("job_listing_url", {
                required: false,
                pattern:
                  /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/i,
              })}
              onBlur={handleJobListingUrlBlur}
            />
            {errors["job_listing_url"] && (
              <InputError text="Please enter a valid URL." />
            )}
          </fieldset>

          <fieldset>
            <Resume
              register={register}
              errors={errors}
              setError={setError}
              watch={watch}
              onResumeChange={onResumeChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="payment">
              How much will you pay each person?
              <span className={styles.redAsterisk}>*</span>
            </label>
            <div className={styles.paymentInputBlock}>
              <input
                className={styles.paymentInput}
                type="text"
                id="payment"
                placeholder="$ 0   / person"
                {...register("payment", {
                  required: true,
                  pattern: /^[0-9]{1,3}$/,
                  max: 100,
                })}
                inputMode="numeric"
                maxLength={3}
                value={paymentValue}
                onChange={onPaymentChange}
                onKeyDown={handlePaymentKeyPress}
              />
              <span
                className={styles.paymentCaption}
                style={{
                  color: paymentValue && paymentValue > 100 && "red",
                }}
              >
                *You must enter a value (0-100).
              </span>
              <div className={styles.bubble}>
                <img src="/images/request_form/bubble.svg" alt="pay bubble" />
              </div>
            </div>
            {errors.payment && errors.payment.type === "required" && (
              <InputError text="Please enter a number." />
            )}
          </fieldset>
          <div className={styles.totalDisplay}>
            <span className={styles.totalText}>Total (USD)</span>
            <span className={styles.totalAmount}>
              {!paymentValue !== undefined &&
                `$${parseFloat(paymentValue || 0).toFixed(2)}`}
            </span>
          </div>
          <hr />
          <Terms />

          <fieldset>
            <StyledButton
              //checking if all required fields are set in order to make submit button active (i.e. yellow color)
              color={Object.values(areReqFieldsSet).every(Boolean)
                ? "yellow" : "disabled"}
              type="submit"
              //disabled if any of the required fields are not set or if form is submitting
              disabled={isSubmitting || !Object.values(areReqFieldsSet).every(Boolean) ? true : false}
              hover
            >
              {isSubmitting ? (
                <div style={{ width: "110px" }}>
                  <CircularProgress
                    size={24}
                    sx={{
                      color: "#3A4780",
                      verticalAlign: "sub",
                    }}
                  />
                </div>
              ) : (
                "Submit request"
              )}
            </StyledButton>
            <Link to="/request">
              <button className={styles.cancelButton}>Cancel</button>
            </Link>
          </fieldset>

          <p className={styles.submitCaption}>
            *You will not be able to edit your request after submission.
          </p>
        </form>
      </div>
    </div>
  ) : (
    <UpsellScreen />
  );
};

export default RequesterForm;
