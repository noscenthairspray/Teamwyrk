import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Yellow from "../../../components/Button/Yellow";
import styles from "./Form.module.css";
import FormHeader from "./FormHeader";
import Terms from "./Terms";
import Resume from "./Resume";
import { InputError } from "../../../components/Alerts/Error";
import { uploadFileToStorage } from "../../../utils/firebase-api";
import { addRequestToDB } from "../../../firebase";
import { CircularProgress } from "@mui/material";

const Form = () => {
  const [paymentValue, setPaymentValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onPaymentChange = (e) => {
    //Required when using handlePaymentKeyPress
    setError("payment", false);
    const newValue = e.target.value;
    setPaymentValue(newValue);
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
    const resumeUrl = await uploadFileToStorage(data.resume[0]); //returns url of uploaded resume
    updateData.resume = resumeUrl; // add resume url to updateData object

    try {
      const result = await addRequestToDB(updateData);
      console.log("result", result);
      setIsSubmitting(false);
      navigate("/request");
    } catch (error) {
      console.error("Error submitting request:", error);
      // handle error
    }
  };

  return (
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
              {...register("services", { required: false })}
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
                required: false,
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
                required: false,
                pattern: /^\S+@\S+$/i,
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
                required: false,
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
                required: false,
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
                  required: false,
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
            <Yellow type="submit">
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
            </Yellow>
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
  );
};

export default Form;
