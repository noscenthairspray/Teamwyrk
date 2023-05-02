import React from "react";
import { Link } from 'react-router-dom'
import RequestHeader from "../FeedLayout/RequestHeader";
import styles from "./EmptyFeed.module.css";
import StyledButton from "../../../../../components/StyledButton";


const EmptyFeed = ({ newRequestCount, children }) => {
  return (
    <div className={styles.container}>
      <RequestHeader hideButton={true}/>
      <div className={styles.listContainer}>
        <div className={styles.tabWrapper}>
          <div className={styles.listContainer2}>
            <img src="/images/request_form/empty_feed.svg" alt="Empty feed" />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.codeBlock}>
              <p className={styles.codeLine}>You currently have no requests.</p>
              <p className={styles.codeLineWithMargin}>Get started by submitting a request for a referral, resume review or interview prep below. All requests will be displayed here.</p>
              <p className={styles.buttonLine}>
              <Link to="/request/form">
        <StyledButton color="yellow" hover>
          Submit a request
        </StyledButton>
      </Link>
              </p>
            </div>
          </div>
          <div className={styles.tabWrapper}></div>
        </div>
        <div className={styles.list}>{children} </div> 
      </div> 
    </div> 
  );
};

export default EmptyFeed;