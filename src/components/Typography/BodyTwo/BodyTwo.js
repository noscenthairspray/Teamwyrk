import styles from "./BodyTwo.module.css";

const BodyTwo = ({ color, children }) => {
  return (
    <p className={`${styles.bodyTwo} ${styles[`${color}`]}`}>{children}</p>
  );
};

export default BodyTwo;
