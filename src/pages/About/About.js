import { Showcase, Companies, Experience, Comparison } from "./components";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <h1 className={styles.title}>We are TeamWyrk</h1>
      <Showcase />
      <Companies />
      <Experience />
      <Comparison />
      {/* <CTA /> */}
    </div>
  );
};

export default About;
