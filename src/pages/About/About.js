import { Showcase, Companies, Experience, Comparison } from "./components";
import CTA from "../../components/CTA";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <h1 className={styles.title}>We are TeamWyrk</h1>
      <Showcase />
      <Companies />
      <Experience />
      <Comparison />
      <CTA buttonText="Get Started" />
    </div>
  );
};

export default About;
