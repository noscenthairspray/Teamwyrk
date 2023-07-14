import UpsellCardItem from "./libs/UpsellCardItem/UpsellCardItem";
import styles from "./RequestSubmittedPage.module.css";
import BackToFeed from "./libs/BackToFeed/BackToFeed";
import UpsellWindow from "./libs/UpsellWindow/UpsellWindow";

const RequestSubmittedPage = () => {
  return (
    <div className={styles.container}>
      <UpsellWindow>
        <div className={styles.banner}>PLACE SUBMITTED BANER HERE</div>
        <UpsellCardItem />
      </UpsellWindow>
      <BackToFeed />
    </div>
  );
};

export default RequestSubmittedPage;
