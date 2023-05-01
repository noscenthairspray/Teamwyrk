import styles from "./Profile.module.css";

const Profile = ({ userData }) => {
  const { photoURL, displayName } = userData;

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
      <div className={styles.name}>{displayName}</div>
    </div>
  );
};

export default Profile;
