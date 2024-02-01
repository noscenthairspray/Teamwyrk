import StyledButton from "../../../../../components/StyledButton";
import styles from "./RequestFeedItem.module.css";

const RequestFeedItem = ({ handleClickGetMatched, requestData }) => {
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
          <div className={styles.buttonWrapper}>
            <div className={styles.price}>{`${payment}`}</div>
            <StyledButton
              color={status === "pending" ? "secondary" : "primary"}
              onClick={() => handleClickGetMatched({ name, id })}
              hover
            >
              {status === "pending" ? "Pending Acceptance" : "Get Matched"}
              {/* TODO: add `accept`, `declined` state if the request is accepted/declined by requester */}
            </StyledButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestFeedItem;
