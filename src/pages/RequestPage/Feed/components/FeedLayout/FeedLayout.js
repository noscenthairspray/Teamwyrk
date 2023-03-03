import React from "react";
import RequestHeader from "./RequestHeader";

import styles from "./FeedLayout.module.css";

const FeedLayout = ({ newRequestCount, children }) => {
  return (
    <div className={styles.container}>
      <RequestHeader />
      <div className={styles.listContainer}>
        <div className={styles.tabWrapper}>
          <button className={styles.allTab}>
            All
            {newRequestCount > 0 && (
              <span className={styles.newCountIcon}>{newRequestCount}</span>
            )}
          </button>
        </div>
        <div className={styles.list}>{children}</div>
      </div>
    </div>
  );
};

export default FeedLayout;
