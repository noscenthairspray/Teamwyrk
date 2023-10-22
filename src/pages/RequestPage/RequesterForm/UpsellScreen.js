// Upsell Screen for Request Confirmation
import styles from "./UpsellScreen.module.css";
import { CardItem } from "../../Landing/components";
import { useNavigate } from "react-router-dom";



export const UpsellScreen = () => {
  
  const navigate = useNavigate();

  
  return (
  <div className={styles.mainDiv}>
    <div className={styles.subDiv}>
      <div className={styles.topRow}>
        <h1 className={styles.requestSubmittedText}>
          <img
            src={"/icons/green-check.svg"}
            alt="Request submitted"
            className={styles.greenCheck}
          />
          Request submitted!{" "}
        </h1>
        <h2 className={styles.otherText}>
          {" "}
          Your request has been submitted successfully. You will receive an
          email notification once an Insider accepts your request and matches
          with you.
        </h2>
      </div>
      <div>
        <h3 className= {styles.h3}> 
          In the meantime, feel free to explore our range of quality services.
        </h3>
        <div className={styles.bottomRow}>
           <CardItem hasSubHeading = {false}/> 
        </div>
      </div>
    </div>

    <button className= {styles.goBackButton} onClick= {() => navigate("/request") }>
      Go back to request feed
    </button>
  </div>
  );
};

