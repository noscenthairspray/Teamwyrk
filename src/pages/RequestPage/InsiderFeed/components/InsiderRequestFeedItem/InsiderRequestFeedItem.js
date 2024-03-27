import React from "react";
import PillState from "./PillStates/PillStates";
import styles from "./InsiderRequestFeedItem.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useEffect, useState } from "react";

//"In-progress" tab request item component
//Pill state goes here
const InsiderRequestFeedItem = ({ requestData }) => {
  const {
    name,
    id,
    status,
    resume,
    services,
    job_listing_url,
    desired_company,
    desired_role,
    payment,
    createdAt,
    profile_image,
  } = requestData;

  // state to pass status through props to PillStates
  const [requestStatus, setRequestStatus] = useState(status);

  // Adds a listener to the request document and sets the requestStatus state to pass as prop
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "request", requestData.status), (doc) => {
      setRequestStatus(doc.data().status);
      // console.log("status from doc: ", doc.data());
    });
    unsub();
    // console.log("status from request data: ", status);
  }, [requestData.status, setRequestStatus]);

  // TODO(huiru): do we need to handle delete request here?

  return (
    <div className={styles.rowContainer}>
      <div className={styles.avatar}>
        <img src={profile_image} alt="Avatar" />
      </div>
      <div className={styles.requestContent}>
        <div className={styles.userInfo}>
          <p className={styles.date}>
            {createdAt.toDate().toLocaleDateString()}
          </p>
          <p className={styles.name}>
            <b>{name}</b> is requesting a <b>{services}.</b>
          </p>
          <p className={styles.apply}>
            Applying for {desired_role} roles @{" "}
            <a
              href={job_listing_url}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              {desired_company}
            </a>
          </p>
          <p className={styles.resume}>
            <a href={resume} target="_blank" rel="noreferrer">
              <img
                src="/icons/resume.svg"
                alt="resume"
                className={styles.resumeIcon}
              />
              View Resume
            </a>
          </p>
        </div>
        <div className={styles.pillState}>
          {requestStatus !== "accept" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 0,
                    margin: 0,
                  }}
                  className={styles.apply}
                >
                  Status
                </div>
              ) : null}
          {/* accept is Pending Acceptance, matched is Matched*/}
          <PillState requestStatus={requestStatus} />
          {requestStatus === "matched" ? (
            <div className={styles.apply}>
              *you have been sent an <br /> email with next steps
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InsiderRequestFeedItem;
