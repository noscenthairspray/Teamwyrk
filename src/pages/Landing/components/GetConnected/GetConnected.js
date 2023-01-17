import Insiders from "./Insiders";
import styles from "./GetConnected.module.css";
import { insiders } from "../../data";

const GetConnected = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p> Get connected to insiders from top companies </p>
      </div>
      <div className={styles.wrapperText}>
        {insiders.map((insider, index) => (
          <Insiders insider={insider} position={index} key={insider.name} />
        ))}
      </div>
      <button className={styles.secondaryButton}>Become an Insider</button>
    </div>
  );
};

export default GetConnected;
