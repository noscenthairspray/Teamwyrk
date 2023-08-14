import { useState } from "react";
import styles from "./Deactivate.module.css";
import Modal from "./DeleteModal" ;

//Deactivate + Delete Account te
const Deactivate = () => {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.deactivateWrapper}>
          <div className={styles.title}>Deactivate Account</div>
          <p className={styles.text}>
            Need a break? We understand. If you are sure you want to deactivate
            your account, you may do so by selecting the link above.
          </p>
        </div>
        <button className={styles.deleteBtn} onClick={()=> {setIsDeleteModalOpen(true)}}>
        Delete Account
        </button>
        {isDeleteModalOpen && (<Modal closeModal = {setIsDeleteModalOpen}/>)  }
        <p className={styles.text}>
          We're sorry to see you go. If there's anything we can do to improve
          your experience, please let us know.
        </p>
      </div>
    </>
  );
};

export default Deactivate;
