import PillStates from "./PillStates";
import styles from "./RequestItem.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useEffect, useState } from "react";

const RequestItem = ({ deleteRequest, setOpenAcceptModal, requestData }) => {
  const {
    services,
    job_listing_url,
    desired_company,
    desired_role,
    createdAt,
    profile_image,
    status,
    payment,
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

  //deletes the request from the list and firestore
  const handleDelete = () => {
    deleteRequest(requestData.id);
  };

  return (
    <>
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
              <b>You</b> are requesting a{" "}
              <b>
                {services} for {`${payment}.`}
              </b>
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
            <button className={styles.deleteButton} onClick={handleDelete}>
              <img
                src="/icons/trash.svg"
                alt="delete"
                className={styles.deleteIcon}
              />
              <span className={styles.deleteText}>Delete</span>
            </button>
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
            <PillStates
              setOpenAcceptModal={setOpenAcceptModal}
              requestData={requestData}
              setRequestStatus={setRequestStatus}
              requestStatus={requestStatus}
            />
            {requestStatus !== "accept" && requestStatus !== "matching" ? (
              <div className={styles.apply}>
                *service still needs to be <br /> completed offline.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestItem;
