import { Showcase, Companies, Experience, Comparison } from "./components";
import CTA from "../../components/CTA";
import styles from "./About.module.css";
import { Header } from "../../components/Typography";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">We are TeamWyrk</Header>
      </div>
      <Showcase />
      <Companies />
      <Experience />
      <Comparison />
      <CTA buttonText="Join the waitlist" />
    </div>
  );
};

export default About;
