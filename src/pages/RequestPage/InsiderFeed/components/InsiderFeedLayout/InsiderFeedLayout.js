import styles from "./InsiderFeedLayout.module.css";
import { Header } from "../../../../../components/Typography";

const InsiderFeedLayout = ({ tab, setTab, children }) => {
  const handleClickTab = (e) => {
    const currentTab = e.target.name;
    setTab(currentTab);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">All Requests</Header>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.tabWrapper}>
          <button
            className={`${styles.feedTab} ${
              tab === "feed" ? `${styles.feedTab} ${styles.active}` : ""
            }`}
            name="feed"
            onClick={handleClickTab}
          >
            Feed
          </button>
          <button
            className={`${styles.feedTab} ${
              tab === "in-progress" ? `${styles.feedTab} ${styles.active}` : ""
            }`}
            name="in-progress"
            onClick={handleClickTab}
          >
            In-progress
          </button>
        </div>
        <div className={styles.list}>{children}</div>
      </div>
    </div>
  );
};

export default InsiderFeedLayout;
