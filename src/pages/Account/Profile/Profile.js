import styles from "./Profile.module.css";

const Profile = ({ userData }) => {
  const { photoURL, displayName, metadata } = userData;

  const createdAtDate = new Date(parseInt(metadata.createdAt, 10));

  const monthIdx = createdAtDate.getMonth() + 1; // Months are 0-indexed in JavaScript, so add 1 to get the correct month
  const year = createdAtDate.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleEditProfile = () => {
    //@Rowan - Implement profile upload to firebase logic here or at Account.js
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageContainer}>
        <img
          src={photoURL}
          alt="ProfileImage"
          className={styles.profileImage}
        />
        <button className={styles.editIconButton} onClick={handleEditProfile}>
          <img
            src={"/icons/profile-edit.svg"}
            alt="Edit"
            className={styles.editIcon}
          />
        </button>
      </div>
      <div className={styles.profileTextWrapper}>
        <div className={styles.name}>{displayName}</div>
        <p className={styles.memberText}>{`Member Since ${
          monthNames[monthIdx]
        }${" "}${year}`}</p>
      </div>
    </div>
  );
};

export default Profile;
