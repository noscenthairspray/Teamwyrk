
import styles from "./FAQ.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Onboarding = () => {
  const [show, setShow] = useState(false)


  return (
    <div className={styles.container}>
      {/* <div>
          <Link to="/signup"><button className={styles.back}>&lt; <u>Back</u></button></Link>
      </div> */}

      <div className={styles.role}>
          <div className={styles.title}>
            <h2>Please select your role of interest:</h2>
          </div>

            <button className={styles.roleButton} onClick={()=>setShow(true)} >

              <div className={styles.roleButtonOuter}>
                <div className={styles.roleButtonInner}>
                  <div><strong>Requester</strong></div>
                  <div>Currently seeking employment in the technology industry.</div>
                </div>


                <div>
                  <img src="/images/onboarding/checkmark_onboarding.svg"></img>
                </div>
              </div>
            </button>
            
            <button className={styles.roleButton} onClick={()=>setShow(true)}>

              <div className={styles.roleButtonOuter}>
                <div className={styles.roleButtonInner}>
                  <div><strong>Insider</strong></div>
                  <div>Currently a working professional in the technology industry.</div>
                </div>

                <div>
                  <img src="/images/onboarding/checkmark_onboarding.svg"></img>
                </div>
              </div>
            </button>
            &nbsp;
            &nbsp;
            &nbsp;
            {
              show?<Link to="/request"><button className={styles.continue}>Continue</button></Link>: null
            }
            &nbsp;
            &nbsp;
            &nbsp;
      </div>
    </div>
  );
};

export default Onboarding;

