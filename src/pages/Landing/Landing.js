import { HowItWorks, CardItem, HeroItem, GetConnect } from "./components";
import styles from "./Landing.module.css";
import CTA from "../../components/CTA";

const Landing = () => {
  return (
    <div className={styles.container}>
      <HeroItem />
      <CardItem />
      <HowItWorks />
      <GetConnect />
      <CTA description="" buttonText="Get started" />
    </div>
  );
};

export default Landing;
