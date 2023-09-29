import { HowItWorks, GetConnected, CardItem, HeroItem } from "./components";
import styles from "./Landing.module.css";
import CTA from "../../components/CTA";

const Landing = () => {
  return (
    <div className={styles.container}>
      <HeroItem />
      <CardItem />
      <HowItWorks />
      <GetConnected />
      <CTA description="" buttonText="Volunteer" />
    </div>
  );
};

export default Landing;
