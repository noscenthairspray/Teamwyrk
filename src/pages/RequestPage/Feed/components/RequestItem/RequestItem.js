import StyledButton from "../../../../../components/StyledButton";
import styles from "./RequestItem.module.css";

const RequestItem = ({ handleClickRequest, requestData }) => {
  const {
    name,
    email,
    resume,
    services,
    job_listing_url,
    desired_company,
    desired_role,
    payment,
    createdAt,
    profile_image,
  } = requestData;

  const handleButtonClick = () => {
    handleClickRequest({ name, email });
  };

  // For new button above avatar
  const isOneDayOld = (createdAt) => {
    const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    const createdAtTimestamp = createdAt.toDate().getTime();
    const currentTimestamp = Date.now();
    const differenceInMilliseconds = currentTimestamp - createdAtTimestamp;
    return differenceInMilliseconds >= ONE_DAY_IN_MILLISECONDS;
  };

  return (
    <>
      <div
        className={styles.rowContainer}
        style={{
          alignItems: !isOneDayOld(createdAt) ? "baseline" : "flex-sart",
        }}
      >
        <div
          className={styles.avatar}
          style={{
            marginTop: !isOneDayOld(createdAt) ? "10px" : "0px",
          }}
        >
          {!isOneDayOld(createdAt) && (
            <div className={styles.newIcon}>
              <span>New</span>
            </div>
          )}
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
            <p className={styles.price}>{`${payment}/person`}</p>
            <StyledButton color="primary" onClick={handleButtonClick}>
              Email
            </StyledButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestItem;
