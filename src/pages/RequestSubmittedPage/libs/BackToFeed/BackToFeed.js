import styles from "./BackToFeed.module.css";
import ThemeButton from "../../../../components/ThemeButton/ThemeButton";

const BackToFeed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ThemeButton buttonValue={"Go back to request feed"} link={"/request"} />
      </div>
    </div>
  );
};

export default BackToFeed;