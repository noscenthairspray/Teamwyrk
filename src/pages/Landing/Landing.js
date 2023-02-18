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
      <CTA
        description="Join the waitlist to be among the first to know when TeamWyrk launches."
        buttonText="Join the waitlist"
      />
    </div>
  );
};

export default Landing;
