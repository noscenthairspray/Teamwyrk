import PillStates from "./PillStates";
import styles from "./RequestItem.module.css";

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
            <PillStates
              status={status}
              setOpenAcceptModal={setOpenAcceptModal}
            />
            {/* THIS SECOND ONE IS FOR TESTING ACCEPT BUTTON TO OPEN INSIDER ACCEPT MODAL */}
            {/* THIS SECOND ONE IS FOR TESTING ACCEPT BUTTON TO OPEN INSIDER ACCEPT MODAL */}
            <PillStates
              status="accept"
              setOpenAcceptModal={setOpenAcceptModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestItem;
